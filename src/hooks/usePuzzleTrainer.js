import { useState, useEffect, useCallback, useRef } from 'react';
import { Chess } from 'chess.js';
import confetti from 'canvas-confetti';
import { chessAudio } from '../utils/audio';

export function usePuzzleTrainer(puzzle, onPuzzleSolved) {
  const [game, setGame] = useState(() => new Chess(puzzle?.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
  const [stepIndex, setStepIndex] = useState(0);
  const [status, setStatus] = useState('IDLE'); // 'IDLE', 'CORRECT_STEP', 'WRONG_MOVE', 'SOLVED'
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [boardOrientation, setBoardOrientation] = useState('white');
  const [isAiThinking, setIsAiThinking] = useState(false);

  const computerTimerRef = useRef(null);

  // Initialize puzzle
  const initPuzzle = useCallback((puzzleData) => {
    if (!puzzleData || !puzzleData.fen) return;
    try {
      const newGame = new Chess(puzzleData.fen);
      setGame(newGame);
    } catch (e) {
      console.error('Invalid puzzle FEN:', puzzleData.fen, e);
    }
    setStepIndex(0);
    setStatus('IDLE');
    setFeedbackMessage('');
    setShowHint(false);
    setShowSolutionModal(false);
    setIsAiThinking(false);
    setBoardOrientation(puzzleData?.turn === 'b' ? 'black' : 'white');
  }, []);

  useEffect(() => {
    initPuzzle(puzzle);

    return () => {
      if (computerTimerRef.current) clearTimeout(computerTimerRef.current);
    };
  }, [puzzle, initPuzzle]);

  const resetPuzzle = useCallback(() => {
    initPuzzle(puzzle);
  }, [puzzle, initPuzzle]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  };

  const makeUserMove = useCallback((fromArg, toArg) => {
    if (status === 'SOLVED' || isAiThinking || !puzzle || !puzzle.solutionMoves) return false;

    let from = fromArg;
    let to = toArg;
    if (fromArg && typeof fromArg === 'object') {
      from = fromArg.sourceSquare;
      to = fromArg.targetSquare;
    }

    if (!from || !to) return false;

    const currentStep = puzzle.solutionMoves[stepIndex];
    if (!currentStep) return false;

    // Check legality in chess.js
    const gameCopy = new Chess(game.fen());
    let moveResult = null;
    try {
      moveResult = gameCopy.move({ from, to, promotion: 'q' });
    } catch (e) {
      moveResult = null;
    }

    if (!moveResult) {
      chessAudio.playError();
      setStatus('WRONG_MOVE');
      setFeedbackMessage('Movimiento no permitido por las reglas del ajedrez.');
      return false;
    }

    // Check if move matches solution
    const isCorrectFrom = currentStep.from === from;
    const isCorrectTo = currentStep.to === to;

    if (!isCorrectFrom || !isCorrectTo) {
      chessAudio.playError();
      setStatus('WRONG_MOVE');
      setFeedbackMessage(`Jugada alternativa (${moveResult.san}). No es la solución táctica recomendada por Koblenz en este diagrama.`);
      return false;
    }

    // Correct user move!
    setGame(gameCopy);
    
    if (moveResult.captured) {
      chessAudio.playCapture();
    } else if (moveResult.san.includes('+')) {
      chessAudio.playCheck();
    } else {
      chessAudio.playMove();
    }

    // Check if there is an opponent response in this step
    if (currentStep.response) {
      setStatus('CORRECT_STEP');
      setFeedbackMessage('¡Excelente jugada! Observa la respuesta de la defensa...');
      setIsAiThinking(true);

      computerTimerRef.current = setTimeout(() => {
        const aiGame = new Chess(gameCopy.fen());
        try {
          const responseMove = currentStep.response;
          const aiMoveResult = aiGame.move({ from: responseMove.from, to: responseMove.to, promotion: 'q' });
          setGame(aiGame);

          if (aiMoveResult?.captured) {
            chessAudio.playCapture();
          } else {
            chessAudio.playMove();
          }
        } catch (err) {
          console.error('Error executing computer response move:', err);
        }

        setIsAiThinking(false);

        // Check if there are more steps
        const nextStepIndex = stepIndex + 1;
        const totalSolutionSteps = puzzle?.solutionMoves?.length || 0;
        if (nextStepIndex >= totalSolutionSteps) {
          setStatus('SOLVED');
          setFeedbackMessage('¡Felicitaciones! Has resuelto la combinación de Alexander Koblenz.');
          chessAudio.playSuccess();
          triggerConfetti();
          if (onPuzzleSolved) onPuzzleSolved(puzzle.id);
        } else {
          setStepIndex(nextStepIndex);
          setFeedbackMessage('Tu turno de nuevo. Realiza la jugada decisiva.');
        }
      }, 700);
    } else {
      // No opponent response, check if solved
      const nextStepIndex = stepIndex + 1;
      const totalSolutionSteps = puzzle?.solutionMoves?.length || 0;
      if (nextStepIndex >= totalSolutionSteps) {
        setStatus('SOLVED');
        setFeedbackMessage('¡Excelente! Combinación resuelta con maestría.');
        chessAudio.playSuccess();
        triggerConfetti();
        if (onPuzzleSolved) onPuzzleSolved(puzzle.id);
      } else {
        setStepIndex(nextStepIndex);
        setStatus('CORRECT_STEP');
        setFeedbackMessage('¡Correcto! Continúa la variante.');
      }
    }

    return true;
  }, [game, puzzle, stepIndex, status, isAiThinking, onPuzzleSolved]);

  const toggleHint = useCallback(() => {
    setShowHint((prev) => !prev);
  }, []);

  const toggleSolutionModal = useCallback(() => {
    setShowSolutionModal((prev) => !prev);
  }, []);

  const currentHintText = puzzle?.solutionMoves?.[stepIndex]
    ? `Sugerencia: Koblenz sugiere mover la pieza en la casilla ${puzzle.solutionMoves[stepIndex].from.toUpperCase()}.`
    : (puzzle?.hint || 'Analiza las piezas indefensas del bando enemigo.');

  return {
    fen: game.fen(),
    status,
    feedbackMessage,
    showHint,
    currentHintText,
    showSolutionModal,
    boardOrientation,
    isAiThinking,
    makeUserMove,
    resetPuzzle,
    toggleHint,
    toggleSolutionModal
  };
}

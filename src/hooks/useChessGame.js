import { useState, useEffect, useCallback, useRef } from 'react';
import { Chess } from 'chess.js';
import { chessAudio } from '../utils/audio';

export function useChessGame(example) {
  const getInitialFen = useCallback((ex) => {
    return ex?.initialFen || ex?.fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  }, []);

  // Initialize chess engine instance and fen state
  const [fen, setFen] = useState(() => {
    const startFen = getInitialFen(example);
    try {
      const chess = new Chess(startFen);
      return chess.fen();
    } catch (e) {
      return startFen;
    }
  });

  const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [boardOrientation, setBoardOrientation] = useState('white');
  const autoPlayTimerRef = useRef(null);

  // Sync state whenever selected example changes
  useEffect(() => {
    const startFen = getInitialFen(example);
    try {
      const chess = new Chess(startFen);
      const initialFenStr = chess.fen();
      setFen(initialFenStr);
      setCurrentMoveIndex(-1);
      setIsPlaying(false);

      if (initialFenStr.includes(' b ')) {
        setBoardOrientation('black');
      } else {
        setBoardOrientation('white');
      }
    } catch (e) {
      console.error('Error initializing Chess with example FEN:', startFen, e);
      setFen(startFen);
    }
  }, [example, getInitialFen]);

  const totalMoves = example?.moves?.length || 0;

  const goToMove = useCallback((index) => {
    if (!example || !example.moves) return;
    const targetIdx = Math.max(-1, Math.min(index, totalMoves - 1));
    const startFen = getInitialFen(example);
    const chess = new Chess(startFen);

    if (targetIdx === -1) {
      setFen(chess.fen());
      setCurrentMoveIndex(-1);
      return;
    }

    for (let i = 0; i <= targetIdx; i++) {
      const moveData = example.moves[i];
      if (moveData) {
        try {
          if (moveData.san) {
            chess.move(moveData.san);
          } else if (moveData.from && moveData.to) {
            chess.move({ from: moveData.from, to: moveData.to, promotion: 'q' });
          }
        } catch (err) {
          if (moveData.from && moveData.to) {
            try {
              chess.move({ from: moveData.from, to: moveData.to, promotion: 'q' });
            } catch (err2) {
              console.error(`Move execution error at index ${i}:`, moveData, err2);
            }
          }
        }
      }
    }

    const nextFen = chess.fen();
    setFen(nextFen);
    setCurrentMoveIndex(targetIdx);

    // Audio feedback
    const lastMove = example.moves[targetIdx];
    if (lastMove?.san?.includes('x')) {
      chessAudio.playCapture();
    } else if (lastMove?.san?.includes('+') || lastMove?.san?.includes('#')) {
      chessAudio.playCheck();
    } else {
      chessAudio.playMove();
    }
  }, [example, totalMoves, getInitialFen]);

  const goToFirst = useCallback(() => goToMove(-1), [goToMove]);
  const goToPrev = useCallback(() => goToMove(currentMoveIndex - 1), [goToMove, currentMoveIndex]);
  const goToNext = useCallback(() => goToMove(currentMoveIndex + 1), [goToMove, currentMoveIndex]);
  const goToLast = useCallback(() => goToMove(totalMoves - 1), [goToMove, totalMoves]);

  const flipBoard = useCallback(() => {
    setBoardOrientation((prev) => (prev === 'white' ? 'black' : 'white'));
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      if (currentMoveIndex < totalMoves - 1) {
        autoPlayTimerRef.current = setTimeout(() => {
          goToNext();
        }, 2200);
      } else {
        setIsPlaying(false);
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying, currentMoveIndex, totalMoves, goToNext]);

  const currentCommentary = currentMoveIndex >= 0 ? example?.moves?.[currentMoveIndex]?.commentary : example?.intro;
  const activeMove = currentMoveIndex >= 0 ? example?.moves?.[currentMoveIndex] : null;

  return {
    fen,
    currentFen: fen,
    currentMoveIndex,
    totalMoves,
    currentCommentary,
    activeMove,
    isPlaying,
    boardOrientation,
    goToFirst,
    goToPrev,
    goToNext,
    goToLast,
    goToMove,
    flipBoard,
    toggleAutoPlay
  };
}

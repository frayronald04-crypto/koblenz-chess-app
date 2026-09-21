import React, { useState } from 'react';
import {
  Target,
  HelpCircle,
  Eye,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Star
} from 'lucide-react';
import { usePuzzleTrainer } from '../../hooks/usePuzzleTrainer';
import { BoardContainer } from '../chessboard/BoardContainer';
import { FeedbackBadge } from './FeedbackBadge';
import { SolutionModal } from './SolutionModal';
import { getTurnText, getDifficultyBadge } from '../../utils/formatters';

export function PuzzleTrainer({
  chapter,
  puzzles = [],
  completedPuzzleIds = [],
  onPuzzleSolved,
  boardTheme
}) {
  const [selectedPuzzleIndex, setSelectedPuzzleIndex] = useState(0);
  const currentPuzzle = puzzles[selectedPuzzleIndex] || puzzles[0];

  const {
    fen,
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
  } = usePuzzleTrainer(currentPuzzle, onPuzzleSolved);

  if (!chapter || !puzzles || puzzles.length === 0) {
    return (
      <div className="glass-panel p-8 rounded-3xl text-center space-y-3">
        <Target className="w-10 h-10 text-indigo-400 mx-auto" />
        <h3 className="text-lg font-bold text-slate-200">Sin ejercicios disponibles</h3>
        <p className="text-xs text-slate-400">
          No hay diagramas cargados para este capítulo actualmente.
        </p>
      </div>
    );
  }

  const isCurrentSolved = completedPuzzleIds.includes(currentPuzzle.id);
  const diffBadge = getDifficultyBadge(currentPuzzle.difficulty);

  const handlePieceDrop = (sourceSquare, targetSquare) => {
    let source = sourceSquare;
    let target = targetSquare;
    if (sourceSquare && typeof sourceSquare === 'object') {
      source = sourceSquare.sourceSquare;
      target = sourceSquare.targetSquare;
    }
    if (!source || !target) return false;
    return makeUserMove(source, target);
  };

  const handleNextPuzzle = () => {
    if (selectedPuzzleIndex < puzzles.length - 1) {
      setSelectedPuzzleIndex((prev) => prev + 1);
    } else {
      setSelectedPuzzleIndex(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Puzzle Selector & Header Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-100 text-base">{currentPuzzle.title}</h3>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${diffBadge.color}`}>
                {diffBadge.label}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Capítulo: <span className="text-amber-300 font-semibold">{chapter.title}</span>
            </p>
          </div>
        </div>

        {/* Puzzle Selector Pills */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {puzzles.map((puz, idx) => {
            const isSolved = completedPuzzleIds.includes(puz.id);
            const isSelected = idx === selectedPuzzleIndex;

            return (
              <button
                key={puz.id}
                onClick={() => setSelectedPuzzleIndex(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400 shadow-md shadow-emerald-600/20'
                    : isSolved
                    ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/40'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {isSolved ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Star className="w-3.5 h-3.5 opacity-60" />
                )}
                <span>Ejercicio {idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Trainer View: Board + Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Interactive Board */}
        <div className="lg:col-span-7 space-y-4">
          <BoardContainer
            fen={fen}
            boardOrientation={boardOrientation}
            onPieceDrop={handlePieceDrop}
            boardTheme={boardTheme}
            arePiecesDraggable={status !== 'SOLVED' && !isAiThinking}
            shakeError={status === 'WRONG_MOVE'}
          />
        </div>

        {/* Right: Controls & Hints Panel */}
        <div className="lg:col-span-5 space-y-4">
          {/* Turn Indicator & Status */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full border shadow-sm ${
                    currentPuzzle.turn === 'w'
                      ? 'bg-white border-slate-300'
                      : 'bg-slate-900 border-slate-700'
                  }`}
                />
                <span className="font-bold text-sm text-slate-200">
                  {getTurnText(currentPuzzle.turn)}
                </span>
              </div>

              {isCurrentSolved && (
                <span className="px-2.5 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resuelto</span>
                </span>
              )}
            </div>

            {/* Live Feedback Badge */}
            <FeedbackBadge
              status={status}
              message={feedbackMessage}
              isAiThinking={isAiThinking}
            />

            {/* Hint Box if toggled */}
            {showHint && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-2.5 animate-fadeIn">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{currentHintText}</span>
              </div>
            )}

            {/* Action Buttons Toolbar */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={toggleHint}
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-all border ${
                  showHint
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                }`}
              >
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>{showHint ? 'Ocultar Pista' : 'Pedir Pista'}</span>
              </button>

              <button
                onClick={toggleSolutionModal}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-all"
              >
                <Eye className="w-4 h-4 text-indigo-400" />
                <span>Solucionario</span>
              </button>

              <button
                onClick={resetPuzzle}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-all"
              >
                <RotateCcw className="w-4 h-4 text-slate-400" />
                <span>Reiniciar</span>
              </button>

              <button
                onClick={handleNextPuzzle}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-semibold transition-all shadow-md shadow-emerald-600/30"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Modal Popup */}
      <SolutionModal
        puzzle={currentPuzzle}
        isOpen={showSolutionModal}
        onClose={toggleSolutionModal}
      />
    </div>
  );
}

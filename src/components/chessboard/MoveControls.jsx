import React from 'react';
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

export function MoveControls({
  currentMoveIndex,
  totalMoves,
  goToFirst,
  goToPrev,
  goToNext,
  goToLast,
  isPlaying,
  toggleAutoPlay,
  onReset
}) {
  const isAtStart = currentMoveIndex <= -1;
  const isAtEnd = currentMoveIndex >= totalMoves - 1;

  return (
    <div className="flex items-center justify-center gap-2 p-2 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-lg max-w-[540px] mx-auto w-full">
      {onReset && (
        <button
          onClick={onReset}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition-all border border-slate-700"
          title="Reiniciar Posición"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={goToFirst}
        disabled={isAtStart}
        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 transition-all border border-slate-700"
        title="Primera Jugada"
      >
        <ChevronsLeft className="w-4 h-4" />
      </button>

      <button
        onClick={goToPrev}
        disabled={isAtStart}
        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 transition-all border border-slate-700"
        title="Jugada Anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {toggleAutoPlay && (
        <button
          onClick={toggleAutoPlay}
          disabled={isAtEnd && !isPlaying}
          className={`px-4 py-2.5 rounded-xl flex items-center gap-2 font-semibold text-xs transition-all border ${
            isPlaying
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
              : 'bg-indigo-600 hover:bg-indigo-500 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span>Pausar</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span>Reproducir</span>
            </>
          )}
        </button>
      )}

      <button
        onClick={goToNext}
        disabled={isAtEnd}
        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 transition-all border border-slate-700"
        title="Siguiente Jugada"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <button
        onClick={goToLast}
        disabled={isAtEnd}
        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 transition-all border border-slate-700"
        title="Última Jugada"
      >
        <ChevronsRight className="w-4 h-4" />
      </button>
    </div>
  );
}

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

  const baseButtonClass =
    'min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-700 active:scale-95 disabled:opacity-40 disabled:hover:bg-slate-800 disabled:active:bg-slate-800 disabled:active:scale-100 disabled:cursor-not-allowed text-slate-200 transition-all border border-slate-700 select-none touch-manipulation';

  return (
    <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-lg max-w-[540px] mx-auto w-full">
      {onReset && (
        <button
          onClick={onReset}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-700 active:scale-95 text-slate-300 hover:text-amber-300 transition-all border border-slate-700 select-none touch-manipulation"
          title="Reiniciar Posición"
          aria-label="Reiniciar Posición"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      )}

      <button
        onClick={goToFirst}
        disabled={isAtStart}
        className={baseButtonClass}
        title="Primera Jugada"
        aria-label="Primera Jugada"
      >
        <ChevronsLeft className="w-4 h-4" />
      </button>

      <button
        onClick={goToPrev}
        disabled={isAtStart}
        className={baseButtonClass}
        title="Jugada Anterior"
        aria-label="Jugada Anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {toggleAutoPlay && (
        <button
          onClick={toggleAutoPlay}
          disabled={isAtEnd && !isPlaying}
          className={`min-h-[44px] min-w-[44px] px-2.5 sm:px-4 rounded-xl flex items-center justify-center gap-1.5 font-semibold text-xs transition-all border select-none touch-manipulation active:scale-95 disabled:opacity-40 disabled:active:scale-100 disabled:cursor-not-allowed ${
            isPlaying
              ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30 active:bg-amber-500/40'
              : 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
          }`}
          title={isPlaying ? 'Pausar' : 'Reproducir'}
          aria-label={isPlaying ? 'Pausar reproducción' : 'Reproducir variante'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 shrink-0" />
              <span className="hidden min-[370px]:inline">Pausar</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 shrink-0" />
              <span className="hidden min-[370px]:inline">Reproducir</span>
            </>
          )}
        </button>
      )}

      <button
        onClick={goToNext}
        disabled={isAtEnd}
        className={baseButtonClass}
        title="Siguiente Jugada"
        aria-label="Siguiente Jugada"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <button
        onClick={goToLast}
        disabled={isAtEnd}
        className={baseButtonClass}
        title="Última Jugada"
        aria-label="Última Jugada"
      >
        <ChevronsRight className="w-4 h-4" />
      </button>
    </div>
  );
}


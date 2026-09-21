import React, { useState, useEffect } from 'react';
import { BookOpen, User, MapPin, Clock } from 'lucide-react';
import { useChessGame } from '../../hooks/useChessGame';
import { BoardContainer } from '../chessboard/BoardContainer';
import { MoveControls } from '../chessboard/MoveControls';
import { MoveHistory } from './MoveHistory';
import { ConceptCard } from './ConceptCard';

export function ChapterViewer({ chapter, examples = [], boardTheme }) {
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);

  // Reiniciar índice al cambiar de capítulo
  useEffect(() => {
    setSelectedExampleIndex(0);
  }, [chapter?.id]);

  const currentExample = examples.length > 0 ? (examples[selectedExampleIndex] || examples[0]) : null;

  const {
    fen,
    currentFen,
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
  } = useChessGame(currentExample);

  if (!chapter) return null;

  return (
    <div className="space-y-6">
      {/* Tarjeta de Concepto */}
      <ConceptCard chapter={chapter} />

      {/* Barra de Selección de Ejemplos */}
      {examples.length > 0 ? (
        <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-sm text-slate-200">Ejemplos Comentados:</span>
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {examples.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => setSelectedExampleIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  selectedExampleIndex === idx
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Ejemplo {idx + 1}: {ex.title}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-2">
          <Clock className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-sm font-bold text-slate-200">Próximamente más ejemplos comentados</h3>
          <p className="text-xs text-slate-400">
            Puedes practicar los diagramas interactivos de este capítulo cambiando al modo <strong className="text-emerald-400">Entrenador</strong> en la barra superior.
          </p>
        </div>
      )}

      {/* Vista Interactiva: Tablero y Panel Lateral */}
      {currentExample && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Columna Izquierda: Tablero + Controles */}
          <div className="lg:col-span-7 space-y-4">
            <BoardContainer
              key={currentExample.id}
              position={currentFen || fen}
              fen={currentFen || fen}
              boardOrientation={boardOrientation}
              boardTheme={boardTheme}
              highlightSquares={activeMove?.highlightSquares || []}
              onFlipBoard={flipBoard}
              arePiecesDraggable={false}
            />

            <MoveControls
              currentMoveIndex={currentMoveIndex}
              totalMoves={totalMoves}
              goToFirst={goToFirst}
              goToPrev={goToPrev}
              goToNext={goToNext}
              goToLast={goToLast}
              isPlaying={isPlaying}
              toggleAutoPlay={toggleAutoPlay}
            />
          </div>

          {/* Columna Derecha: Metadatos, Jugadas y Comentarios */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-2">
              <h3 className="font-bold text-slate-100 text-base">{currentExample.title}</h3>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentExample.whitePlayer} vs {currentExample.blackPlayer}</span>
                </div>
                {currentExample.event && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{currentExample.event} ({currentExample.year})</span>
                  </div>
                )}
              </div>
            </div>

            <MoveHistory
              moves={currentExample.moves}
              currentMoveIndex={currentMoveIndex}
              onSelectMove={goToMove}
              currentCommentary={currentCommentary}
            />
          </div>
        </div>
      )}
    </div>
  );
}
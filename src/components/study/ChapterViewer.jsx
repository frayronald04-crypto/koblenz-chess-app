import React, { useState, useEffect } from 'react';
import { BookOpen, User, MapPin, Clock, Layout, MessageSquare } from 'lucide-react';
import { useChessGame } from '../../hooks/useChessGame';
import { BoardContainer } from '../chessboard/BoardContainer';
import { MoveControls } from '../chessboard/MoveControls';
import { MoveHistory } from './MoveHistory';
import { ConceptCard } from './ConceptCard';

export function ChapterViewer({ chapter, examples = [], boardTheme, isMuted = false }) {
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('board');

  // Reiniciar índice al cambiar de capítulo
  useEffect(() => {
    setSelectedExampleIndex(0);
    setActiveTab('board');
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
  } = useChessGame(currentExample, isMuted);

  if (!chapter) return null;

  return (
    <div className="space-y-6">
      {/* Barra de Pestañas Móviles (visible solo en <lg) */}
      <div className="flex lg:hidden items-center p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 gap-1.5 shadow-md">
        <button
          onClick={() => setActiveTab('concept')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
            activeTab === 'concept'
              ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Concepto Teórico</span>
        </button>

        <button
          onClick={() => setActiveTab('board')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
            activeTab === 'board'
              ? 'bg-gradient-to-r from-amber-500/30 to-amber-600/30 border-amber-500/50 text-amber-300 shadow-md shadow-amber-500/10'
              : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layout className="w-4 h-4" />
          <span>Tablero y Análisis</span>
        </button>
      </div>

      {/* 1. Tarjeta de Concepto: visible en <lg solo si activeTab === 'concept', en lg siempre arriba */}
      <div className={`${activeTab === 'concept' ? 'block' : 'hidden'} lg:block`}>
        <ConceptCard chapter={chapter} />
      </div>

      {/* 2. Sección de Tablero y Análisis: visible en <lg solo si activeTab === 'board', en lg siempre activa */}
      <div className={`${activeTab === 'board' ? 'block' : 'hidden'} lg:block space-y-6`}>
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
            {/* Columna Izquierda (Tablero + Controles + Comentario Inmediato en Móvil) */}
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

              {/* Caja de Comentarios de Alexander Koblenz (Visible inmediatamente en móvil) */}
              <div className="lg:hidden glass-panel p-4 rounded-2xl border border-amber-500/30 bg-slate-900/90 space-y-2 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Comentario de Alexander Koblenz:</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  {currentCommentary || 'Selecciona o avanza una jugada para ver los comentarios explicativos.'}
                </p>
              </div>
            </div>

            {/* Columna Derecha (Metadatos y Notación de Jugadas) */}
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
    </div>
  );
}
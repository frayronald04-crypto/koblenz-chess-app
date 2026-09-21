import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Download,
  Target,
  Play,
  CheckCircle2,
  Bookmark,
  FileText,
  User,
  MapPin,
  Eye,
  Layers
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters';
import { BOOK_FULL_CONTENT } from '../../data/bookContent';
import { EXAMPLES } from '../../data/examples';
import { useChessGame } from '../../hooks/useChessGame';
import { BoardContainer } from '../chessboard/BoardContainer';
import { MoveControls } from '../chessboard/MoveControls';
import { MoveHistory } from '../study/MoveHistory';

/**
 * Formatea cadenas con notación Markdown ligera (**negrita**)
 * en elementos React <strong className="text-amber-200 font-bold">
 */
function renderFormattedText(text) {
  if (!text) return null;
  const parts = String(text).split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const clean = part.slice(2, -2);
      return (
        <strong key={index} className="text-amber-200 font-bold">
          {clean}
        </strong>
      );
    }
    return part;
  });
}

export function BookReader({
  activeChapterId,
  onSelectChapter,
  onSwitchMode,
  boardTheme
}) {
  const [selectedChapterId, setSelectedChapterId] = useState(activeChapterId || 'despensa');
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [mobileTab, setMobileTab] = useState('THEORY'); // 'THEORY' or 'BOARD' for mobile view
  const [viewMode, setViewMode] = useState('INTERACTIVE'); // 'INTERACTIVE' or 'PDF'

  // Reiniciar selección al cambiar capítulo
  useEffect(() => {
    if (activeChapterId && activeChapterId !== selectedChapterId) {
      setSelectedChapterId(activeChapterId);
      setSelectedExampleIndex(0);
    }
  }, [activeChapterId]);

  const activeChapterMeta = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[0];
  const chapterData = BOOK_FULL_CONTENT[selectedChapterId] || BOOK_FULL_CONTENT.despensa;
  const chapterExamples = EXAMPLES.filter((ex) => ex.chapterId === selectedChapterId);

  const currentIndex = CHAPTERS.findIndex((c) => c.id === selectedChapterId);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  const currentExample = chapterExamples.length > 0 ? (chapterExamples[selectedExampleIndex] || chapterExamples[0]) : null;

  // Instanciar motor de ajedrez para el tablero interactivo fijo
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

  const handleChapterChange = (id) => {
    setSelectedChapterId(id);
    setSelectedExampleIndex(0);
    setMobileTab('THEORY');
    if (onSelectChapter) onSelectChapter(id);
  };

  const handleLoadExampleById = (exampleId) => {
    const exIdx = chapterExamples.findIndex((e) => e.id === exampleId);
    if (exIdx >= 0) {
      setSelectedExampleIndex(exIdx);
      setMobileTab('BOARD');
      setViewMode('INTERACTIVE');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 space-y-4 overflow-hidden animate-fadeIn">
      {/* Top Header Bar & Navigation Pills */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 shadow-xl space-y-3 shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                  Libro Completo de Koblenz
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Capítulo {currentIndex + 1} de {CHAPTERS.length}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                «El Mundo Mágico de las Combinaciones»
              </h2>
            </div>
          </div>

          {/* Mode Switcher: Interactive vs Full PDF Embed */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-700/80 shadow-inner">
              <button
                onClick={() => setViewMode('INTERACTIVE')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'INTERACTIVE'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Lectura Digital</span>
              </button>
              <button
                onClick={() => setViewMode('PDF')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'PDF'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-amber-300" />
                <span>Libro PDF Completo</span>
              </button>
            </div>

            <a
              href="/kupdf.net_el-mundo-magico-de-las-combinaciones-koblenz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:border-amber-500/50 shadow-md"
              title="Abrir o descargar el archivo PDF original completo"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Descargar PDF</span>
            </a>

            <button
              onClick={() => onSwitchMode && onSwitchMode('TRAINER')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/30"
            >
              <Target className="w-3.5 h-3.5" />
              <span>Modo Entrenador</span>
            </button>
          </div>
        </div>

        {/* Chapter Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CHAPTERS.map((ch, idx) => {
            const isSelected = ch.id === selectedChapterId;
            return (
              <button
                key={ch.id}
                onClick={() => handleChapterChange(ch.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 border ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'opacity-40'}`} />
                <span>Cap. {idx + 1}: {ch.title.split(':')[1] || ch.title}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile View Toggle Bar (Only visible on screens < 768px) */}
        <div className="flex md:hidden items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setMobileTab('THEORY')}
            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mobileTab === 'THEORY'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ver Teoría</span>
          </button>
          <button
            onClick={() => setMobileTab('BOARD')}
            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mobileTab === 'BOARD'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Ver Tablero ({chapterExamples.length})</span>
          </button>
        </div>
      </div>

      {/* Main Container: Interactive Theory vs Full PDF Embed */}
      {viewMode === 'PDF' ? (
        <div className="flex-1 flex flex-col h-full min-h-0 bg-slate-900/90 rounded-3xl border border-slate-800 p-4 shadow-2xl space-y-3 overflow-hidden animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm sm:text-base">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Visor PDF Original del Libro Completo («El Mundo Mágico de las Combinaciones»)</span>
            </div>
            <a
              href="/kupdf.net_el-mundo-magico-de-las-combinaciones-koblenz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-amber-600 hover:from-indigo-500 hover:to-amber-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Abrir PDF en Pestaña Completa</span>
            </a>
          </div>
          <div className="flex-1 w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
            <iframe
              src="/kupdf.net_el-mundo-magico-de-las-combinaciones-koblenz.pdf#toolbar=1"
              className="w-full h-full border-0"
              title="Libro Completo - El Mundo Mágico de las Combinaciones"
            />
          </div>
        </div>
      ) : (
        /* Main Split Layout: Left Column = Theory Scrollable, Right Column = Fixed Board */
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 min-h-0 overflow-hidden">
          {/* LEFT COLUMN: Scrollable Book Theory Text (7 Cols on md+) */}
          <div className={`md:col-span-7 h-full overflow-y-auto pr-2 space-y-6 scrollbar-thin ${mobileTab === 'BOARD' ? 'hidden md:block' : 'block'}`}>
          <article className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-8 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />

            {/* Chapter Banner */}
            <div className="space-y-4 border-b border-slate-800 pb-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">
                  {activeChapterMeta.difficulty}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Alexander Koblenz
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight leading-snug">
                {chapterData.title}
              </h1>
              <p className="text-base text-amber-300/90 font-medium">
                {chapterData.subtitle}
              </p>

              {/* Epigraph Quote */}
              {chapterData.epigraph && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border-l-4 border-amber-500 text-slate-300 text-sm italic leading-relaxed shadow-inner">
                  {renderFormattedText(chapterData.epigraph)}
                </div>
              )}
            </div>

            {/* Chapter Intro */}
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Introducción Teórica</span>
              </div>
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
                {renderFormattedText(chapterData.intro)}
              </div>
            </div>

            {/* Sections List */}
            <div className="space-y-6 relative z-10 pt-4 border-t border-slate-800/60">
              {chapterData.sections.map((sec, idx) => {
                const hasExample = Boolean(sec.exampleId);

                return (
                  <section
                    key={sec.id || idx}
                    className={`glass-card p-5 sm:p-7 rounded-2xl border transition-all space-y-4 ${
                      hasExample
                        ? 'border-amber-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900 to-amber-950/20'
                        : 'border-slate-800 hover:border-slate-700/80'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800/60 pb-3">
                      <h3 className="text-base sm:text-lg font-bold text-amber-200 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>{sec.title}</span>
                      </h3>

                      {hasExample && (
                        <button
                          onClick={() => handleLoadExampleById(sec.exampleId)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all shrink-0 shadow-sm"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-400" />
                          <span>Cargar en Tablero</span>
                        </button>
                      )}
                    </div>

                    <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-sans space-y-3">
                      {sec.content.split('\n\n').map((paragraph, pIdx) => {
                        if (paragraph.startsWith('- ') || paragraph.includes('\n- ') || /^\d+\.\s\*\*/.test(paragraph)) {
                          const lines = paragraph.split('\n');
                          return (
                            <ul key={pIdx} className="space-y-2.5 my-3">
                              {lines.map((item, itemIdx) => {
                                const cleanItem = item.replace(/^(\d+\.|\-)\s*/, '');
                                if (!cleanItem.trim()) return null;
                                return (
                                  <li key={itemIdx} className="flex items-start gap-2.5 text-slate-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                                    <span>{renderFormattedText(cleanItem)}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          );
                        }
                        return (
                          <p key={pIdx} className="text-slate-300 leading-relaxed">
                            {renderFormattedText(paragraph)}
                          </p>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Summary Rules Card */}
            {chapterData.summaryRules && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/30 via-slate-900 to-indigo-950/30 border border-amber-500/30 space-y-4 shadow-xl">
                <h4 className="font-bold text-amber-300 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  <span>Reglas de Oro de Koblenz para este Capítulo</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {chapterData.summaryRules.map((rule, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 font-medium flex items-start gap-2">
                      <span className="px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 font-bold text-[10px] shrink-0">
                        #{rIdx + 1}
                      </span>
                      <span>{renderFormattedText(rule)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Pagination */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-6 relative z-10">
              {prevChapter ? (
                <button
                  onClick={() => handleChapterChange(prevChapter.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior: {prevChapter.title}</span>
                  <span className="sm:hidden">Anterior</span>
                </button>
              ) : (
                <div />
              )}

              {nextChapter ? (
                <button
                  onClick={() => handleChapterChange(nextChapter.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all ml-auto"
                >
                  <span className="hidden sm:inline">Siguiente: {nextChapter.title}</span>
                  <span className="sm:hidden">Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div />
              )}
            </div>
          </article>
        </div>

        {/* RIGHT COLUMN: All Chapter Diagrams & Interactive Board Panel (5 Cols on md+) */}
        <div className={`md:col-span-5 h-full overflow-y-auto pr-1 space-y-4 scrollbar-thin ${mobileTab === 'THEORY' ? 'hidden md:block' : 'block'}`}>
          {/* Header Panel for Diagrams */}
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Diagramas del Capítulo ({chapterExamples.length})</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                Tablero Interactivo
              </span>
            </div>

            {/* List of All Chapter Diagrams Cards */}
            <div className="grid grid-cols-1 gap-2">
              {chapterExamples.map((ex, idx) => {
                const isSelected = selectedExampleIndex === idx;
                return (
                  <button
                    key={ex.id}
                    onClick={() => setSelectedExampleIndex(idx)}
                    className={`flex items-start justify-between p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/20 via-slate-900 to-indigo-950/40 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                        }`}>
                          Diag. {idx + 1}
                        </span>
                        <h4 className={`text-xs font-bold ${isSelected ? 'text-amber-200' : 'text-slate-200'}`}>
                          {ex.title.replace(/^Diagrama \d+:\s*/, '').replace(/^Ejemplo \d+:\s*/, '')}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {ex.whitePlayer} vs {ex.blackPlayer} ({ex.year || ex.event})
                      </p>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {currentExample ? (
            <>
              {/* Interactive Board Component */}
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

              {/* Move Player Navigation Controls */}
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

              {/* Active Diagram Metadata Card */}
              <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[10px] font-bold">
                    Diagrama Activo #{selectedExampleIndex + 1}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {currentExample.moves?.length || 0} jugadas
                  </span>
                </div>
                <h3 className="font-bold text-slate-100 text-sm">{currentExample.title}</h3>
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

              {/* Move Notation History & Koblenz Commentary */}
              <MoveHistory
                moves={currentExample.moves}
                currentMoveIndex={currentMoveIndex}
                onSelectMove={goToMove}
                currentCommentary={currentCommentary}
              />
            </>
          ) : (
            <div className="glass-panel p-8 rounded-3xl text-center space-y-3 border border-slate-800">
              <BookOpen className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-200">Capítulo Teórico</h3>
              <p className="text-xs text-slate-400">
                Lee la teoría y pulsa en los botones «Cargar en Tablero» dentro del texto para visualizar las posiciones tácticas.
              </p>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
);
}

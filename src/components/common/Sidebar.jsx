import React from 'react';
import {
  Lock,
  GitFork,
  Magnet,
  ShieldOff,
  Eye,
  Zap,
  Scissors,
  RefreshCw,
  X,
  CheckCircle2,
  BookMarked
} from 'lucide-react';
import { CHAPTERS } from '../../data/chapters';
import { BoardThemeSelector } from '../settings/BoardThemeSelector';

const ICON_MAP = {
  Lock,
  GitFork,
  Magnet,
  ShieldOff,
  Eye,
  Zap,
  Scissors,
  RefreshCw
};

export function Sidebar({
  activeChapterId,
  onSelectChapter,
  completedPuzzleIds,
  puzzlesPerChapterMap,
  isOpen,
  onClose,
  boardTheme,
  setBoardTheme
}) {
  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-80 glass-panel border-r border-slate-800 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookMarked className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-slate-100 text-base">Capítulos del Libro</h2>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {CHAPTERS.map((chapter) => {
            const IconComponent = ICON_MAP[chapter.icon] || BookMarked;
            const isSelected = chapter.id === activeChapterId;

            const totalInChapter = puzzlesPerChapterMap[chapter.id]?.total || 0;
            const solvedInChapter = puzzlesPerChapterMap[chapter.id]?.puzzleIds.filter((id) =>
              completedPuzzleIds.includes(id)
            ).length || 0;

            const isChapterCompleted = totalInChapter > 0 && solvedInChapter === totalInChapter;

            return (
              <button
                key={chapter.id}
                onClick={() => {
                  onSelectChapter(chapter.id);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-2xl transition-all border flex items-start gap-3 group relative ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-900/60 to-slate-800/90 border-indigo-500/50 shadow-lg shadow-indigo-950/40 text-white'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700/60 text-slate-300'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl transition-colors mt-0.5 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                      : 'bg-slate-800 text-slate-400 group-hover:text-indigo-400 group-hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="font-semibold text-sm truncate leading-tight group-hover:text-amber-200">
                      {chapter.title}
                    </span>
                    {isChapterCompleted && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">{chapter.subtitle}</p>

                  {/* Micro progress bar */}
                  {totalInChapter > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                          style={{
                            width: `${(solvedInChapter / totalInChapter) * 100}%`
                          }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {solvedInChapter}/{totalInChapter}
                      </span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Sidebar Footer with Board Theme Selector */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60">
          <BoardThemeSelector currentTheme={boardTheme} setTheme={setBoardTheme} />
        </div>
      </aside>
    </>
  );
}

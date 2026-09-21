import React from 'react';
import { BookOpen, Target, Menu, Award, Sparkles } from 'lucide-react';
import { SoundToggle } from './SoundToggle';

export function Header({
  activeMode,
  setActiveMode,
  toggleSidebar,
  solvedCount,
  totalPuzzles,
  isMuted,
  setIsMuted
}) {
  const solvedPercentage = Math.round((solvedCount / (totalPuzzles || 1)) * 100);

  return (
    <header className="sticky top-0 z-30 w-full glass-panel border-b border-slate-800 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Mobile menu toggle + Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700"
            aria-label="Abrir menú de capítulos"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 shadow-lg shadow-indigo-500/20 text-white">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-amber-200 via-amber-100 to-white bg-clip-text text-transparent leading-tight">
                El Mundo Mágico de las Combinaciones
              </h1>
              <p className="text-xs text-amber-400/80 font-medium hidden sm:block">
                Alexander Koblenz • Escuela Soviética de Ajedrez
              </p>
            </div>
          </div>
        </div>

        {/* Center: Mode Selector Tabs */}
        <div className="flex items-center bg-slate-900/80 p-1 rounded-2xl border border-slate-800 shadow-inner">
          <button
            onClick={() => setActiveMode('READING')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMode === 'READING'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Lectura</span>
          </button>

          <button
            onClick={() => setActiveMode('STUDY')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMode === 'STUDY'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Estudio</span>
          </button>

          <button
            onClick={() => setActiveMode('TRAINER')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeMode === 'TRAINER'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>Entrenador</span>
          </button>
        </div>

        {/* Right: Sound + Progress Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <Award className="w-4 h-4 text-amber-400" />
            <div className="text-xs">
              <span className="text-slate-400">Progreso: </span>
              <span className="font-bold text-amber-300">
                {solvedCount}/{totalPuzzles} ({solvedPercentage}%)
              </span>
            </div>
          </div>

          <SoundToggle isMuted={isMuted} setIsMuted={setIsMuted} />
        </div>
      </div>
    </header>
  );
}

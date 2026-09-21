import React from 'react';
import { Palette } from 'lucide-react';

export const BOARD_THEMES = {
  wood: {
    name: 'Madera Clásica',
    darkSquare: '#b58863',
    lightSquare: '#f0d9b5',
    accentColor: '#8c5a2b'
  },
  emerald: {
    name: 'Esmeralda Neón',
    darkSquare: '#059669',
    lightSquare: '#d1fae5',
    accentColor: '#047857'
  },
  midnight: {
    name: 'Azul Noche',
    darkSquare: '#334155',
    lightSquare: '#cbd5e1',
    accentColor: '#1e293b'
  },
  glass: {
    name: 'Vidrio Violeta',
    darkSquare: '#6366f1',
    lightSquare: '#e0e7ff',
    accentColor: '#4338ca'
  }
};

export function BoardThemeSelector({ currentTheme, setTheme }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
        <Palette className="w-3.5 h-3.5 text-indigo-400" />
        <span>Tema del Tablero</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {Object.entries(BOARD_THEMES).map(([key, theme]) => {
          const isSelected = currentTheme === key;

          return (
            <button
              key={key}
              onClick={() => setTheme(key)}
              title={theme.name}
              className={`p-1.5 rounded-xl border transition-all flex flex-col items-center gap-1 ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/30'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              {/* Mini board preview squares */}
              <div className="w-full aspect-square rounded-lg overflow-hidden border border-slate-700 grid grid-cols-2 grid-rows-2">
                <div style={{ backgroundColor: theme.lightSquare }} />
                <div style={{ backgroundColor: theme.darkSquare }} />
                <div style={{ backgroundColor: theme.darkSquare }} />
                <div style={{ backgroundColor: theme.lightSquare }} />
              </div>
              <span className="text-[10px] font-medium text-slate-400 truncate w-full text-center">
                {theme.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

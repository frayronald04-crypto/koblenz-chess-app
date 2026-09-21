import React from 'react';
import { X, CheckCircle, Lightbulb } from 'lucide-react';
import { formatMoveSan } from '../../utils/formatters';

export function SolutionModal({ puzzle, isOpen, onClose }) {
  if (!isOpen || !puzzle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="glass-panel w-full max-w-lg rounded-3xl border border-slate-700/80 p-6 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-slate-100 text-base">Solucionario del Libro</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Puzzle Info */}
        <div className="space-y-1">
          <h4 className="font-bold text-amber-300 text-sm">{puzzle.title}</h4>
          <p className="text-xs text-slate-300 leading-relaxed">{puzzle.explanation}</p>
        </div>

        {/* Solution Moves List */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Secuencia Completa de Jugadas:
          </span>

          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 font-mono text-xs text-slate-200">
            {puzzle.solutionMoves.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">{idx + 1}.</span>
                <span className="font-semibold text-white">{formatMoveSan(step.san)}</span>
                {step.response && (
                  <span className="text-slate-400">
                    ... {formatMoveSan(step.response.san)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold text-xs hover:from-indigo-500 hover:to-indigo-400 transition-all shadow-md shadow-indigo-600/30"
          >
            Entendido, volver a intentar
          </button>
        </div>
      </div>
    </div>
  );
}

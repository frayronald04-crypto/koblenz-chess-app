import React from 'react';
import { Quote, Lightbulb, CheckCircle } from 'lucide-react';

export function ConceptCard({ chapter }) {
  if (!chapter) return null;

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-4">
      {/* Chapter Title & Subtitle */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          {chapter.subtitle}
        </span>
        <h2 className="text-xl font-bold text-slate-100">{chapter.title}</h2>
      </div>

      {/* Koblenz Quote */}
      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 flex items-start gap-3">
        <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm italic leading-relaxed font-serif">
          {chapter.quote}
        </p>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        {chapter.description}
      </p>

      {/* Key Tactical Rules */}
      <div className="space-y-2 pt-2 border-t border-slate-800">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-300">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>Reglas Clave de Koblenz</span>
        </div>
        <ul className="space-y-1.5">
          {chapter.concepts.map((concept, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{concept}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

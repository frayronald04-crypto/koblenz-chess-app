import React from 'react';
import { CheckCircle2, AlertTriangle, Sparkles, Loader2 } from 'lucide-react';

export function FeedbackBadge({ status, message, isAiThinking }) {
  if (isAiThinking) {
    return (
      <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
        <span>Alexander Koblenz (Oponente) está respondiendo...</span>
      </div>
    );
  }

  if (!status || status === 'IDLE') {
    return (
      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium text-center">
        Realiza la jugada decisiva en el tablero.
      </div>
    );
  }

  switch (status) {
    case 'SOLVED':
      return (
        <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 animate-glow-success">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-bounce" />
          <span>{message}</span>
        </div>
      );
    case 'CORRECT_STEP':
      return (
        <div className="p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-indigo-400" />
          <span>{message}</span>
        </div>
      );
    case 'WRONG_MOVE':
      return (
        <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>{message}</span>
        </div>
      );
    default:
      return null;
  }
}

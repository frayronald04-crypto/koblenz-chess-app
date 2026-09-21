import React from 'react';
import { MessageSquare, ListOrdered } from 'lucide-react';
import { formatMoveSan } from '../../utils/formatters';

export function MoveHistory({
  moves = [],
  currentMoveIndex,
  onSelectMove,
  currentCommentary
}) {
  // Group moves into pairs (White move, Black move)
  const movePairs = [];
  for (let i = 0; i < moves.length; i += 2) {
    movePairs.push({
      moveNumber: Math.floor(i / 2) + 1,
      white: { ...moves[i], index: i },
      black: moves[i + 1] ? { ...moves[i + 1], index: i + 1 } : null
    });
  }

  return (
    <div className="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col h-full space-y-3">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
        <ListOrdered className="w-4 h-4 text-indigo-400" />
        <h3 className="font-semibold text-sm text-slate-200">Notación de la Partida</h3>
      </div>

      {/* Move Grid List */}
      <div className="flex-1 max-h-48 sm:max-h-60 overflow-y-auto pr-1 space-y-1 font-mono text-xs">
        {movePairs.map((pair) => (
          <div
            key={pair.moveNumber}
            className="grid grid-cols-7 gap-1 items-center p-1 rounded-lg hover:bg-slate-800/40"
          >
            <span className="col-span-1 text-slate-400 font-sans">{pair.moveNumber}.</span>

            {/* White Move */}
            <button
              onClick={() => onSelectMove(pair.white.index)}
              className={`col-span-3 text-left px-2 py-1 rounded-md transition-all font-semibold ${
                currentMoveIndex === pair.white.index
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {formatMoveSan(pair.white.san)}
            </button>

            {/* Black Move */}
            {pair.black ? (
              <button
                onClick={() => onSelectMove(pair.black.index)}
                className={`col-span-3 text-left px-2 py-1 rounded-md transition-all font-semibold ${
                  currentMoveIndex === pair.black.index
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {formatMoveSan(pair.black.san)}
              </button>
            ) : (
              <div className="col-span-3" />
            )}
          </div>
        ))}
      </div>

      {/* Commentary Box */}
      <div className="pt-2 border-t border-slate-800">
        <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-amber-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Comentario de Alexander Koblenz:</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed min-h-[70px]">
          {currentCommentary || 'Selecciona o avanza una jugada para ver los comentarios explicativos.'}
        </div>
      </div>
    </div>
  );
}

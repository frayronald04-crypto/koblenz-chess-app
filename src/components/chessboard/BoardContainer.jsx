import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { RotateCw } from 'lucide-react';
import { BOARD_THEMES } from '../settings/BoardThemeSelector';

const DEFAULT_START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export function BoardContainer({
  fen,
  position,
  boardOrientation = 'white',
  onPieceDrop,
  boardTheme = 'wood',
  highlightSquares = [],
  onFlipBoard,
  arePiecesDraggable = true,
  shakeError = false
}) {
  const containerRef = useRef(null);
  const [_boardWidth, setBoardWidth] = useState(480);

  const currentThemeObj = BOARD_THEMES[boardTheme] || BOARD_THEMES.wood;

  // Garantizar un FEN válido y limpio (evitando el string 'start' que no es FEN)
  const currentPositionInput = useMemo(() => {
    const raw = String(position || fen || '').trim();
    if (!raw || raw === 'start') {
      return DEFAULT_START_FEN;
    }
    return raw;
  }, [position, fen]);

  // Medir dinámicamente el ancho real del contenedor mediante ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        if (width > 0) {
          setBoardWidth(Math.floor(width));
        }
      }
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setBoardWidth(Math.floor(entry.contentRect.width));
        }
      }
    });

    observer.observe(containerRef.current);
    window.addEventListener('resize', updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  // Compute square styles for active highlights
  const customSquareStyles = useMemo(() => {
    const styles = {};
    if (highlightSquares && highlightSquares.length > 0) {
      highlightSquares.forEach((sq) => {
        styles[sq] = {
          backgroundColor: 'rgba(251, 191, 36, 0.5)',
          borderRadius: '4px'
        };
      });
    }
    return styles;
  }, [highlightSquares]);

  return (
    <div className={`relative w-full max-w-[min(100%,_500px)] mx-auto transition-transform ${shakeError ? 'animate-shake' : ''}`}>
      {/* Board Card Frame with Glow */}
      <div className="p-2 sm:p-3 rounded-3xl glass-panel border border-slate-700/80 board-shadow relative overflow-hidden">
        {/* Flip Board Button */}
        {onFlipBoard && (
          <button
            onClick={onFlipBoard}
            className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-700/80 transition-all shadow-md"
            title="Girar Tablero"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        )}

        {/* Board Component */}
        <div
          ref={containerRef}
          className="rounded-2xl overflow-hidden w-full aspect-square border border-slate-800 shadow-inner flex items-center justify-center relative"
        >
          <Chessboard
            options={{
              position: currentPositionInput,
              boardOrientation: boardOrientation,
              boardStyle: {
                width: '100%',
                height: '100%',
                aspectRatio: '1 / 1'
              },
              darkSquareStyle: { backgroundColor: currentThemeObj.darkSquare },
              lightSquareStyle: { backgroundColor: currentThemeObj.lightSquare },
              squareStyles: customSquareStyles,
              allowDragging: arePiecesDraggable,
              animationDurationInMs: 250,
              onPieceDrop: (dropArg1, dropArg2) => {
                if (!onPieceDrop) return false;
                let source = dropArg1;
                let target = dropArg2;
                if (dropArg1 && typeof dropArg1 === 'object') {
                  source = dropArg1.sourceSquare;
                  target = dropArg1.targetSquare;
                }
                if (!source || !target) return false;
                return onPieceDrop(source, target);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
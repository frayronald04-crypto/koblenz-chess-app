import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
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
  const [selectedSquare, setSelectedSquare] = useState(null);

  const currentThemeObj = BOARD_THEMES[boardTheme] || BOARD_THEMES.wood;

  // Garantizar un FEN válido y limpio (evitando el string 'start' que no es FEN)
  const currentPositionInput = useMemo(() => {
    const raw = String(position || fen || '').trim();
    if (!raw || raw === 'start') {
      return DEFAULT_START_FEN;
    }
    return raw;
  }, [position, fen]);

  // Limpiar casilla seleccionada cuando el FEN / posición cambie
  useEffect(() => {
    setSelectedSquare(null);
  }, [currentPositionInput]);

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

  // Manejador del toque/clic en casilla para interacción táctil "tap-to-move"
  const handleSquareClick = useCallback(
    (arg1, arg2) => {
      if (!arePiecesDraggable) return;

      let square = null;
      if (typeof arg1 === 'string') {
        square = arg1;
      } else if (arg1 && typeof arg1 === 'object' && arg1.square) {
        square = arg1.square;
      } else if (typeof arg2 === 'string') {
        square = arg2;
      }

      if (!square) return;

      if (!selectedSquare) {
        // Primer toque: resalta la casilla de origen
        setSelectedSquare(square);
      } else if (selectedSquare === square) {
        // Tocar la misma casilla: deseleccionar
        setSelectedSquare(null);
      } else {
        // Segundo toque: ejecuta el movimiento onPieceDrop
        if (onPieceDrop) {
          onPieceDrop(selectedSquare, square);
        }
        setSelectedSquare(null);
      }
    },
    [arePiecesDraggable, selectedSquare, onPieceDrop]
  );

  // Compute square styles for active highlights and selected square for mobile screens
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

    if (selectedSquare) {
      styles[selectedSquare] = {
        ...(styles[selectedSquare] || {}),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        boxShadow: 'inset 0 0 0 3px #2563eb, 0 0 8px rgba(59, 130, 246, 0.8)',
        borderRadius: '4px'
      };
    }

    return styles;
  }, [highlightSquares, selectedSquare]);

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
          className="rounded-2xl overflow-hidden w-full aspect-square border border-slate-800 shadow-inner flex items-center justify-center relative touch-none"
          style={{ touchAction: 'none' }}
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
              onSquareClick: handleSquareClick,
              onPieceDrop: (dropArg1, dropArg2) => {
                setSelectedSquare(null);
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
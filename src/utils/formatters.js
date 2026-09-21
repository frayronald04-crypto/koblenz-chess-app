// Spanish chess piece symbols & names
export const PIECE_NAMES_ES = {
  K: 'Rey',
  Q: 'Dama',
  R: 'Torre',
  B: 'Alfil',
  N: 'Caballo',
  P: 'Peón'
};

export const formatMoveSan = (san) => {
  if (!san) return '';
  return san
    .replace(/K/g, 'R')
    .replace(/Q/g, 'D')
    .replace(/R/g, 'T')
    .replace(/B/g, 'A')
    .replace(/N/g, 'C');
};

export const getTurnText = (turn) => {
  return turn === 'w' ? 'Juegan Blancas' : 'Juegan Negras';
};

export const getDifficultyBadge = (difficulty) => {
  switch (difficulty) {
    case 1:
      return { label: 'Fácil', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
    case 2:
      return { label: 'Intermedio', color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
    case 3:
      return { label: 'Avanzado', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' };
    default:
      return { label: 'Normal', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' };
  }
};

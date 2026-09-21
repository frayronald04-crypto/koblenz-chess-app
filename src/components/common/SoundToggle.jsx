import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { chessAudio } from '../../utils/audio';

export function SoundToggle({ isMuted, setIsMuted }) {
  const handleToggle = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    chessAudio.toggleMute(nextState);
    if (!nextState) {
      chessAudio.playMove();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-xl border transition-all flex items-center gap-2 text-sm font-medium ${
        isMuted
          ? 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50'
      }`}
      title={isMuted ? 'Activar Sonido' : 'Silenciar Sonido'}
    >
      {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
      <span className="hidden sm:inline">{isMuted ? 'Silencio' : 'Sonido'}</span>
    </button>
  );
}

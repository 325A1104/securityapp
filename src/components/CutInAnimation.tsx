import React, { useEffect } from 'react';
import { ProtagonistCutIn } from './Characters';

interface CutInAnimationProps {
  onComplete: () => void;
}

export const CutInAnimation: React.FC<CutInAnimationProps> = ({ onComplete }) => {
  useEffect(() => {
    // Automatically transition to the explanation modal after dramatic pause
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      onClick={onComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-pointer overflow-hidden select-none animate-shake"
    >
      {/* Background Neon Pink Strobe & Speedlines */}
      <div className="absolute inset-0 speedlines opacity-60 animate-pulse pointer-events-none" />
      <div className="absolute inset-0 dangan-stripes opacity-40 pointer-events-none" />

      {/* Center Protagonist Illustration */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        <ProtagonistCutIn />

        {/* Dramatic Japanese Typography "それは違うよ！" */}
        <div className="relative -mt-16 sm:-mt-24 z-20 transform -rotate-2 scale-100 sm:scale-110">
          <div className="relative inline-block">
            {/* Outline / Drop shadow text */}
            <h1 className="font-dela text-4xl sm:text-7xl md:text-8xl tracking-wider text-white text-glow-pink drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] stroke-black">
              それは違うよ！
            </h1>
            
            {/* Sub banner */}
            <div className="mt-2 text-center">
              <span className="font-mono-code text-sm sm:text-lg font-bold tracking-widest text-yellow-300 bg-black/80 px-4 py-1 rounded border-2 border-pink-500 shadow-[0_0_15px_rgba(255,0,127,0.8)]">
                ★ BREAK!! 論破成功 ★
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Neon Splatter Accents */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#ff007f] opacity-80 blur-xl pointer-events-none animate-ping" />
      <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-[#ff007f] opacity-80 blur-xl pointer-events-none animate-ping" />

      {/* Tap to skip hint */}
      <div className="absolute bottom-4 text-xs font-mono-code text-slate-400 animate-pulse">
        [画面クリックで解説へ進む]
      </div>
    </div>
  );
};

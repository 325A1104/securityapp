import React from 'react';
import { Scenario } from '../data/scenarios';
import { SuspectAvatar } from './Characters';
import { Volume2, VolumeX, Heart, AlertTriangle, ArrowLeft } from 'lucide-react';
import { sound } from '../utils/audio';

interface CourtroomProps {
  scenario: Scenario;
  influence: number;
  maxInfluence: number;
  currentRound: number;
  totalRounds: number;
  gameMode: 'quick' | 'gauntlet' | 'chapter';
  isBroken: boolean;
  damageFlash: boolean;
  onExit: () => void;
  onMuteToggle: () => void;
  isMuted: boolean;
  refutationMessage: string | null;
}

export const Courtroom: React.FC<CourtroomProps> = ({
  scenario,
  influence,
  maxInfluence,
  currentRound,
  totalRounds,
  gameMode,
  isBroken,
  damageFlash,
  onExit,
  onMuteToggle,
  isMuted,
  refutationMessage
}) => {
  return (
    <div className={`relative flex-1 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
      damageFlash ? 'animate-damage bg-red-950/80' : 'bg-gradient-to-b from-[#0a0a10] via-[#10101a] to-[#07070c]'
    }`}>
      {/* Background Courtroom Grid & Cyber Ambience */}
      <div className="absolute inset-0 dangan-stripes-subtle pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-pink-900/10 to-transparent pointer-events-none" />

      {/* Top HUD: Life / Round / Audio */}
      <header className="relative z-10 flex items-center justify-between gap-4 px-4 py-3 border-b border-pink-950/60 bg-[#09090e]/90 backdrop-blur-md">
        {/* Left: Exit & Round Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              sound.playSelect();
              onExit();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 hover:bg-pink-950/70 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-white text-xs font-bold transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-pink-400" />
            <span className="hidden sm:inline">裁判中止</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-[11px] font-bold text-pink-400 tracking-wider">
                {gameMode === 'gauntlet' ? `NON-STOP TRIAL [${currentRound}/${totalRounds}]` : 'CLASS TRIAL : CASE'}
              </span>
              <span className="text-[11px] text-slate-400 hidden md:inline">
                · {scenario.themeTitle}
              </span>
            </div>
            <h2 className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-xs">
              第{scenario.chapterNumber}問 : {scenario.themeTitle}
            </h2>
          </div>
        </div>

        {/* Center: Influence / Health Gauge (発言力) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] font-mono-code font-bold text-slate-400 tracking-wider">
              INFLUENCE
            </span>
            <span className="text-xs font-bold text-pink-400 font-mono-code">
              {influence} / {maxInfluence}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: maxInfluence }).map((_, i) => {
              const isActive = i < influence;
              return (
                <div
                  key={i}
                  className={`transition-all duration-300 ${
                    isActive
                      ? 'text-pink-500 drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] scale-100'
                      : 'text-slate-800 scale-90'
                  }`}
                >
                  <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'fill-pink-500' : 'fill-slate-900'}`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Sound Control & Category */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <span className="text-[10px] font-mono-code text-slate-500 block">CATEGORY</span>
            <span className="text-xs font-bold text-slate-300">{scenario.category}</span>
          </div>
          <button
            onClick={() => {
              sound.playSelect();
              onMuteToggle();
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-white transition-all"
            title={isMuted ? 'サウンドをオンにする' : 'サウンドをミュートにする'}
            aria-label="音声切り替え"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-pink-400" />}
          </button>
        </div>
      </header>

      {/* Main Debate Courtroom Arena */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-4 max-w-5xl mx-auto w-full">
        {/* Warning / Refutation Notification Banner if wrong */}
        {refutationMessage && (
          <div className="absolute top-4 left-4 right-4 z-20 mx-auto max-w-lg p-3 rounded-lg bg-red-950/90 border-2 border-red-600 shadow-[0_0_25px_rgba(220,38,38,0.7)] text-white text-center animate-shake">
            <div className="flex items-center justify-center gap-2 text-red-400 font-bold text-sm mb-1">
              <AlertTriangle className="w-5 h-5 text-red-500 animate-bounce" />
              <span>【反論された！ 発言力減少】</span>
            </div>
            <p className="text-xs text-red-200">{refutationMessage}</p>
          </div>
        )}

        {/* Witness Stand & Suspect Area */}
        <div className="flex flex-col items-center w-full">
          {/* Suspect Vector Portrait */}
          <div className="relative mb-2">
            <SuspectAvatar
              type={scenario.avatarType}
              isBroken={isBroken}
              className="w-36 h-36 sm:w-44 sm:h-44"
            />
          </div>

          {/* Witness Stand Podium */}
          <div className="relative w-64 sm:w-80 h-10 bg-gradient-to-r from-slate-900 via-[#1c1c2b] to-slate-900 border-2 border-[#ff007f]/60 rounded-t-lg shadow-[0_0_20px_rgba(255,0,127,0.3)] flex items-center justify-center">
            {/* Wooden podium grain accent */}
            <div className="absolute inset-x-2 top-1 h-[2px] bg-pink-500/50" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold tracking-widest text-pink-400 bg-pink-950/80 px-1.5 py-0.5 rounded border border-pink-700/60">
                WITNESS STAND
              </span>
              <span className="text-xs font-bold text-white tracking-wide">
                {scenario.suspectName}
              </span>
            </div>
          </div>

          {/* Suspect Title Badge */}
          <div className="text-[11px] text-pink-300 font-medium tracking-wide mb-4">
            〈{scenario.suspectTitle}〉
          </div>

          {/* Suspect Speech Dialogue Box */}
          <div className="relative w-full max-w-3xl">
            {/* Chat bubble pointer */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-pink-500" />

            <div className="relative bg-[#11111c]/95 border-2 border-pink-500/80 rounded-xl p-5 sm:p-6 shadow-[0_0_30px_rgba(255,0,127,0.35)] backdrop-blur-md">
              {/* Speaker Tag in Corner */}
              <div className="absolute -top-3 left-6 bg-[#ff007f] text-white px-3 py-0.5 rounded font-dela text-xs tracking-wider shadow-[0_0_10px_rgba(255,0,127,0.7)]">
                {scenario.suspectName} の主張
              </div>

              {/* The statement with dynamic weak point styling */}
              <div className="pt-2">
                <p className="text-base sm:text-xl font-bold text-slate-100 leading-relaxed text-center sm:text-left">
                  {scenario.suspectQuote}
                </p>

                {/* Contradiction Clue / Target Reticle */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs text-pink-400 font-mono-code">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block" />
                    <span>矛盾点（WEAK POINT）：</span>
                    <span className="font-bold text-pink-300 underline decoration-pink-500 decoration-wavy underline-offset-4">
                      「{scenario.contradictionPart}」
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 font-mono-code">
                    TARGET: CONTRADICTION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Kotodama } from '../data/scenarios';
import { 
  ShieldAlert, 
  KeyRound, 
  Terminal, 
  Bot, 
  Lock, 
  Video, 
  FolderSync, 
  HardDrive, 
  AlertOctagon, 
  WifiOff,
  Crosshair,
  Flame,
  ChevronRight
} from 'lucide-react';
import { sound } from '../utils/audio';

interface CylinderSelectorProps {
  kotodamaList: Kotodama[];
  selectedKotodamaId: string | null;
  onSelectKotodama: (id: string) => void;
  onFireRonpa: () => void;
  disabled?: boolean;
}

export const CylinderSelector: React.FC<CylinderSelectorProps> = ({
  kotodamaList,
  selectedKotodamaId,
  onSelectKotodama,
  onFireRonpa,
  disabled = false
}) => {
  const selectedKotodama = kotodamaList.find(k => k.id === selectedKotodamaId);

  const getKotodamaIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Lock': return <Lock className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'FolderSync': return <FolderSync className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'AlertOctagon': return <AlertOctagon className="w-5 h-5" />;
      case 'WifiOff': return <WifiOff className="w-5 h-5" />;
      default: return <ShieldAlert className="w-5 h-5" />;
    }
  };

  const handleCardClick = (id: string) => {
    if (disabled) return;
    sound.playSelect();
    sound.playChamberSpin();
    onSelectKotodama(id);
  };

  const handleFireClick = () => {
    if (disabled || !selectedKotodamaId) return;
    onFireRonpa();
  };

  return (
    <div className="w-full bg-[#09090e]/95 border-t-2 border-[#ff007f]/50 backdrop-blur-md p-3 md:p-4 transition-all">
      {/* Top row of selector: Loaded Ammo indicator + Ronpa Trigger */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 mb-3">
        {/* Revolver Chamber Ammo Indicator */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Chamber graphic */}
          <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#161622] border-2 border-[#ff007f] shadow-[0_0_15px_rgba(255,0,127,0.4)]">
            <div className="absolute inset-1 rounded-full border border-dashed border-pink-400/40 animate-spin" style={{ animationDuration: '12s' }} />
            <Crosshair className="w-6 h-6 text-pink-500 animate-pulse" />
          </div>

          {/* Loaded Kotodama Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-pink-400 font-bold bg-pink-950/60 px-1.5 py-0.5 rounded border border-pink-700/50">
                CHAMBER LOADED
              </span>
              <span className="text-xs text-slate-400 truncate">
                {selectedKotodama ? selectedKotodama.category : '言弾未装填'}
              </span>
            </div>
            <p className="text-sm font-bold text-white truncate max-w-md">
              {selectedKotodama ? selectedKotodama.title : '下部リストから言弾を選択してください'}
            </p>
          </div>
        </div>

        {/* Big RONPA! Button */}
        <button
          onClick={handleFireClick}
          disabled={disabled || !selectedKotodamaId}
          className={`relative group overflow-hidden px-8 py-3 w-full md:w-auto font-dela text-xl tracking-wider rounded-lg transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2 ${
            selectedKotodamaId && !disabled
              ? 'bg-gradient-to-r from-[#ff007f] via-[#e11d48] to-[#ff007f] text-white shadow-[0_0_30px_rgba(255,0,127,0.7)] hover:shadow-[0_0_45px_rgba(255,0,127,1)] hover:scale-105 cursor-pointer'
              : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
          }`}
        >
          {/* Neon scanline inside button */}
          {selectedKotodamaId && !disabled && (
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
          )}
          <Flame className={`w-6 h-6 ${selectedKotodamaId ? 'text-yellow-300 animate-bounce' : 'text-slate-600'}`} />
          <span className="drop-shadow-md">論破！</span>
          <ChevronRight className="w-5 h-5 text-white/80" />
        </button>
      </div>

      {/* Kotodama Cards Scrollable Strip */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-1.5 px-1">
          <span className="text-xs font-mono-code font-bold text-pink-400 tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-500 inline-block animate-ping" />
            言弾（コトダマ）シリンダー [全{kotodamaList.length}発]
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            ※誤った主張を撃ち抜く正しい言弾を選択
          </span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-pink-600/40 scrollbar-track-transparent snap-x">
          {kotodamaList.map((kotodama) => {
            const isSelected = kotodama.id === selectedKotodamaId;
            return (
              <button
                key={kotodama.id}
                onClick={() => handleCardClick(kotodama.id)}
                disabled={disabled}
                className={`snap-start flex-shrink-0 w-64 md:w-72 p-3 rounded-lg border text-left transition-all duration-200 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#241324] to-[#120914] border-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.5)] translate-y-[-2px]'
                    : 'bg-[#12121b] border-slate-800 hover:border-pink-500/50 hover:bg-[#181824]'
                }`}
              >
                {/* Metallic bullet top indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  isSelected ? 'bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500' : 'bg-transparent'
                }`} />

                {/* Header: Code & Category */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className={`text-[10px] font-mono-code font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-pink-600 text-white' : 'bg-slate-800 text-pink-400'
                  }`}>
                    {kotodama.code}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {kotodama.category}
                  </span>
                </div>

                {/* Title with icon */}
                <div className="flex items-start gap-2 mb-1.5">
                  <div className={`p-1.5 rounded-md flex-shrink-0 ${
                    isSelected ? 'bg-pink-500/30 text-pink-300' : 'bg-slate-800/80 text-slate-400 group-hover:text-pink-400'
                  }`}>
                    {getKotodamaIcon(kotodama.iconName)}
                  </div>
                  <h4 className={`text-xs font-bold leading-tight line-clamp-2 ${
                    isSelected ? 'text-pink-300' : 'text-slate-200 group-hover:text-white'
                  }`}>
                    {kotodama.shortTitle}
                  </h4>
                </div>

                {/* Summary / description */}
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {kotodama.description}
                </p>

                {/* Selected indicator badge */}
                {isSelected && (
                  <div className="mt-2 pt-1 border-t border-pink-900/60 flex items-center justify-between text-[10px] font-mono-code text-pink-400 font-bold">
                    <span>STATUS: ARMED</span>
                    <span>TARGET LOCKED</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

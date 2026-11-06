import React from 'react';

interface SuspectAvatarProps {
  type: string;
  isBroken?: boolean;
  className?: string;
}

export const SuspectAvatar: React.FC<SuspectAvatarProps> = ({ type, isBroken = false, className = "w-40 h-40" }) => {
  // Common colors
  const skinColor = "#fde047";
  const skinTone = isBroken ? "#cbd5e1" : "#fed7aa";
  const eyeColor = isBroken ? "#ef4444" : "#0f172a";

  const renderCharacterContent = () => {
    switch (type) {
      case 'accountant':
        return (
          <g>
            {/* Hair */}
            <path d="M25,50 Q50,15 75,50 Q85,30 50,18 Q15,30 25,50 Z" fill="#1e293b" />
            {/* Head */}
            <circle cx="50" cy="52" r="28" fill={skinTone} stroke="#09090e" strokeWidth="2.5" />
            {/* Hair fringe */}
            <path d="M30,35 Q50,42 70,35 Q50,26 30,35 Z" fill="#1e293b" />
            {/* Glasses */}
            <rect x="33" y="47" width="13" height="9" rx="2" fill="none" stroke="#e11d48" strokeWidth="2.5" />
            <rect x="54" y="47" width="13" height="9" rx="2" fill="none" stroke="#e11d48" strokeWidth="2.5" />
            <line x1="46" y1="51" x2="54" y2="51" stroke="#e11d48" strokeWidth="2" />
            {/* Eyes */}
            {!isBroken ? (
              <>
                <circle cx="39" cy="51" r="2.5" fill={eyeColor} />
                <circle cx="61" cy="51" r="2.5" fill={eyeColor} />
                <path d="M42,66 Q50,72 58,66" fill="none" stroke="#09090e" strokeWidth="2" />
              </>
            ) : (
              <>
                <path d="M36,49 L42,55 M42,49 L36,55" stroke="#ef4444" strokeWidth="2" />
                <path d="M58,49 L64,55 M64,49 L58,55" stroke="#ef4444" strokeWidth="2" />
                <path d="M40,70 Q50,58 60,70" fill="#09090e" stroke="#09090e" strokeWidth="2" />
              </>
            )}
            {/* Suit & Tie */}
            <path d="M22,80 L50,86 L78,80 L88,100 L12,100 Z" fill="#334155" stroke="#09090e" strokeWidth="2" />
            <polygon points="50,86 46,98 54,98" fill="#e11d48" />
          </g>
        );

      case 'newbie':
        return (
          <g>
            {/* Cap/Hair */}
            <path d="M22,46 Q50,15 78,46 Q90,36 50,15 Q10,36 22,46 Z" fill="#e11d48" />
            <circle cx="50" cy="52" r="28" fill={skinTone} stroke="#09090e" strokeWidth="2.5" />
            <path d="M20,44 Q50,22 80,44" stroke="#ff007f" strokeWidth="4" fill="none" />
            {/* Eyes */}
            {!isBroken ? (
              <>
                <circle cx="38" cy="50" r="3" fill="#0284c7" />
                <circle cx="62" cy="50" r="3" fill="#0284c7" />
                <circle cx="40" cy="49" r="1" fill="#fff" />
                <circle cx="64" cy="49" r="1" fill="#fff" />
                <ellipse cx="50" cy="67" rx="5" ry="3" fill="#e11d48" />
              </>
            ) : (
              <>
                {/* Spiral eyes */}
                <circle cx="38" cy="50" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                <circle cx="62" cy="50" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                <path d="M42,68 Q50,60 58,68" stroke="#09090e" strokeWidth="2.5" fill="none" />
              </>
            )}
            {/* Hoodie */}
            <path d="M20,80 Q50,92 80,80 L88,100 L12,100 Z" fill="#0284c7" stroke="#09090e" strokeWidth="2" />
            {/* Phone in hand */}
            <rect x="66" y="70" width="16" height="24" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(15 74 82)" />
          </g>
        );

      case 'dev':
      case 'infra':
        return (
          <g>
            {/* Messy geek hair */}
            <path d="M18,50 Q28,15 50,18 Q75,12 82,50 Q90,32 50,10 Q10,32 18,50 Z" fill="#475569" />
            <circle cx="50" cy="52" r="28" fill={skinTone} stroke="#09090e" strokeWidth="2.5" />
            {/* Thick frame glasses */}
            <rect x="31" y="45" width="16" height="12" rx="3" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
            <rect x="53" y="45" width="16" height="12" rx="3" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
            <line x1="47" y1="51" x2="53" y2="51" stroke="#06b6d4" strokeWidth="2.5" />
            {!isBroken ? (
              <>
                <circle cx="39" cy="51" r="2.5" fill="#09090e" />
                <circle cx="61" cy="51" r="2.5" fill="#09090e" />
                <path d="M44,68 Q50,71 56,68" stroke="#09090e" strokeWidth="2" fill="none" />
              </>
            ) : (
              <>
                <circle cx="39" cy="51" r="4" fill="#09090e" />
                <circle cx="61" cy="51" r="4" fill="#09090e" />
                <polygon points="45,64 55,64 50,74" fill="#09090e" />
              </>
            )}
            {/* Tech hoodie / cable */}
            <path d="M18,80 L50,86 L82,80 L90,100 L10,100 Z" fill="#1e1e24" stroke="#09090e" strokeWidth="2" />
            <path d="M28,85 Q40,95 60,90 Q72,86 76,96" stroke="#22c55e" strokeWidth="2.5" fill="none" />
          </g>
        );

      case 'sales':
        return (
          <g>
            {/* All-back slick hair */}
            <path d="M25,44 Q50,12 75,44 Q85,26 50,14 Q15,26 25,44 Z" fill="#b45309" />
            <circle cx="50" cy="52" r="28" fill={skinTone} stroke="#09090e" strokeWidth="2.5" />
            {!isBroken ? (
              <>
                <path d="M35,46 Q40,43 45,46" stroke="#09090e" strokeWidth="2.5" fill="none" />
                <path d="M55,46 Q60,43 65,46" stroke="#09090e" strokeWidth="2.5" fill="none" />
                <path d="M38,62 Q50,76 62,62 Z" fill="#fff" stroke="#09090e" strokeWidth="2" />
                <line x1="42" y1="67" x2="58" y2="67" stroke="#dc2626" strokeWidth="1" />
              </>
            ) : (
              <>
                <circle cx="40" cy="48" r="5" fill="#ef4444" />
                <circle cx="60" cy="48" r="5" fill="#ef4444" />
                <ellipse cx="50" cy="68" rx="8" ry="10" fill="#09090e" />
              </>
            )}
            <path d="M18,80 L50,84 L82,80 L90,100 L10,100 Z" fill="#854d0e" stroke="#09090e" strokeWidth="2" />
            <polygon points="50,84 46,98 54,98" fill="#eab308" />
          </g>
        );

      default:
        // Stylized cyberpunk suspect
        return (
          <g>
            <path d="M22,46 Q50,16 78,46 Q88,28 50,14 Q12,28 22,46 Z" fill="#581c87" />
            <circle cx="50" cy="52" r="28" fill={skinTone} stroke="#09090e" strokeWidth="2.5" />
            {!isBroken ? (
              <>
                <circle cx="38" cy="50" r="3" fill="#ec4899" />
                <circle cx="62" cy="50" r="3" fill="#ec4899" />
                <path d="M42,67 Q50,71 58,67" stroke="#09090e" strokeWidth="2" fill="none" />
              </>
            ) : (
              <>
                <path d="M34,48 L44,54 M44,48 L34,54" stroke="#ef4444" strokeWidth="2" />
                <path d="M56,48 L66,54 M66,48 L56,54" stroke="#ef4444" strokeWidth="2" />
                <ellipse cx="50" cy="68" rx="6" ry="8" fill="#09090e" />
              </>
            )}
            <path d="M20,80 L50,86 L80,80 L90,100 L10,100 Z" fill="#3b0764" stroke="#09090e" strokeWidth="2" />
          </g>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background shadow & glowing aura */}
      <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-300 ${
        isBroken ? 'bg-red-600/30' : 'bg-pink-500/20'
      }`} />
      
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full drop-shadow-2xl transition-transform duration-300 ${
          isBroken ? 'animate-shake' : ''
        }`}
      >
        {/* Spot/Backdrop disk */}
        <circle cx="50" cy="50" r="48" fill="#11111b" stroke={isBroken ? "#e11d48" : "#ff007f"} strokeWidth="2" />
        
        {/* Crosshair accents */}
        <line x1="50" y1="2" x2="50" y2="10" stroke={isBroken ? "#e11d48" : "#ff007f"} strokeWidth="2" />
        <line x1="50" y1="90" x2="50" y2="98" stroke={isBroken ? "#e11d48" : "#ff007f"} strokeWidth="2" />
        <line x1="2" y1="50" x2="10" y2="50" stroke={isBroken ? "#e11d48" : "#ff007f"} strokeWidth="2" />
        <line x1="90" y1="50" x2="98" y2="50" stroke={isBroken ? "#e11d48" : "#ff007f"} strokeWidth="2" />

        {renderCharacterContent()}

        {/* Sweat drops if broken */}
        {isBroken && (
          <g>
            <path d="M22,34 Q20,28 25,28 Q27,28 26,34 Z" fill="#38bdf8" />
            <path d="M78,36 Q82,30 77,30 Q75,30 76,36 Z" fill="#38bdf8" />
            <path d="M72,25 Q76,19 71,19 Q69,19 70,25 Z" fill="#38bdf8" />
          </g>
        )}
      </svg>
    </div>
  );
};

// Protagonist Pointing Cut-In Vector ("それは違うよ！")
export const ProtagonistCutIn: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Dynamic speedlines */}
      <div className="absolute inset-0 speedlines opacity-40 animate-pulse pointer-events-none" />

      {/* Cyber Grid Angle */}
      <div className="absolute inset-0 dangan-stripes opacity-30 pointer-events-none" />

      {/* Hero Silhouette with Pointing Hand */}
      <svg
        viewBox="0 0 800 500"
        className="w-full max-w-4xl h-auto drop-shadow-[0_0_35px_rgba(255,0,127,0.8)]"
      >
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff007f" />
            <stop offset="40%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#09090e" />
          </linearGradient>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Speed Slits */}
        <polygon points="0,0 200,0 120,500 0,500" fill="#ff007f" opacity="0.3" />
        <polygon points="600,0 800,0 800,500 680,500" fill="#ff007f" opacity="0.3" />

        {/* Protagonist Torso and Head Silhouette */}
        <g fill="url(#heroGrad)" stroke="#ff007f" strokeWidth="3">
          {/* Spiky protagonist anime hair */}
          <path d="M180,180 L220,100 L250,150 L310,70 L320,140 L380,90 L370,170 L420,130 L400,210 L440,190 L390,260 Z" />
          {/* Head profile looking right */}
          <path d="M220,180 Q320,170 340,240 L340,290 L310,310 L280,310 L220,270 Z" />
          {/* Sharp glowing eye */}
          <polygon points="320,230 350,235 330,245" fill="#38bdf8" filter="url(#neonGlow)" />
          {/* Eye flash trail */}
          <line x1="330" y1="237" x2="480" y2="237" stroke="#38bdf8" strokeWidth="4" filter="url(#neonGlow)" />
          {/* Coat / Uniform */}
          <path d="M160,330 L300,310 L380,350 L420,500 L80,500 Z" />
          {/* Pointing Arm thrusting into camera right */}
          <path d="M360,340 L540,290 L680,260 L730,255 L750,260 L720,275 L630,310 L520,380 Z" />
          {/* Pointing Finger */}
          <path d="M680,260 L780,250 L780,265 L690,278 Z" fill="#fde047" stroke="#ff007f" strokeWidth="4" filter="url(#neonGlow)" />
        </g>

        {/* Target Reticle at the fingertip */}
        <circle cx="780" cy="255" r="40" fill="none" stroke="#ff007f" strokeWidth="4" strokeDasharray="10 5" className="animate-spin" />
        <circle cx="780" cy="255" r="16" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <line x1="720" y1="255" x2="840" y2="255" stroke="#ff007f" strokeWidth="3" />
        <line x1="780" y1="195" x2="780" y2="315" stroke="#ff007f" strokeWidth="3" />

        {/* Blood Pink Splatter droplets */}
        <circle cx="710" cy="190" r="14" fill="#ff007f" />
        <circle cx="735" cy="160" r="8" fill="#ff007f" />
        <circle cx="670" cy="360" r="18" fill="#ff007f" />
        <circle cx="640" cy="400" r="10" fill="#ff007f" />
        <circle cx="280" cy="90" r="12" fill="#ff007f" />
      </svg>
    </div>
  );
};

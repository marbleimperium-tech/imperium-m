import React from 'react';
import { StoneItem } from '../types/stone';

interface SlabTextureRendererProps {
  stone: StoneItem;
  className?: string;
  isBookmatched?: boolean;
  isBacklit?: boolean;
  showSlabDimensions?: boolean;
  aspectRatio?: 'slab' | 'square' | 'wide';
  slabIndex?: number;
}

export const SlabTextureRenderer: React.FC<SlabTextureRendererProps> = ({
  stone,
  className = '',
  isBookmatched = false,
  isBacklit = false,
  showSlabDimensions = true,
  aspectRatio = 'slab',
  slabIndex = 12,
}) => {
  const { baseColor, secondaryColor, veinColor, veinColor2 = '#e2d4be', patternType } = stone.texturePattern;
  const isTranslucent = stone.specs.translucency;

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'wide'
      ? 'aspect-video'
      : 'aspect-[1.58/1]';

  const renderSingleSlabFace = (isMirrored: boolean) => {
    const filterId = `mineral-fissures-${stone.id}-${isMirrored ? 'm' : 's'}`;
    const gradId = `stone-body-${stone.id}-${isMirrored ? 'm' : 's'}`;
    const glossId = `studio-gloss-${stone.id}-${isMirrored ? 'm' : 's'}`;

    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none ${
          isMirrored ? 'scale-x-[-1]' : ''
        }`}
        style={{ backgroundColor: baseColor }}
      >
        {/* Backlight Glow Effect for Translucent Quartzites */}
        {isBacklit && isTranslucent && (
          <div
            className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-95 transition-opacity duration-700 animate-pulse"
            style={{
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(255, 235, 175, 0.95) 0%, rgba(245, 190, 80, 0.6) 45%, rgba(180, 110, 20, 0.2) 75%, transparent 100%)',
            }}
          />
        )}

        {/* High-Fidelity SVG Stone Veining & Mineral Formations */}
        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 w-full h-full object-cover select-none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Fine natural rock grain noise */}
            <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
            </filter>

            {/* Depth linear gradients */}
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={baseColor} />
              <stop offset="35%" stopColor={secondaryColor} />
              <stop offset="70%" stopColor={baseColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>

            {/* Studio softbox specular reflection */}
            <linearGradient id={glossId} x1="0%" y1="0%" x2="100%" y2="70%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.22)" />
              <stop offset="30%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.0)" />
              <stop offset="85%" stopColor="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
            </linearGradient>

            <radialGradient id={`quartz-cluster-${stone.id}`} cx="45%" cy="50%" r="45%">
              <stop offset="0%" stopColor={veinColor2} stopOpacity="0.55" />
              <stop offset="50%" stopColor={veinColor} stopOpacity="0.25" />
              <stop offset="100%" stopColor={baseColor} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Base stone matrix */}
          <rect width="800" height="500" fill={`url(#${gradId})`} />

          {/* Specific Geological Vein Formations */}
          {patternType === 'crystalline' && (
            <g filter={`url(#${filterId})`}>
              {/* Massive quartz crystal fractures */}
              <path
                d="M-20,120 Q180,60 360,190 T720,140 Q820,260 840,400"
                stroke={veinColor2}
                strokeWidth="48"
                fill="none"
                opacity="0.65"
                strokeLinecap="round"
              />
              <path
                d="M120,440 Q320,310 480,360 T780,180"
                stroke={veinColor}
                strokeWidth="28"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M-20,280 Q220,200 420,280 T820,220"
                stroke={veinColor}
                strokeWidth="14"
                fill="none"
                opacity="0.8"
              />
              {/* Fine micro-fractures */}
              <path
                d="M40,60 Q180,180 320,120 M260,260 Q440,380 620,320 M520,80 Q660,190 760,380"
                stroke={veinColor}
                strokeWidth="5"
                fill="none"
                opacity="0.75"
              />
              <circle cx="380" cy="240" r="110" fill={`url(#quartz-cluster-${stone.id})`} />
            </g>
          )}

          {patternType === 'linear' && (
            <g filter={`url(#${filterId})`}>
              {/* Parallel flowing strata (Mont Blanc, Taj Mahal, Travertino) */}
              <path d="M-20,70 Q240,110 520,60 T820,90" stroke={veinColor2} strokeWidth="32" fill="none" opacity="0.5" />
              <path d="M-20,140 Q260,190 560,130 T820,170" stroke={veinColor} strokeWidth="18" fill="none" opacity="0.8" />
              <path d="M-20,220 Q220,280 480,210 T820,270" stroke={veinColor2} strokeWidth="24" fill="none" opacity="0.45" />
              <path d="M-20,310 Q280,370 580,290 T820,340" stroke={veinColor} strokeWidth="16" fill="none" opacity="0.8" />
              <path d="M-20,400 Q180,450 460,390 T820,430" stroke={veinColor} strokeWidth="22" fill="none" opacity="0.85" />
              {/* Fine gold/silk threads */}
              <path d="M0,110 Q400,160 800,120 M0,260 Q400,310 800,280 M0,360 Q400,410 800,380" stroke={veinColor} strokeWidth="3.5" fill="none" opacity="0.9" />
            </g>
          )}

          {patternType === 'dramatic' && (
            <g filter={`url(#${filterId})`}>
              {/* Sweeping lightning marble veins (Calacatta, Nero Marquina) */}
              <path
                d="M20,-30 Q220,140 290,240 T580,340 Q700,410 820,530"
                stroke={veinColor}
                strokeWidth="36"
                fill="none"
                opacity="0.92"
                strokeLinecap="round"
              />
              <path
                d="M230,190 Q390,160 550,90 T790,30"
                stroke={veinColor}
                strokeWidth="20"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M40,40 Q230,200 300,290 T600,390"
                stroke={veinColor2}
                strokeWidth="16"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M290,230 Q430,310 510,480 M160,90 Q110,240 70,390 M520,120 Q640,210 700,330"
                stroke={veinColor}
                strokeWidth="6"
                fill="none"
                opacity="0.8"
              />
            </g>
          )}

          {patternType === 'brecciated' && (
            <g filter={`url(#${filterId})`}>
              {/* Gemstone mineral geometry (Emerald Green / Blue Roma) */}
              <polygon points="160,50 350,110 310,250 120,190" fill={secondaryColor} opacity="0.65" stroke={veinColor} strokeWidth="5" />
              <polygon points="370,140 590,90 640,250 430,290" fill={secondaryColor} opacity="0.75" stroke={veinColor2} strokeWidth="8" />
              <polygon points="180,280 360,320 290,470 100,430" fill={secondaryColor} opacity="0.55" stroke={veinColor} strokeWidth="6" />
              <polygon points="480,280 700,310 650,480 440,440" fill={secondaryColor} opacity="0.65" stroke={veinColor} strokeWidth="5" />
              {/* Golden mineral magma river */}
              <path d="M-10,240 Q260,210 420,280 T820,250" stroke={veinColor} strokeWidth="22" fill="none" opacity="0.85" />
              <path d="M330,-10 Q370,240 430,520" stroke={veinColor2} strokeWidth="14" fill="none" opacity="0.75" />
            </g>
          )}

          {patternType === 'nebula' && (
            <g filter={`url(#${filterId})`}>
              {/* Cosmic swirls & golden mica stars (Titanium Gold) */}
              <path
                d="M-30,110 C200,30 330,370 560,240 S830,160 830,400"
                stroke={veinColor}
                strokeWidth="28"
                fill="none"
                opacity="0.85"
              />
              <path
                d="M-30,320 C240,430 410,120 640,210 S830,370 830,480"
                stroke={veinColor2}
                strokeWidth="20"
                fill="none"
                opacity="0.8"
              />
              <circle cx="200" cy="160" r="18" fill={veinColor} opacity="0.8" />
              <circle cx="520" cy="290" r="24" fill={veinColor} opacity="0.85" />
              <circle cx="650" cy="120" r="14" fill={veinColor2} opacity="0.9" />
            </g>
          )}

          {/* Studio lighting gloss sheen across slab surface */}
          <rect width="800" height="500" fill={`url(#${glossId})`} />
        </svg>

        {/* 3D Chamfered Polished Bevel Edge */}
        <div className="absolute inset-0 border-[3px] border-white/20 pointer-events-none rounded-[3px]" />
        <div className="absolute inset-[3px] border border-black/40 pointer-events-none" />

        {/* Industrial Slab Identification Stamp (Guidoni showroom hallmark) */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-0.5 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10 font-mono text-[9px] tracking-wider text-stone-300">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <span>IMPÉRIO MARBLE</span>
            <span className="text-stone-500">·</span>
            <span>CHAPA #{slabIndex.toString().padStart(2, '0')}</span>
          </div>
          <div className="text-stone-400 text-[8px]">
            LOTE EXPORTAÇÃO · GUARAPARI/ES
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-stone-950 shadow-2xl border-2 border-stone-800/90 ${aspectClass} ${className} group/slab`}
    >
      {/* Slab Presentation Surface */}
      {isBookmatched ? (
        <div className="grid grid-cols-2 h-full w-full divide-x-2 divide-stone-950/80">
          {renderSingleSlabFace(false)}
          {renderSingleSlabFace(true)}
        </div>
      ) : (
        renderSingleSlabFace(false)
      )}

      {/* Industrial A-Frame wooden support base representation on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-t border-amber-700/40 opacity-80 pointer-events-none" />

      {/* Bookmatch indicator watermark */}
      {isBookmatched && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/85 backdrop-blur-md rounded-md border border-amber-500/50 text-[10px] uppercase tracking-widest text-amber-300 font-bold shadow-xl">
          Paginação Bookmatch (A + B Casado)
        </div>
      )}

      {/* Backlight active badge */}
      {isBacklit && isTranslucent && (
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-amber-400 text-stone-950 font-bold text-[10px] uppercase tracking-wider rounded shadow-lg">
          Retroiluminação LED Ativa
        </div>
      )}

      {/* Dimension Tag */}
      {showSlabDimensions && !isBookmatched && (
        <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-stone-950/85 backdrop-blur-sm text-stone-300 text-[10px] font-mono tracking-tight rounded border border-stone-800">
          ~ 3.10m × 1.95m | Esp. 2cm/3cm
        </div>
      )}
    </div>
  );
};

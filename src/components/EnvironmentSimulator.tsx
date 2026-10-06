import React, { useState } from 'react';
import { StoneItem } from '../types/stone';
import { STONES_DATABASE } from '../data/stones';
import { useI18n } from '../context/I18nContext';
import { ArrowRight, Eye, Sparkles, Image as ImageIcon, Box } from 'lucide-react';

interface EnvironmentSimulatorProps {
  onSelectStoneForQuote: (stone: StoneItem) => void;
}

type RoomType = 'kitchen' | 'living' | 'bathroom' | 'hall';

export const EnvironmentSimulator: React.FC<EnvironmentSimulatorProps> = ({
  onSelectStoneForQuote,
}) => {
  const { t } = useI18n();
  const [activeRoom, setActiveRoom] = useState<RoomType>('kitchen');
  const [selectedStoneId, setSelectedStoneId] = useState<string>(STONES_DATABASE[0].id);
  const [isBacklitOn, setIsBacklitOn] = useState(true);
  const [viewRenderMode, setViewRenderMode] = useState<'3d-svg' | 'real-installation'>('3d-svg');

  const selectedStone = STONES_DATABASE.find((s) => s.id === selectedStoneId) || STONES_DATABASE[0];
  const { baseColor, secondaryColor, veinColor, veinColor2 = '#fff' } = selectedStone.texturePattern;
  const currentRoom = t.simulator.rooms[activeRoom];

  const roomKeys: RoomType[] = ['kitchen', 'living', 'bathroom', 'hall'];

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-stone-950 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.simulator.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            {t.simulator.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-stone-400 leading-relaxed">
            {t.simulator.subtitle}
          </p>
        </div>

        {/* Room Type Selector Tabs (Scrollable on mobile) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/80 rounded-xl border border-stone-800 overflow-x-auto max-w-full">
            {roomKeys.map((key) => {
              const r = t.simulator.rooms[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveRoom(key)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                    activeRoom === key
                      ? 'bg-amber-500 text-stone-950 font-semibold shadow-md'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                >
                  {r.title}
                </button>
              );
            })}
          </div>

          {/* Toggle 3D Interactive vs Real Photo in High-End Installation */}
          <div className="flex items-center gap-1 p-1 bg-stone-900/80 rounded-xl border border-stone-800 text-xs w-fit">
            <button
              onClick={() => setViewRenderMode('3d-svg')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewRenderMode === '3d-svg'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Simulação 3D</span>
            </button>
            <button
              onClick={() => setViewRenderMode('real-installation')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewRenderMode === 'real-installation'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Foto Real em Projeto</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Architectural Rendering Viewport (8 cols) */}
          <div className="lg:col-span-8 bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-950">
              {viewRenderMode === 'real-installation' ? (
                /* High-Res Real Architectural Installation Photo */
                <div className="relative w-full h-full">
                  <img
                    src={selectedStone.architecturalPhotoUrl}
                    alt={`Aplicação real de ${selectedStone.name}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover animate-in fade-in duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                /* The SVG Architectural Scene */
                <svg
                  viewBox="0 0 960 600"
                  className="w-full h-full object-cover select-none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <linearGradient id="roomStoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={baseColor} />
                      <stop offset="60%" stopColor={secondaryColor} />
                      <stop offset="100%" stopColor={baseColor} />
                    </linearGradient>

                    <filter id="stoneRoughness">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="rough" />
                      <feDisplacementMap in="SourceGraphic" in2="rough" scale="6" />
                    </filter>

                    <radialGradient id="ceilingLight" cx="50%" cy="0%" r="70%">
                      <stop offset="0%" stopColor="rgba(255, 240, 200, 0.45)" />
                      <stop offset="60%" stopColor="rgba(255, 230, 180, 0.1)" />
                      <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                    </radialGradient>

                    <linearGradient id="underCounterGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(245, 175, 55, 0.6)" />
                      <stop offset="100%" stopColor="rgba(245, 175, 55, 0)" />
                    </linearGradient>
                  </defs>

                  {/* ROOM ARCHITECTURAL BACKGROUND */}
                  <rect width="960" height="600" fill="#141312" />

                  {/* Wood slats panels */}
                  <rect x="0" y="0" width="180" height="420" fill="#1f1d1a" />
                  <rect x="780" y="0" width="180" height="420" fill="#1f1d1a" />
                  {[...Array(12)].map((_, i) => (
                    <line key={`slat-l-${i}`} x1={15 * i + 10} y1="0" x2={15 * i + 10} y2="420" stroke="#121110" strokeWidth="3" />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <line key={`slat-r-${i}`} x1={790 + 15 * i} y1="0" x2={790 + 15 * i} y2="420" stroke="#121110" strokeWidth="3" />
                  ))}

                  {/* Center Wall */}
                  <rect x="180" y="0" width="600" height="420" fill="#1a1918" />

                  {/* Flooring with reflection */}
                  <polygon points="0,420 960,420 960,600 0,600" fill="#100e0c" />
                  <polygon points="0,420 960,420 960,600 0,600" fill="url(#underCounterGlow)" opacity="0.3" />

                  <rect x="0" y="0" width="960" height="600" fill="url(#ceilingLight)" />

                  {/* DYNAMIC ROOMS */}
                  {activeRoom === 'kitchen' && (
                    <g>
                      <line x1="380" y1="0" x2="380" y2="180" stroke="#78716c" strokeWidth="1.5" />
                      <line x1="580" y1="0" x2="580" y2="180" stroke="#78716c" strokeWidth="1.5" />
                      <g>
                        <rect x="365" y="180" width="30" height="40" fill="#292524" rx="3" />
                        <rect x="565" y="180" width="30" height="40" fill="#292524" rx="3" />
                      </g>

                      {/* Backsplash */}
                      <rect x="220" y="120" width="520" height="150" fill="url(#roomStoneGrad)" />
                      <path d="M220,180 Q400,150 560,200 T740,160" stroke={veinColor} strokeWidth="10" fill="none" opacity="0.8" filter="url(#stoneRoughness)" />
                      <path d="M260,130 Q460,210 680,140" stroke={veinColor2} strokeWidth="6" fill="none" opacity="0.6" />

                      <rect x="220" y="90" width="520" height="30" fill="#242220" />
                      <line x1="220" y1="120" x2="740" y2="120" stroke="#d4af37" strokeWidth="2" opacity="0.7" />

                      <rect x="200" y="270" width="560" height="70" fill="#1c1a17" />
                      <rect x="200" y="266" width="560" height="6" fill="#0c0a09" />

                      {/* Monumental Kitchen Island */}
                      <polygon points="180,350 780,350 830,410 130,410" fill="url(#roomStoneGrad)" stroke="#333" strokeWidth="1" />
                      <path d="M140,390 Q400,360 800,380" stroke={veinColor} strokeWidth="12" fill="none" opacity="0.85" filter="url(#stoneRoughness)" />
                      <path d="M260,370 Q540,400 760,365" stroke={veinColor2} strokeWidth="7" fill="none" opacity="0.7" />

                      <polygon points="130,410 180,350 180,550 130,570" fill="url(#roomStoneGrad)" filter="brightness(0.85)" />
                      <polygon points="130,410 830,410 830,570 130,570" fill="url(#roomStoneGrad)" />
                      <path d="M130,440 Q400,530 650,460 T830,500" stroke={veinColor} strokeWidth="18" fill="none" opacity="0.9" filter="url(#stoneRoughness)" />
                      <path d="M130,520 Q350,440 600,540 T830,430" stroke={veinColor2} strokeWidth="12" fill="none" opacity="0.75" />

                      <polygon points="780,350 830,410 830,570 860,550" fill="url(#roomStoneGrad)" filter="brightness(0.7)" />
                      <rect x="180" y="565" width="600" height="8" fill="#f5af37" opacity="0.4" filter="blur(4px)" />
                    </g>
                  )}

                  {activeRoom === 'living' && (
                    <g>
                      {/* Bookmatched living wall */}
                      <rect x="230" y="40" width="250" height="420" fill="url(#roomStoneGrad)" />
                      <path d="M230,80 Q350,220 480,260 T480,440" stroke={veinColor} strokeWidth="18" fill="none" opacity="0.9" filter="url(#stoneRoughness)" />
                      <path d="M300,50 Q430,160 480,210" stroke={veinColor2} strokeWidth="10" fill="none" opacity="0.7" />

                      <g transform="translate(730, 0) scale(-1, 1)">
                        <rect x="250" y="40" width="250" height="420" fill="url(#roomStoneGrad)" />
                        <path d="M250,80 Q370,220 500,260 T500,440" stroke={veinColor} strokeWidth="18" fill="none" opacity="0.9" filter="url(#stoneRoughness)" />
                        <path d="M320,50 Q450,160 500,210" stroke={veinColor2} strokeWidth="10" fill="none" opacity="0.7" />
                      </g>

                      <line x1="480" y1="40" x2="480" y2="460" stroke="#000" strokeWidth="1.5" opacity="0.6" />

                      {isBacklitOn && selectedStone.specs.translucency && (
                        <rect x="220" y="30" width="520" height="440" fill="none" stroke="#f5af37" strokeWidth="8" opacity="0.5" filter="blur(8px)" />
                      )}

                      <rect x="300" y="380" width="360" height="50" rx="4" fill="#080706" />
                      <path d="M320,415 Q400,395 480,410 Q560,390 640,415" stroke="#f59e0b" strokeWidth="10" fill="none" opacity="0.9" filter="blur(2px)" />
                      <path d="M340,412 Q420,400 480,408 Q540,398 620,412" stroke="#fef08a" strokeWidth="4" fill="none" opacity="0.95" />

                      <rect x="180" y="460" width="600" height="45" fill="#201e1b" rx="2" />
                      <line x1="180" y1="460" x2="780" y2="460" stroke="#c5a880" strokeWidth="2" />
                    </g>
                  )}

                  {activeRoom === 'bathroom' && (
                    <g>
                      <rect x="160" y="60" width="640" height="340" fill="url(#roomStoneGrad)" />
                      <path d="M160,120 Q480,180 800,90" stroke={veinColor} strokeWidth="16" fill="none" opacity="0.85" filter="url(#stoneRoughness)" />
                      <path d="M220,260 Q520,200 800,320" stroke={veinColor2} strokeWidth="12" fill="none" opacity="0.75" />

                      <rect x="360" y="90" width="240" height="190" rx="12" fill="#18181b" stroke="#f5af37" strokeWidth="3" />
                      <polygon points="200,370 760,370 790,430 170,430" fill="url(#roomStoneGrad)" />
                      <rect x="170" y="430" width="620" height="70" fill="url(#roomStoneGrad)" />
                      <path d="M170,460 Q480,480 790,450" stroke={veinColor} strokeWidth="14" fill="none" opacity="0.85" />

                      <rect x="270" y="390" width="160" height="30" rx="4" fill="#0d0c0b" />
                      <rect x="530" y="390" width="160" height="30" rx="4" fill="#0d0c0b" />

                      <path d="M350,340 V385 H340" stroke="#d4af37" strokeWidth="6" fill="none" strokeLinecap="round" />
                      <path d="M610,340 V385 H600" stroke="#d4af37" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </g>
                  )}

                  {activeRoom === 'hall' && (
                    <g>
                      <rect x="120" y="40" width="720" height="360" fill="#1b1a18" />
                      <rect x="180" y="40" width="140" height="360" fill="url(#roomStoneGrad)" />
                      <rect x="640" y="40" width="140" height="360" fill="url(#roomStoneGrad)" />
                      <path d="M180,80 Q250,220 320,340" stroke={veinColor} strokeWidth="14" fill="none" opacity="0.8" filter="url(#stoneRoughness)" />
                      <path d="M640,80 Q710,220 780,340" stroke={veinColor} strokeWidth="14" fill="none" opacity="0.8" filter="url(#stoneRoughness)" />

                      <polygon points="260,330 700,330 760,400 200,400" fill="url(#roomStoneGrad)" />
                      <polygon points="200,400 760,400 760,540 200,540" fill="url(#roomStoneGrad)" />
                      <path d="M200,450 Q480,510 760,440" stroke={veinColor} strokeWidth="20" fill="none" opacity="0.9" filter="url(#stoneRoughness)" />
                      <path d="M200,510 Q480,430 760,490" stroke={veinColor2} strokeWidth="12" fill="none" opacity="0.75" />

                      <rect x="220" y="535" width="520" height="6" fill="#f5af37" opacity="0.6" filter="blur(3px)" />
                    </g>
                  )}
                </svg>
              )}

              {/* Stone Label overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between p-2.5 sm:p-3.5 bg-stone-950/85 backdrop-blur-md rounded-xl border border-stone-800">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-stone-700 shadow-inner shrink-0"
                    style={{ backgroundColor: baseColor }}
                  />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-amber-400 truncate">
                      {selectedStone.categoryLabel}
                    </div>
                    <div className="text-xs sm:text-sm font-serif font-bold text-stone-100 truncate">
                      {selectedStone.name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {selectedStone.specs.translucency && activeRoom === 'living' && viewRenderMode === '3d-svg' && (
                    <button
                      onClick={() => setIsBacklitOn(!isBacklitOn)}
                      className={`hidden sm:block px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        isBacklitOn
                          ? 'bg-amber-400 text-stone-950 font-bold'
                          : 'bg-stone-800 text-stone-300 hover:text-white'
                      }`}
                    >
                      {isBacklitOn ? t.simulator.turnLedOff : t.simulator.turnLedOn}
                    </button>
                  )}

                  <button
                    onClick={() => onSelectStoneForQuote(selectedStone)}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>{t.simulator.quoteThisStone}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Room Description Footer */}
            <div className="p-4 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-400">
              <div>
                <strong className="text-stone-200">{currentRoom.subtitle}:</strong>{' '}
                {currentRoom.desc}
              </div>
              <div className="text-stone-500 font-mono shrink-0">
                Guarapari/ES Hub
              </div>
            </div>
          </div>

          {/* Stone Selector Carousel / Grid (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-300">
                {t.simulator.selectStone}
              </h3>
              <span className="text-xs text-amber-500 font-mono">
                {STONES_DATABASE.length} {t.simulator.stonesAvailable}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 max-h-[460px] sm:max-h-[580px] overflow-y-auto pr-1">
              {STONES_DATABASE.map((stone) => {
                const isSelected = stone.id === selectedStoneId;
                return (
                  <button
                    key={stone.id}
                    onClick={() => setSelectedStoneId(stone.id)}
                    className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/70 shadow-lg'
                        : 'bg-stone-900/90 border-stone-800 hover:border-stone-700 hover:bg-stone-850'
                    }`}
                  >
                    {/* Miniature thumbnail with real photo */}
                    <div className="w-12 h-12 rounded-lg border border-stone-700 shrink-0 relative overflow-hidden shadow">
                      <img
                        src={stone.realPhotoUrl}
                        alt={stone.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] text-amber-400/90 font-medium">
                        {stone.categoryLabel}
                      </div>
                      <div className="text-xs sm:text-sm font-serif font-semibold text-stone-100 truncate">
                        {stone.name}
                      </div>
                      <div className="text-[11px] text-stone-400 flex items-center gap-2 mt-0.5">
                        <span>{stone.colorLabel}</span>
                        {stone.specs.translucency && (
                          <span className="text-amber-300 font-mono text-[10px]">· LED</span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                      ) : (
                        <Eye className="w-4 h-4 text-stone-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

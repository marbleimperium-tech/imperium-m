import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface HeroProps {
  onOpenCatalog: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCatalog, onOpenQuote }) => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950 text-stone-100 py-16 sm:py-24 lg:py-28">
      {/* Architectural Background: Monolithic Stone Slabs & Ambient Warm Light */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full object-cover select-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="heroStoneBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c1917" />
              <stop offset="50%" stopColor="#141210" />
              <stop offset="100%" stopColor="#0c0a09" />
            </linearGradient>

            <linearGradient id="goldVeinHero" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.4" />
            </linearGradient>

            <radialGradient id="heroCenterSpot" cx="50%" cy="30%" r="65%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.22)" />
              <stop offset="50%" stopColor="rgba(212, 175, 55, 0.05)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>
          </defs>

          {/* Deep slate base */}
          <rect width="1440" height="900" fill="url(#heroStoneBase)" />

          {/* Bookmatched Monumental Veins traversing background */}
          <g opacity="0.6">
            <path
              d="M-100,200 Q400,350 720,150 T1540,300"
              stroke="url(#goldVeinHero)"
              strokeWidth="24"
              fill="none"
              filter="blur(3px)"
            />
            <path
              d="M-100,500 Q450,420 720,680 T1540,480"
              stroke="url(#goldVeinHero)"
              strokeWidth="18"
              fill="none"
              filter="blur(2px)"
            />
            <path
              d="M-50,750 Q600,600 1500,800"
              stroke="#57534e"
              strokeWidth="8"
              fill="none"
              opacity="0.5"
            />
          </g>

          {/* Center lighting spotlight */}
          <rect width="1440" height="900" fill="url(#heroCenterSpot)" />
        </svg>

        {/* Bottom fade out scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Regional & Industry Kicker */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-[11px] sm:text-xs text-stone-300 mb-6 sm:mb-8 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="font-semibold text-stone-200">{t.hero.kicker}</span>
          <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
          <span className="text-stone-400">{t.hero.kickerSub}</span>
        </div>

        {/* Display Headline */}
        <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-100 tracking-tight leading-[1.15] text-balance">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed text-balance">
          {t.hero.subtitle}
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 sm:px-8 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all shadow-xl shadow-amber-500/15 text-xs sm:text-sm cursor-pointer whitespace-nowrap"
          >
            <span>{t.hero.exploreCatalog}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 sm:px-8 bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 rounded-xl transition-colors text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.hero.requestQuote}</span>
          </button>
        </div>

        {/* Trust Indicators (Claim-to-Proof Adjacency) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-stone-800/80 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-2 sm:p-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-400 tabular-nums">
              40+
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-1">
              {t.hero.stat1Label}
            </div>
          </div>

          <div className="p-2 sm:p-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 tabular-nums">
              {t.hero.stat2Title}
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-1">
              {t.hero.stat2Label}
            </div>
          </div>

          <div className="p-2 sm:p-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 tabular-nums">
              {t.hero.stat3Title}
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-1">
              {t.hero.stat3Label}
            </div>
          </div>

          <div className="p-2 sm:p-0">
            <div className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-amber-400 tabular-nums">
              {t.hero.stat4Title}
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-1">
              {t.hero.stat4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

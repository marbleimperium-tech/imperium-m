import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface HeroSliderProps {
  onOpenCatalog: () => void;
  onOpenQuote: () => void;
}

interface SlideItem {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  subtitle: string;
  imageUrl: string;
  badgeText: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    tag: 'JAZIDAS & COLEÇÕES EXCLUSIVAS',
    title: 'A beleza eterna esculpida pela natureza,',
    highlight: 'perfeita para o mundo.',
    subtitle: 'Comércio atacadista e exportação de mármores nobres, quartzitos exóticos e granitos em chapas de grandes formatos para projetos de alto luxo.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    badgeText: 'Padrão Exportação Classe A',
  },
  {
    id: 'slide-2',
    tag: 'HUB GUARAPARI / ESPÍRITO SANTO',
    title: 'Do maior polo minerador da América Latina',
    highlight: 'direto para portos globais.',
    subtitle: 'Tecnologia de corte em fio diamantado, calibragem milimétrica de espessura e logística ágil integrada aos portos de Vitória e Tubarão.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=85',
    badgeText: 'Operação Portuária Integrada',
  },
  {
    id: 'slide-3',
    tag: 'SUPERFÍCIES NATURAIS DE ALTA PERFORMANCE',
    title: 'Quartzitos translúcidos e mármores imperiais',
    highlight: 'para arquitetura contemporânea.',
    subtitle: 'Lotes selecionados bloco a bloco, com resinagem a vácuo, malha de fibra estrutural e bookmatched espelhado sob medida.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    badgeText: 'Bookmatch & Retroiluminação',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenCatalog, onOpenQuote }) => {
  const { t } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center overflow-hidden bg-stone-950 text-stone-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with smooth fade */}
      {SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={s.imageUrl}
            alt={s.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Measured Guidance Contrast Scrim (Guidoni cinematic dark grading) */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
        </div>
      ))}

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-3xl">
          {/* Kicker tag with Guidoni-style spacing */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-[11px] uppercase tracking-widest text-amber-400 font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{slide.tag}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-300 font-normal">Guarapari, ES</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-100 leading-[1.1] text-balance">
            {slide.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
              {slide.highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl text-balance">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onOpenCatalog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-8 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all shadow-xl shadow-amber-500/15 text-xs sm:text-sm cursor-pointer whitespace-nowrap"
            >
              <span>Explorar Catálogo de Chapas</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-8 bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 rounded-xl transition-colors text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Solicitar Cotação de Lote</span>
            </button>
          </div>

          {/* Adjacency Stats Bar */}
          <div className="mt-12 sm:mt-14 pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-amber-400 tabular-nums">
                40+
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                Rochas nobres em estoque
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-stone-100 tabular-nums">
                Classe A
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                Corte multifio diamantado
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-stone-100 tabular-nums">
                Guarapari
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                Polo extrativo mundial
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-amber-400 tabular-nums">
                25+ Países
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                Exportação consolidada
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls & Progress (Guidoni Style) */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 flex items-center gap-3">
        {/* Slide Counter */}
        <div className="px-3 py-1.5 bg-stone-950/80 backdrop-blur-md rounded-lg border border-stone-800 text-xs font-mono text-stone-300">
          <span className="text-amber-400 font-bold">0{currentSlide + 1}</span>
          <span className="text-stone-600 mx-1">/</span>
          <span>0{SLIDES.length}</span>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={prevSlide}
          className="p-2 sm:p-2.5 rounded-lg bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="p-2 sm:p-2.5 rounded-lg bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Slide Indicators on Bottom Left */}
      <div className="absolute bottom-6 left-4 sm:left-8 z-20 hidden md:flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 rounded-full transition-all cursor-pointer ${
              idx === currentSlide ? 'w-10 bg-amber-400' : 'w-4 bg-stone-700 hover:bg-stone-500'
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

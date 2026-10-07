import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { useI18n, LocalizedText } from '../context/I18nContext';

interface HeroSliderProps {
  onOpenCatalog: () => void;
  onOpenQuote: () => void;
}

interface SlideItem {
  id: string;
  tag: LocalizedText;
  title: LocalizedText;
  highlight: LocalizedText;
  subtitle: LocalizedText;
  imageUrl: string;
  badgeText: LocalizedText;
}

const SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    tag: { pt: 'PISCINAS & SPAS MONUMENTAIS EM MÁRMORE', en: 'MONUMENTAL MARBLE POOLS & SPAS', es: 'PISCINAS Y SPAS MONUMENTALES EN MÁRMOL', it: 'PISCINE & SPA MONUMENTALI IN MARMO' },
    title: { pt: 'A beleza eterna esculpida pela natureza,', en: 'Eternal beauty sculpted by nature,', es: 'La belleza eterna esculpida por la naturaleza,', it: 'La bellezza eterna scolpita dalla natura,' },
    highlight: { pt: 'perfeita para o mundo.', en: 'perfect for the world.', es: 'perfecta para el mundo.', it: 'perfetta per il mondo.' },
    subtitle: {
      pt: 'Mármores nobres com paginação bookmatched contínua e quartzitos exóticos em grandes formatos para projetos de alto luxo e bem-estar.',
      en: 'Noble marbles with continuous bookmatched layouts and exotic large-format quartzites for high-luxury and wellness projects.',
      es: 'Mármoles nobles con paginación bookmatched continua y cuarcitas exóticas en grandes formatos para proyectos de alto lujo y bienestar.',
      it: 'Marmi pregiati con impaginazione bookmatch continua e quarziti esotiche in grandi formati per progetti di alto lusso e benessere.',
    },
    imageUrl: '/images/hero-1.jpg',
    badgeText: { pt: 'Padrão Exportação Classe A', en: 'Class A Export Standard', es: 'Estándar de Exportación Clase A', it: 'Standard Export Classe A' },
  },
  {
    id: 'slide-2',
    tag: { pt: 'ARQUITETURA MONOLÍTICA & HUB GUARAPARI', en: 'MONOLITHIC ARCHITECTURE & GUARAPARI HUB', es: 'ARQUITECTURA MONOLÍTICA Y HUB GUARAPARI', it: 'ARCHITETTURA MONOLITICA & HUB GUARAPARI' },
    title: { pt: 'Do maior polo minerador da América Latina', en: "From Latin America's largest mining hub", es: 'Desde el mayor polo minero de América Latina', it: "Dal più grande polo estrattivo dell'America Latina" },
    highlight: { pt: 'direto para obras pelo mundo.', en: 'straight to projects worldwide.', es: 'directo a obras en todo el mundo.', it: 'direttamente ai cantieri di tutto il mondo.' },
    subtitle: {
      pt: 'Tecnologia de corte em fio diamantado, calibragem milimétrica de espessura e logística ágil integrada aos portos de Vitória e Tubarão.',
      en: 'Diamond wire cutting technology, millimetric thickness calibration and agile logistics integrated with the ports of Vitória and Tubarão.',
      es: 'Tecnología de corte con hilo diamantado, calibrado milimétrico de espesor y logística ágil integrada a los puertos de Vitória y Tubarão.',
      it: 'Tecnologia di taglio a filo diamantato, calibratura millimetrica dello spessore e logistica agile integrata ai porti di Vitória e Tubarão.',
    },
    imageUrl: '/images/hero-2.jpg',
    badgeText: { pt: 'Engenharia & Volumetria', en: 'Engineering & Volume', es: 'Ingeniería y Volumetría', it: 'Ingegneria & Volumetria' },
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenCatalog, onOpenQuote }) => {
  const { t, tr } = useI18n();
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
            alt={tr(s.title)}
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
            <span>{tr(slide.tag)}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-300 font-normal">Guarapari, ES</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-stone-100 leading-[1.1] text-balance">
            {tr(slide.title)}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
              {tr(slide.highlight)}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-2xl text-balance">
            {tr(slide.subtitle)}
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onOpenCatalog}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-8 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all shadow-xl shadow-amber-500/15 text-xs sm:text-sm cursor-pointer whitespace-nowrap"
            >
              <span>{t.hero.exploreCatalog}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-8 bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 rounded-xl transition-colors text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.hero.requestQuote}</span>
            </button>
          </div>

          {/* Adjacency Stats Bar */}
          <div className="mt-12 sm:mt-14 pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-amber-400 tabular-nums">
                40+
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                {tr({ pt: 'Rochas nobres em estoque', en: 'Premium stones in stock', es: 'Rocas nobles en stock', it: 'Pietre pregiate in magazzino' })}
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-stone-100 tabular-nums">
                {tr({ pt: 'Classe A', en: 'Class A', es: 'Clase A', it: 'Classe A' })}
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                {tr({ pt: 'Corte multifio diamantado', en: 'Diamond multi-wire cutting', es: 'Corte multihilo diamantado', it: 'Taglio multifilo diamantato' })}
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-stone-100 tabular-nums">
                Guarapari
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                {tr({ pt: 'Polo extrativo mundial', en: 'Global extraction hub', es: 'Polo extractivo mundial', it: 'Polo estrattivo mondiale' })}
              </div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-serif font-bold text-amber-400 tabular-nums">
                25+ {tr({ pt: 'Países', en: 'Countries', es: 'Países', it: 'Paesi' })}
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                {tr({ pt: 'Exportação consolidada', en: 'Established exports', es: 'Exportación consolidada', it: 'Export consolidato' })}
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
          aria-label={tr({ pt: 'Slide anterior', en: 'Previous slide', es: 'Diapositiva anterior', it: 'Slide precedente' })}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="p-2 sm:p-2.5 rounded-lg bg-stone-950/80 hover:bg-stone-900 border border-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
          aria-label={tr({ pt: 'Próximo slide', en: 'Next slide', es: 'Siguiente diapositiva', it: 'Slide successiva' })}
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

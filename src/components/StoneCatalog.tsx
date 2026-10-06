import React, { useState, useMemo } from 'react';
import { StoneItem, StoneCategory } from '../types/stone';
import { STONES_DATABASE } from '../data/stones';
import { SmartStoneImage } from './SmartStoneImage';
import { useI18n } from '../context/I18nContext';
import { Search, SlidersHorizontal, ArrowUpRight, Sparkles, Layers, ShieldCheck, Home, Check } from 'lucide-react';

interface StoneCatalogProps {
  onOpenSlabDetail: (stone: StoneItem) => void;
  onRequestQuote: (stone: StoneItem) => void;
  onSimulateInEnvironment: (stone: StoneItem) => void;
}

export const StoneCatalog: React.FC<StoneCatalogProps> = ({
  onOpenSlabDetail,
  onRequestQuote,
  onSimulateInEnvironment,
}) => {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<StoneCategory | 'all'>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalDisplayMode, setGlobalDisplayMode] = useState<'slab' | 'project' | 'bookmatch'>('slab');

  const filteredStones = useMemo(() => {
    return STONES_DATABASE.filter((stone) => {
      // Category filter
      if (selectedCategory !== 'all' && stone.category !== selectedCategory) {
        return false;
      }
      // Color family filter
      if (selectedColor !== 'all') {
        if (selectedColor === 'light' && !['white', 'grey'].includes(stone.colorFamily)) return false;
        if (selectedColor === 'gold' && stone.colorFamily !== 'gold') return false;
        if (selectedColor === 'dark' && stone.colorFamily !== 'black') return false;
        if (selectedColor === 'exotic' && !['green', 'blue'].includes(stone.colorFamily)) return false;
      }
      // Finish filter
      if (selectedFinish !== 'all' && !stone.finishes.includes(selectedFinish as any)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = stone.name.toLowerCase().includes(query);
        const matchesOrigin = stone.origin.toLowerCase().includes(query);
        const matchesDesc = stone.description.toLowerCase().includes(query);
        const matchesCat = stone.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesOrigin && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedColor, selectedFinish, searchQuery]);

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-stone-950 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
              {t.catalog.kicker}
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
              {t.catalog.title}
            </h2>
            <p className="mt-3 text-stone-400 text-xs sm:text-base leading-relaxed">
              {t.catalog.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Display Mode Switcher (Slabs vs Real Projects vs Bookmatch) */}
            <div className="flex items-center gap-1 p-1 bg-stone-900 border border-stone-800 rounded-xl text-xs">
              <button
                type="button"
                onClick={() => setGlobalDisplayMode('slab')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-medium ${
                  globalDisplayMode === 'slab'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Chapas dos Lotes
              </button>

              <button
                type="button"
                onClick={() => setGlobalDisplayMode('project')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-medium ${
                  globalDisplayMode === 'project'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Em Obras Reais</span>
              </button>

              <button
                type="button"
                onClick={() => setGlobalDisplayMode('bookmatch')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-medium ${
                  globalDisplayMode === 'bookmatch'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Bookmatch</span>
              </button>
            </div>

            <span className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.catalog.qualityBadge}</span>
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-6 bg-stone-900/80 border border-stone-800 rounded-2xl mb-10 space-y-4">
          {/* Top row: Category tabs & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-950/80 rounded-xl border border-stone-800 overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-300 hover:text-white hover:bg-stone-850'
                }`}
              >
                {t.catalog.allStones} ({STONES_DATABASE.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('quartzite')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedCategory === 'quartzite'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-300 hover:text-white hover:bg-stone-850'
                }`}
              >
                {t.catalog.quartzites}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('marble')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedCategory === 'marble'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-300 hover:text-white hover:bg-stone-850'
                }`}
              >
                {t.catalog.marbles}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('granite')}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedCategory === 'granite'
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow'
                    : 'text-stone-300 hover:text-white hover:bg-stone-850'
                }`}
              >
                {t.catalog.granites}
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                placeholder={t.catalog.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-stone-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Secondary row: Color filter tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-800/80 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-stone-400 font-medium flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.catalog.colorPalette}</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: t.catalog.allColors },
                  { id: 'light', label: t.catalog.lightColors },
                  { id: 'gold', label: t.catalog.goldColors },
                  { id: 'dark', label: t.catalog.darkColors },
                  { id: 'exotic', label: t.catalog.exoticColors },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedColor(item.id)}
                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                      selectedColor === item.id
                        ? 'bg-stone-700 text-amber-300 font-medium'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-stone-400 font-mono text-xs">
              {t.catalog.showing} <span className="text-amber-400 font-bold">{filteredStones.length}</span> {t.catalog.stones}
            </div>
          </div>
        </div>

        {/* Stone Grid */}
        {filteredStones.length === 0 ? (
          <div className="py-20 text-center bg-stone-900/30 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-sm">
              {t.catalog.noStones}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedColor('all');
                setSelectedFinish('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-stone-950 font-bold text-xs rounded-lg"
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStones.map((stone, idx) => (
              <div
                key={stone.id}
                className="group flex flex-col bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70"
              >
                {/* Slab Preview Screen with interactive micro-switches */}
                <div
                  className="relative cursor-pointer overflow-hidden bg-stone-950"
                  onClick={() => onOpenSlabDetail(stone)}
                >
                  <SmartStoneImage
                    stone={stone}
                    mode={globalDisplayMode}
                    aspectRatio="slab"
                    showControls={true}
                    className="w-full h-full"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-stone-950/85 backdrop-blur-md rounded border border-stone-800 text-[10px] sm:text-[11px] font-semibold text-amber-400 z-10">
                    {stone.categoryLabel}
                  </div>

                  {stone.specs.translucency && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 bg-amber-500/90 text-stone-950 font-bold text-[9px] rounded shadow-sm z-10">
                      <Sparkles className="w-3 h-3" />
                      <span>{t.catalog.translucent}</span>
                    </div>
                  )}

                  {/* Hover Inspect CTA Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 pointer-events-none">
                    <span className="flex items-center gap-1.5 px-4 py-2 bg-stone-900/95 text-amber-300 text-xs font-semibold rounded-lg border border-amber-500/40 shadow-xl backdrop-blur-sm">
                      <span>Inspecionar Lote & Ficha Técnica</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-1.5">
                      <span>{stone.origin}</span>
                      <span aria-hidden="true">·</span>
                      <span>Dureza Mohs {stone.specs.mohsHardness}</span>
                    </div>

                    <h3
                      onClick={() => onOpenSlabDetail(stone)}
                      className="text-lg sm:text-xl font-serif font-bold text-stone-100 group-hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {stone.name}
                    </h3>

                    <p className="mt-2 text-xs text-stone-300 line-clamp-2 leading-relaxed">
                      {stone.description}
                    </p>
                  </div>

                  {/* Finishes and Specs bar */}
                  <div className="pt-3 border-t border-stone-800/80 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-stone-400">
                      <span>{t.catalog.finishes}:</span>
                      <span className="text-stone-200">{stone.finishes.join(', ')}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => onSimulateInEnvironment(stone)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl transition-colors text-xs font-medium cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5 text-amber-400" />
                        <span>Simular Projeto</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onRequestQuote(stone)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-colors text-xs cursor-pointer shadow-md"
                      >
                        <span>Cotar Lote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

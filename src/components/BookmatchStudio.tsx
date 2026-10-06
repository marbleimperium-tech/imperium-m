import React, { useState } from 'react';
import { StoneItem } from '../types/stone';
import { STONES_DATABASE } from '../data/stones';
import { SlabTextureRenderer } from './SlabTextureRenderer';
import { Layers, Sparkles, Sun, ArrowRight, Check, Eye } from 'lucide-react';

interface BookmatchStudioProps {
  onRequestQuote: (stone: StoneItem) => void;
}

type MatchType = 'butterfly' | 'diamond' | 'continuous';

export const BookmatchStudio: React.FC<BookmatchStudioProps> = ({ onRequestQuote }) => {
  const [selectedStoneId, setSelectedStoneId] = useState<string>(STONES_DATABASE[0].id);
  const [matchType, setMatchType] = useState<MatchType>('butterfly');
  const [isBacklit, setIsBacklit] = useState(false);

  const selectedStone = STONES_DATABASE.find((s) => s.id === selectedStoneId) || STONES_DATABASE[0];

  return (
    <section id="bookmatch-studio" className="py-20 sm:py-28 bg-stone-950 text-stone-100 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Studio Digital de Paginação & Bookmatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            Composições Espelhadas Bookmatched
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Na tradição dos maiores produtores de rochas ornamentais do mundo, como a Guidoni, fornecemos chapas sequenciais de corte com veios contínuos para paginações de impacto visual incomparável.
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-stone-900/90 border border-stone-800 rounded-2xl mb-8">
          {/* Stone Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-400 font-medium">Rocha Selecionada:</span>
            <select
              value={selectedStoneId}
              onChange={(e) => setSelectedStoneId(e.target.value)}
              className="py-2 px-3 bg-stone-950 border border-stone-800 rounded-xl text-xs sm:text-sm text-stone-200 font-serif focus:outline-none focus:border-amber-500"
            >
              {STONES_DATABASE.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.categoryLabel})
                </option>
              ))}
            </select>
          </div>

          {/* Match Type Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-stone-950 rounded-xl border border-stone-800 text-xs">
              <button
                type="button"
                onClick={() => setMatchType('butterfly')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  matchType === 'butterfly'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Bookmatch 2 Chapas (A + B)
              </button>

              <button
                type="button"
                onClick={() => setMatchType('diamond')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  matchType === 'diamond'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Diamante 4 Chapas (A+B+C+D)
              </button>
            </div>

            {selectedStone.specs.translucency && (
              <button
                type="button"
                onClick={() => setIsBacklit(!isBacklit)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  isBacklit
                    ? 'bg-amber-400 text-stone-950 shadow-lg'
                    : 'bg-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{isBacklit ? 'Retroiluminação ON' : 'Testar LED'}</span>
              </button>
            )}
          </div>
        </div>

        {/* The Big Stage Canvas */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
          {matchType === 'butterfly' && (
            <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-stone-800 aspect-[16/9] w-full max-w-5xl mx-auto shadow-2xl">
              <SlabTextureRenderer
                stone={selectedStone}
                isBacklit={isBacklit}
                aspectRatio="slab"
                className="w-full h-full"
              />
              <div className="scale-x-[-1] w-full h-full">
                <SlabTextureRenderer
                  stone={selectedStone}
                  isBacklit={isBacklit}
                  aspectRatio="slab"
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          {matchType === 'diamond' && (
            <div className="grid grid-cols-2 grid-rows-2 gap-1 rounded-2xl overflow-hidden border border-stone-800 aspect-[16/10] w-full max-w-4xl mx-auto shadow-2xl">
              {/* Top Left */}
              <div className="scale-x-[-1] scale-y-[-1] w-full h-full">
                <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
              </div>
              {/* Top Right */}
              <div className="scale-y-[-1] w-full h-full">
                <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
              </div>
              {/* Bottom Left */}
              <div className="scale-x-[-1] w-full h-full">
                <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
              </div>
              {/* Bottom Right */}
              <div className="w-full h-full">
                <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
              </div>
            </div>
          )}

          {/* Overlay Spec Bar */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-800 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold">{selectedStone.name}</span>
              <span className="text-stone-500 mx-2">·</span>
              <span>Lote sequencial numerado de corte multifio</span>
              <span className="text-stone-500 mx-2">·</span>
              <span>Espessuras 2cm e 3cm com telamento epóxi de reforço</span>
            </div>

            <button
              onClick={() => onRequestQuote(selectedStone)}
              className="flex items-center justify-center gap-2 py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-colors cursor-pointer whitespace-nowrap shadow-md"
            >
              <span>Solicitar Lote Bookmatched Casado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

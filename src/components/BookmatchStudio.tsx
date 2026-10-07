import React, { useState } from 'react';
import { StoneItem } from '../types/stone';
import { STONES_DATABASE } from '../data/stones';
import { SlabTextureRenderer } from './SlabTextureRenderer';
import { useI18n } from '../context/I18nContext';
import { Layers, Sparkles, Sun, ArrowRight, Check, Eye } from 'lucide-react';

interface BookmatchStudioProps {
  onRequestQuote: (stone: StoneItem) => void;
}

type MatchType = 'butterfly' | 'diamond' | 'continuous';

export const BookmatchStudio: React.FC<BookmatchStudioProps> = ({ onRequestQuote }) => {
  const { tr, ls } = useI18n();
  const [selectedStoneId, setSelectedStoneId] = useState<string>(STONES_DATABASE[0].id);
  const [matchType, setMatchType] = useState<MatchType>('butterfly');
  const [isBacklit, setIsBacklit] = useState(false);

  const selectedStone = STONES_DATABASE.find((s) => s.id === selectedStoneId) || STONES_DATABASE[0];
  const slabLabel = tr({ pt: 'Chapa', en: 'Slab', es: 'Placa', it: 'Lastra' });

  return (
    <section id="bookmatch-studio" className="py-20 sm:py-28 bg-stone-950 text-stone-100 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{tr({ pt: 'Studio Digital de Paginação & Bookmatch', en: 'Digital Layout & Bookmatch Studio', es: 'Estudio Digital de Paginación y Bookmatch', it: 'Studio Digitale di Impaginazione & Bookmatch' })}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            {tr({ pt: 'Composições Espelhadas Bookmatched', en: 'Mirrored Bookmatched Compositions', es: 'Composiciones Espejadas Bookmatched', it: 'Composizioni Bookmatch a Specchio' })}
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            {tr({
              pt: 'Na tradição dos maiores produtores de rochas ornamentais do mundo, fornecemos chapas sequenciais de corte com veios contínuos para paginações de impacto visual incomparável.',
              en: "In the tradition of the world's leading ornamental stone producers, we supply sequentially cut slabs with continuous veining for layouts of unmatched visual impact.",
              es: 'Siguiendo la tradición de los mayores productores de rocas ornamentales del mundo, suministramos placas de corte secuencial con vetas continuas para paginaciones de impacto visual incomparable.',
              it: 'Nella tradizione dei maggiori produttori di pietre ornamentali al mondo, forniamo lastre a taglio sequenziale con venature continue per impaginazioni di impatto visivo impareggiabile.',
            })}
          </p>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-stone-900/90 border border-stone-800 rounded-2xl mb-8">
          {/* Stone Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-400 font-medium whitespace-nowrap">{tr({ pt: 'Rocha Selecionada:', en: 'Selected Stone:', es: 'Roca Seleccionada:', it: 'Pietra Selezionata:' })}</span>
            <select
              value={selectedStoneId}
              onChange={(e) => setSelectedStoneId(e.target.value)}
              className="flex-1 min-w-0 py-2 px-3 bg-stone-950 border border-stone-800 rounded-xl text-xs sm:text-sm text-stone-200 font-serif focus:outline-none focus:border-amber-500"
            >
              {STONES_DATABASE.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({ls(s).categoryLabel})
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
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  matchType === 'butterfly'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <span className="hidden sm:inline">{tr({ pt: 'Bookmatch 2 Chapas (A + B)', en: 'Bookmatch 2 Slabs (A + B)', es: 'Bookmatch 2 Placas (A + B)', it: 'Bookmatch 2 Lastre (A + B)' })}</span>
                <span className="sm:hidden">{tr({ pt: '2 Chapas (A+B)', en: '2 Slabs (A+B)', es: '2 Placas (A+B)', it: '2 Lastre (A+B)' })}</span>
              </button>

              <button
                type="button"
                onClick={() => setMatchType('diamond')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  matchType === 'diamond'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <span className="hidden sm:inline">{tr({ pt: 'Diamante 4 Chapas (A+B+C+D)', en: 'Diamond 4 Slabs (A+B+C+D)', es: 'Diamante 4 Placas (A+B+C+D)', it: 'Diamante 4 Lastre (A+B+C+D)' })}</span>
                <span className="sm:hidden">{tr({ pt: '4 Chapas (Diamante)', en: '4 Slabs (Diamond)', es: '4 Placas (Diamante)', it: '4 Lastre (Diamante)' })}</span>
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
                <span>{isBacklit ? tr({ pt: 'Retroiluminação ON', en: 'Backlight ON', es: 'Retroiluminación ON', it: 'Retroilluminazione ON' }) : tr({ pt: 'Testar LED', en: 'Test LED', es: 'Probar LED', it: 'Prova LED' })}</span>
              </button>
            )}
          </div>
        </div>

        {/* The Big Stage Canvas */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
          {matchType === 'butterfly' && (
            <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-stone-800 aspect-[16/9] w-full max-w-5xl mx-auto shadow-2xl">
              {/* Face A */}
              {selectedStone.realPhotoUrl ? (
                <div className="relative w-full h-full overflow-hidden bg-stone-950">
                  <img
                    src={selectedStone.realPhotoUrl}
                    alt={`${selectedStone.name} - Face A`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                  {isBacklit && selectedStone.specs.translucency && (
                    <div
                      className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-75 animate-pulse"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 50%, rgba(255, 235, 175, 0.95) 0%, rgba(245, 190, 80, 0.5) 50%, transparent 100%)',
                      }}
                    />
                  )}
                  <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300">
                    Face A ({slabLabel} #11)
                  </div>
                </div>
              ) : (
                <SlabTextureRenderer
                  stone={selectedStone}
                  isBacklit={isBacklit}
                  aspectRatio="slab"
                  className="w-full h-full"
                />
              )}

              {/* Face B (Mirrored) */}
              {selectedStone.realPhotoUrl ? (
                <div className="relative w-full h-full overflow-hidden bg-stone-950">
                  <img
                    src={selectedStone.realPhotoUrl}
                    alt={`${selectedStone.name} - Face B espelhada`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none scale-x-[-1]"
                  />
                  {isBacklit && selectedStone.specs.translucency && (
                    <div
                      className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-75 animate-pulse"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 50%, rgba(255, 235, 175, 0.95) 0%, rgba(245, 190, 80, 0.5) 50%, transparent 100%)',
                      }}
                    />
                  )}
                  <div className="absolute top-2 right-2 z-20 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300">
                    Face B ({slabLabel} #12 - {tr({ pt: 'Espelho', en: 'Mirror', es: 'Espejo', it: 'Specchio' })})
                  </div>
                </div>
              ) : (
                <div className="scale-x-[-1] w-full h-full">
                  <SlabTextureRenderer
                    stone={selectedStone}
                    isBacklit={isBacklit}
                    aspectRatio="slab"
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          )}

          {matchType === 'diamond' && (
            <div className="grid grid-cols-2 grid-rows-2 gap-1 rounded-2xl overflow-hidden border border-stone-800 aspect-[16/10] w-full max-w-4xl mx-auto shadow-2xl">
              {/* Top Left */}
              <div className="relative w-full h-full overflow-hidden bg-stone-950">
                {selectedStone.realPhotoUrl ? (
                  <img
                    src={selectedStone.realPhotoUrl}
                    alt={`${selectedStone.name} - Diamante 1`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none scale-x-[-1] scale-y-[-1]"
                  />
                ) : (
                  <div className="scale-x-[-1] scale-y-[-1] w-full h-full">
                    <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
                  </div>
                )}
                {isBacklit && selectedStone.specs.translucency && (
                  <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70 animate-pulse bg-gradient-to-br from-amber-400/40 to-transparent" />
                )}
                <div className="absolute top-2 left-2 z-20 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-mono text-amber-300">{slabLabel} A</div>
              </div>

              {/* Top Right */}
              <div className="relative w-full h-full overflow-hidden bg-stone-950">
                {selectedStone.realPhotoUrl ? (
                  <img
                    src={selectedStone.realPhotoUrl}
                    alt={`${selectedStone.name} - Diamante 2`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none scale-y-[-1]"
                  />
                ) : (
                  <div className="scale-y-[-1] w-full h-full">
                    <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
                  </div>
                )}
                {isBacklit && selectedStone.specs.translucency && (
                  <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70 animate-pulse bg-gradient-to-bl from-amber-400/40 to-transparent" />
                )}
                <div className="absolute top-2 right-2 z-20 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-mono text-amber-300">{slabLabel} B</div>
              </div>

              {/* Bottom Left */}
              <div className="relative w-full h-full overflow-hidden bg-stone-950">
                {selectedStone.realPhotoUrl ? (
                  <img
                    src={selectedStone.realPhotoUrl}
                    alt={`${selectedStone.name} - Diamante 3`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none scale-x-[-1]"
                  />
                ) : (
                  <div className="scale-x-[-1] w-full h-full">
                    <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
                  </div>
                )}
                {isBacklit && selectedStone.specs.translucency && (
                  <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70 animate-pulse bg-gradient-to-tr from-amber-400/40 to-transparent" />
                )}
                <div className="absolute bottom-2 left-2 z-20 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-mono text-amber-300">{slabLabel} C</div>
              </div>

              {/* Bottom Right */}
              <div className="relative w-full h-full overflow-hidden bg-stone-950">
                {selectedStone.realPhotoUrl ? (
                  <img
                    src={selectedStone.realPhotoUrl}
                    alt={`${selectedStone.name} - Diamante 4`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                ) : (
                  <div className="w-full h-full">
                    <SlabTextureRenderer stone={selectedStone} isBacklit={isBacklit} aspectRatio="slab" className="w-full h-full" />
                  </div>
                )}
                {isBacklit && selectedStone.specs.translucency && (
                  <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-70 animate-pulse bg-gradient-to-tl from-amber-400/40 to-transparent" />
                )}
                <div className="absolute bottom-2 right-2 z-20 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-mono text-amber-300">{slabLabel} D</div>
              </div>
            </div>
          )}

          {/* Overlay Spec Bar */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-800 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold">{selectedStone.name}</span>
              <span className="text-stone-500 mx-2">·</span>
              <span>{tr({ pt: 'Lote sequencial numerado de corte multifio', en: 'Numbered sequential multi-wire cut lot', es: 'Lote secuencial numerado de corte multihilo', it: 'Lotto sequenziale numerato a taglio multifilo' })}</span>
              <span className="text-stone-500 mx-2">·</span>
              <span>{tr({ pt: 'Espessuras 2cm e 3cm com telamento epóxi de reforço', en: '2cm and 3cm thicknesses with epoxy reinforcement mesh', es: 'Espesores de 2cm y 3cm con malla epóxica de refuerzo', it: 'Spessori 2cm e 3cm con rete epossidica di rinforzo' })}</span>
            </div>

            <button
              onClick={() => onRequestQuote(selectedStone)}
              className="flex items-center justify-center gap-2 py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-colors cursor-pointer whitespace-nowrap shadow-md"
            >
              <span>{tr({ pt: 'Solicitar Lote Bookmatched Casado', en: 'Request Matched Bookmatch Lot', es: 'Solicitar Lote Bookmatched Combinado', it: 'Richiedi Lotto Bookmatch Abbinato' })}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

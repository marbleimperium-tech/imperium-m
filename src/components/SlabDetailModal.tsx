import React, { useState } from 'react';
import { StoneItem } from '../types/stone';
import { SlabTextureRenderer } from './SlabTextureRenderer';
import { useI18n } from '../context/I18nContext';
import { X, ZoomIn, Layers, Sun, Check, ArrowRight, ShieldCheck, MapPin, Sparkles, Camera, Home } from 'lucide-react';
import { COMPANY_INFO } from '../data/stones';

interface SlabDetailModalProps {
  stone: StoneItem | null;
  onClose: () => void;
  onRequestQuote: (stone: StoneItem) => void;
}

type ModalViewType = 'real-slab' | 'architectural' | 'vector-interactive';

export const SlabDetailModal: React.FC<SlabDetailModalProps> = ({
  stone: rawStone,
  onClose,
  onRequestQuote,
}) => {
  const { t, tr, ls, language } = useI18n();
  const [modalView, setModalView] = useState<ModalViewType>('real-slab');
  const [isBookmatched, setIsBookmatched] = useState(false);
  const [isBacklit, setIsBacklit] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState<string>(rawStone?.finishes[0] || 'Polido');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  if (!rawStone) return null;
  const stone = ls(rawStone);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const getWhatsappMsg = () => {
    switch (language) {
      case 'en':
        return `Hello Império Marble team! I would like commercial details and lot availability for stone: ${stone.name} (${stone.categoryLabel}). Delivery location / Port:`;
      case 'es':
        return `¡Hola, equipo de Império Marble! Quisiera información comercial y disponibilidad de lote para la roca: ${stone.name} (${stone.categoryLabel}). Lugar de entrega / Puerto:`;
      case 'it':
        return `Salve, team Império Marble! Vorrei informazioni commerciali e disponibilità di lotto per la pietra: ${stone.name} (${stone.categoryLabel}). Luogo di consegna / Porto:`;
      default:
        return `Olá, equipe Império Marble! Gostaria de informações comerciais e disponibilidade de lote para a rocha: ${stone.name} (${stone.categoryLabel}). Local de entrega / Porto:`;
    }
  };

  const whatsappMessage = encodeURIComponent(getWhatsappMsg());

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-5xl sm:my-auto bg-stone-900 border-0 sm:border border-stone-800 sm:rounded-2xl shadow-2xl overflow-hidden text-stone-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-800 bg-stone-950/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span>{stone.categoryLabel}</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="flex items-center gap-1 text-stone-400">
                <MapPin className="w-3 h-3 text-amber-500/80" />
                {stone.origin}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-100 tracking-tight mt-0.5">
              {stone.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label={tr({ pt: 'Fechar', en: 'Close', es: 'Cerrar', it: 'Chiudi' })}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 max-h-[75vh] sm:max-h-[82vh] overflow-y-auto">
          {/* Left Column: Media & Visualizer (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* View Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-950 rounded-xl border border-stone-800 text-xs overflow-x-auto">
              <button
                type="button"
                onClick={() => setModalView('real-slab')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  modalView === 'real-slab'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{tr({ pt: 'Foto Real da Chapa', en: 'Real Slab Photo', es: 'Foto Real de la Placa', it: 'Foto Reale della Lastra' })}</span>
              </button>

              <button
                type="button"
                onClick={() => setModalView('architectural')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  modalView === 'architectural'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>{tr({ pt: 'Aplicação Real em Obra', en: 'Real Project Application', es: 'Aplicación Real en Obra', it: 'Applicazione Reale in Opera' })}</span>
              </button>

              <button
                type="button"
                onClick={() => setModalView('vector-interactive')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  modalView === 'vector-interactive'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Bookmatch & LED</span>
              </button>
            </div>

            {/* Media Display Area */}
            <div
              className="relative cursor-crosshair rounded-xl overflow-hidden border border-stone-800 bg-stone-950"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              {modalView === 'real-slab' && (
                stone.realPhotoUrl ? (
                  <div className="relative aspect-[1.58/1] w-full overflow-hidden">
                    <img
                      src={stone.realPhotoUrl}
                      alt={`${stone.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300"
                      style={
                        isZoomed
                          ? {
                              transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                              transform: 'scale(1.8)',
                            }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-stone-950/85 backdrop-blur-md rounded border border-stone-800 text-xs text-amber-300 font-mono">
                      {tr({ pt: 'Foto Real da Chapa · Lote Padrão Exportação', en: 'Real Slab Photo · Export Grade Lot', es: 'Foto Real de la Placa · Lote Estándar Exportación', it: 'Foto Reale della Lastra · Lotto Standard Export' })}
                    </div>
                  </div>
                ) : (
                  <SlabTextureRenderer
                    stone={stone}
                    isBookmatched={false}
                    isBacklit={isBacklit}
                    showSlabDimensions={true}
                    aspectRatio="slab"
                    className="w-full h-full"
                  />
                )
              )}

              {modalView === 'architectural' && (
                <div className="relative aspect-[1.58/1] w-full overflow-hidden">
                  <img
                    src={stone.architecturalPhotoUrl}
                    alt={`${stone.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-stone-950/85 backdrop-blur-md rounded border border-stone-800 text-xs text-amber-300 font-medium">
                    {tr({ pt: 'Aplicação Real em Obra de Alto Luxo', en: 'Real Application in High-End Luxury Project', es: 'Aplicación Real en Obra de Alto Lujo', it: 'Applicazione Reale in Progetto di Alto Lusso' })}
                  </div>
                </div>
              )}

              {modalView === 'vector-interactive' && (
                <SlabTextureRenderer
                  stone={stone}
                  isBookmatched={isBookmatched}
                  isBacklit={isBacklit}
                  showSlabDimensions={true}
                  aspectRatio="slab"
                />
              )}

              {/* Magnifier lens indicator on hover */}
              {isZoomed && modalView === 'vector-interactive' && (
                <div
                  className="absolute pointer-events-none w-32 h-32 rounded-full border-2 border-amber-400/90 shadow-[0_0_20px_rgba(212,175,55,0.4)] overflow-hidden hidden md:block z-20"
                  style={{
                    left: `${zoomPos.x}%`,
                    top: `${zoomPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `radial-gradient(circle, ${stone.texturePattern.veinColor} 0%, ${stone.texturePattern.baseColor} 100%)`,
                    backgroundSize: '300% 300%',
                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] text-amber-200/80 font-mono bg-black/30">
                    2.5x {tr({ pt: 'Veios', en: 'Veins', es: 'Vetas', it: 'Venature' })}
                  </div>
                </div>
              )}

              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-stone-950/80 backdrop-blur-md rounded border border-stone-800 text-[11px] text-stone-300 z-10">
                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.modal.inspectTexture}</span>
              </div>
            </div>

            {/* Interactive View Controls (Active when vector-interactive mode) */}
            {modalView === 'vector-interactive' && (
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-stone-950/60 rounded-xl border border-stone-800">
                <span className="text-xs text-stone-400 font-medium">{tr({ pt: 'Modos de Chapa:', en: 'Slab Modes:', es: 'Modos de Placa:', it: 'Modalità Lastra:' })}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsBookmatched(!isBookmatched)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isBookmatched
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-stone-800 text-stone-300 hover:text-white border border-transparent'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t.modal.bookmatch}</span>
                  </button>

                  {stone.specs.translucency && (
                    <button
                      type="button"
                      onClick={() => setIsBacklit(!isBacklit)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        isBacklit
                          ? 'bg-amber-400 text-stone-950 font-bold shadow-lg'
                          : 'bg-stone-800 text-stone-300 hover:text-white border border-transparent'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                      <span>{t.modal.backlight}</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Available Finishes Selector */}
            <div>
              <label className="block text-xs font-medium text-stone-400 mb-2 uppercase tracking-wider">
                {t.modal.surfaceFinishes}
              </label>
              <div className="flex flex-wrap gap-2">
                {stone.finishes.map((finish) => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      selectedFinish === finish
                        ? 'border-amber-500/70 bg-amber-500/10 text-amber-300'
                        : 'border-stone-800 bg-stone-900 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Mineral Highlights */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                {t.modal.mineralHighlights}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-400">
                {stone.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Technical Specs & Wholesale RFQ (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Description */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
                  {t.modal.geologicalDesc}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {stone.description}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-stone-800 rounded-xl overflow-hidden bg-stone-950/50">
                <div className="px-4 py-2.5 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                    {t.modal.labSpecs}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-3 text-xs divide-y divide-stone-800/60 font-mono">
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-400 font-sans">{t.modal.waterAbsorption}</span>
                    <span className="text-stone-200 font-semibold tabular-nums">{stone.specs.waterAbsorption}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-400 font-sans">{t.modal.density}</span>
                    <span className="text-stone-200 font-semibold tabular-nums">{stone.specs.bulkDensity}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-400 font-sans">{t.modal.flexural}</span>
                    <span className="text-stone-200 font-semibold tabular-nums">{stone.specs.flexuralStrength}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-400 font-sans">{t.modal.mohs}</span>
                    <span className="text-amber-400 font-semibold tabular-nums">{stone.specs.mohsHardness} / 10</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-stone-400 font-sans">{t.modal.standardThickness}</span>
                    <span className="text-stone-200">{stone.thicknesses.join(tr({ pt: ' e ', en: ' and ', es: ' y ', it: ' e ' }))}</span>
                  </div>
                </div>
              </div>

              {/* Recommended Uses */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  {t.modal.recommendedUses}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {stone.recommendedUses.map((use, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-stone-800/80 text-stone-300 rounded border border-stone-700/50"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-stone-800">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote(rawStone);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/10 cursor-pointer text-xs sm:text-sm"
              >
                <span>{t.modal.requestQuoteBatch}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${COMPANY_INFO.contact.whatsappUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-xl transition-colors border border-stone-700"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{t.modal.consultWhatsApp}</span>
              </a>

              <p className="text-[11px] text-center text-stone-500">
                {t.modal.b2bDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

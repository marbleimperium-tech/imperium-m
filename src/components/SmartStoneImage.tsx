import React, { useState, useEffect } from 'react';
import { StoneItem } from '../types/stone';
import { SlabTextureRenderer } from './SlabTextureRenderer';
import { useI18n } from '../context/I18nContext';
import { Sparkles, Layers, Home, Eye } from 'lucide-react';

interface SmartStoneImageProps {
  stone: StoneItem;
  mode?: 'slab' | 'project' | 'bookmatch';
  aspectRatio?: 'slab' | 'video' | 'square' | 'wide';
  showControls?: boolean;
  className?: string;
}

export const SmartStoneImage: React.FC<SmartStoneImageProps> = ({
  stone: rawStone,
  mode = 'slab',
  aspectRatio = 'slab',
  showControls = false,
  className = '',
}) => {
  const { t, tr, ls } = useI18n();
  const stone = ls(rawStone);
  const [currentMode, setCurrentMode] = useState<'slab' | 'project' | 'bookmatch'>(mode);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  return (
    <div className={`relative overflow-hidden bg-stone-950 select-none ${className}`}>
      {/* 1. Mode: SLAB (Real Calibrated Slab Photograph) */}
      {currentMode === 'slab' && (
        stone.realPhotoUrl && !photoError ? (
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={stone.realPhotoUrl}
              alt={stone.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setPhotoError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/30 pointer-events-none" />

            {/* Industrial Slab Identification Stamp */}
            <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-0.5 bg-black/75 backdrop-blur-md px-2.5 py-1.5 rounded border border-white/10 font-mono text-[9px] tracking-wider text-stone-300">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <span>{stone.categoryLabel}</span>
                <span className="text-stone-500">·</span>
                <span>{tr({ pt: 'CHAPA #12', en: 'SLAB #12', es: 'PLACA #12', it: 'LASTRA #12' })}</span>
              </div>
              <div className="text-stone-400 text-[8px]">
                {tr({ pt: 'LOTE EXPORTAÇÃO · GUARAPARI/ES', en: 'EXPORT LOT · GUARAPARI/ES', es: 'LOTE EXPORTACIÓN · GUARAPARI/ES', it: 'LOTTO EXPORT · GUARAPARI/ES' })}
              </div>
            </div>

            {/* Translucency Badge */}
            {stone.specs.translucency && (
              <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-amber-500 text-stone-950 text-[10px] font-bold shadow-lg z-10 flex items-center gap-1">
                <span>✦ {t.catalog.translucent}</span>
              </div>
            )}

            {/* Chamfered edge */}
            <div className="absolute inset-0 border-[2px] border-white/15 pointer-events-none rounded-[3px]" />
          </div>
        ) : (
          <SlabTextureRenderer
            stone={stone}
            aspectRatio={aspectRatio}
            showSlabDimensions={true}
            isBookmatched={false}
            className="w-full h-full"
          />
        )
      )}

      {/* 2. Mode: BOOKMATCH (Mirrored Pair A + B) */}
      {currentMode === 'bookmatch' && (
        stone.realPhotoUrl && !photoError ? (
          <div className="grid grid-cols-2 h-full w-full divide-x-2 divide-stone-950/80 overflow-hidden select-none">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={stone.realPhotoUrl}
                alt={`${stone.name} - Face A`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 bg-black/70 backdrop-blur-sm rounded text-[9px] font-mono text-amber-300">
                Face A
              </div>
            </div>
            <div className="relative w-full h-full overflow-hidden scale-x-[-1]">
              <img
                src={stone.realPhotoUrl}
                alt={`${stone.name} - Face B`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 bg-black/70 backdrop-blur-sm rounded text-[9px] font-mono text-amber-300 scale-x-[-1]">
                Face B
              </div>
            </div>
          </div>
        ) : (
          <SlabTextureRenderer
            stone={stone}
            aspectRatio={aspectRatio}
            showSlabDimensions={false}
            isBookmatched={true}
            className="w-full h-full"
          />
        )
      )}

      {/* 3. Mode: PROJECT (Real Architectural Luxury Installation Photo) */}
      {currentMode === 'project' && (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={stone.architecturalPhotoUrl}
            alt={stone.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setPhotoLoaded(true)}
            onError={() => setPhotoError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              photoLoaded && !photoError ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {(!photoLoaded || photoError) && (
            <div className="absolute inset-0">
              <SlabTextureRenderer
                stone={stone}
                aspectRatio={aspectRatio}
                showSlabDimensions={false}
                className="w-full h-full"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-stone-950/85 backdrop-blur-md border border-stone-800 text-[10px] text-stone-200 font-medium z-10 flex items-center gap-1.5">
            <Home className="w-3 h-3 text-amber-400" />
            <span>{tr({ pt: 'Aplicação em Obra de Alto Padrão', en: 'High-End Project Installation', es: 'Aplicación en Obra de Alto Nivel', it: 'Applicazione in Progetto di Pregio' })}</span>
          </div>
        </div>
      )}

      {/* Interactive Micro-Tabs on Card Bottom Right */}
      {showControls && (
        <div
          className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1 p-0.5 rounded-lg bg-black/80 backdrop-blur-md border border-stone-700/80 text-[10px]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setCurrentMode('slab')}
            className={`px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
              currentMode === 'slab'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-300 hover:text-white'
            }`}
            title={tr({ pt: 'Ver Chapa Inteira do Lote', en: 'View Entire Slab Lot', es: 'Ver Placa Completa del Lote', it: 'Vedi Lastra Intera del Lotto' })}
          >
            {tr({ pt: 'Chapa', en: 'Slab', es: 'Placa', it: 'Lastra' })}
          </button>

          <button
            type="button"
            onClick={() => setCurrentMode('bookmatch')}
            className={`px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
              currentMode === 'bookmatch'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-300 hover:text-white'
            }`}
            title={tr({ pt: 'Ver Bookmatch A+B Espelhado', en: 'View Mirrored A+B Bookmatch', es: 'Ver Bookmatch A+B Espejado', it: 'Vedi Bookmatch A+B a Specchio' })}
          >
            Bookmatch
          </button>

          <button
            type="button"
            onClick={() => setCurrentMode('project')}
            className={`px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
              currentMode === 'project'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-300 hover:text-white'
            }`}
            title={tr({ pt: 'Ver Aplicação em Projeto Arquitetônico', en: 'View Application in Architectural Project', es: 'Ver Aplicación en Proyecto Arquitectónico', it: 'Vedi Applicazione in Progetto Architettonico' })}
          >
            {tr({ pt: 'Obra', en: 'Project', es: 'Obra', it: 'Opera' })}
          </button>
        </div>
      )}
    </div>
  );
};

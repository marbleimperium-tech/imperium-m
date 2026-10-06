import React, { useState } from 'react';
import { StoneItem } from '../types/stone';
import { SlabTextureRenderer } from './SlabTextureRenderer';
import { Camera, Layers, Home } from 'lucide-react';

interface SmartStoneImageProps {
  stone: StoneItem;
  mode?: 'slab' | 'project' | 'bookmatch';
  className?: string;
  aspectRatio?: 'slab' | 'square' | 'wide';
  showControls?: boolean;
}

export const SmartStoneImage: React.FC<SmartStoneImageProps> = ({
  stone,
  mode: initialMode = 'slab',
  className = '',
  aspectRatio = 'slab',
  showControls = true,
}) => {
  const [currentMode, setCurrentMode] = useState<'slab' | 'project' | 'bookmatch'>(initialMode);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'wide'
      ? 'aspect-video'
      : 'aspect-[1.58/1]';

  return (
    <div className={`relative overflow-hidden rounded-xl bg-stone-950 border border-stone-800 ${aspectClass} ${className} group`}>
      {/* 1. Mode: SLAB (Monumental Calibrated Stone Slab on A-Frame) */}
      {currentMode === 'slab' && (
        <SlabTextureRenderer
          stone={stone}
          aspectRatio={aspectRatio}
          showSlabDimensions={true}
          isBookmatched={false}
          className="w-full h-full"
        />
      )}

      {/* 2. Mode: BOOKMATCH (Mirrored Pair A + B) */}
      {currentMode === 'bookmatch' && (
        <SlabTextureRenderer
          stone={stone}
          aspectRatio={aspectRatio}
          showSlabDimensions={false}
          isBookmatched={true}
          className="w-full h-full"
        />
      )}

      {/* 3. Mode: PROJECT (Real Architectural Luxury Installation Photo) */}
      {currentMode === 'project' && (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={stone.architecturalPhotoUrl}
            alt={`Aplicação em projeto de ${stone.name}`}
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
            <span>Aplicação em Obra de Alto Padrão</span>
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
            title="Ver Chapa Inteira do Lote"
          >
            Chapa
          </button>

          <button
            type="button"
            onClick={() => setCurrentMode('bookmatch')}
            className={`px-2 py-1 rounded font-medium transition-colors cursor-pointer ${
              currentMode === 'bookmatch'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-300 hover:text-white'
            }`}
            title="Ver Bookmatch A+B Espelhado"
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
            title="Ver Aplicação em Projeto Arquitetônico"
          >
            Obra
          </button>
        </div>
      )}
    </div>
  );
};

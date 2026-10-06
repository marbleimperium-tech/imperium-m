import React, { useState } from 'react';
import { INSPIRATION_PROJECTS, ProjectShowcase } from '../data/projects';
import { StoneItem } from '../types/stone';
import { STONES_DATABASE } from '../data/stones';
import { Sparkles, ArrowRight, MapPin, Eye, Layers } from 'lucide-react';

interface ProjectShowcaseSectionProps {
  onOpenSlabDetail: (stone: StoneItem) => void;
  onRequestQuoteForProject: (stone: StoneItem) => void;
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  onOpenSlabDetail,
  onRequestQuoteForProject,
}) => {
  const [activeProject, setActiveProject] = useState<ProjectShowcase>(INSPIRATION_PROJECTS[0]);

  const associatedStone = STONES_DATABASE.find((s) => s.id === activeProject.stoneId) || STONES_DATABASE[0];

  return (
    <section id="projetos" className="py-20 sm:py-28 bg-stone-900 border-t border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspiração Arquitetônica & Referências</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
              Obras de Prestígio Revestidas com Nossas Rochas
            </h2>
            <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              Como nas grandes marcas mundiais como a Guidoni, nossas rochas são especificadas pelos mais renomados escritórios de arquitetura e design para criar obras memoráveis no Brasil e no exterior.
            </p>
          </div>

          <div className="text-xs text-stone-400 font-mono">
            Mostrando <span className="text-amber-400 font-bold">{INSPIRATION_PROJECTS.length}</span> projetos de referência
          </div>
        </div>

        {/* Featured Project Showcase Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl mb-12">
          {/* Project Image (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden group">
            <img
              src={activeProject.imageUrl}
              alt={activeProject.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/90 backdrop-blur-md border border-stone-800">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{activeProject.location}</span>
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-stone-900/90 backdrop-blur-md border border-stone-800 font-mono text-amber-400">
                Ano: {activeProject.stats.year}
              </span>
            </div>
          </div>

          {/* Project Narrative & Associated Stone (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {activeProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100 mt-1">
                {activeProject.title}
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Projeto assinado por: <strong className="text-stone-200">{activeProject.architect}</strong>
              </p>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Stone Info Card */}
            <div className="p-4 bg-stone-900 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-400">Rocha Especificada:</span>
                <span className="text-[11px] uppercase tracking-wider text-amber-500 font-semibold">
                  {associatedStone.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-stone-700 shrink-0">
                  <img
                    src={associatedStone.realPhotoUrl}
                    alt={associatedStone.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-stone-100">
                    {associatedStone.name}
                  </h4>
                  <div className="text-xs text-stone-400 mt-0.5">
                    Acabamento: {activeProject.stats.finish} · Área: {activeProject.stats.area}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => onOpenSlabDetail(associatedStone)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ver Chapa</span>
                </button>

                <button
                  type="button"
                  onClick={() => onRequestQuoteForProject(associatedStone)}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors cursor-pointer shadow-md"
                >
                  <span>Cotar Lote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INSPIRATION_PROJECTS.map((proj) => {
            const isCurrent = proj.id === activeProject.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`flex flex-col text-left rounded-2xl overflow-hidden border transition-all p-3 cursor-pointer ${
                  isCurrent
                    ? 'bg-stone-950 border-amber-500/80 shadow-lg'
                    : 'bg-stone-950/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] text-amber-300 font-medium">
                    {proj.category}
                  </div>
                </div>

                <div className="text-xs font-serif font-bold text-stone-100 truncate">
                  {proj.title}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5 truncate">
                  {proj.stoneName}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

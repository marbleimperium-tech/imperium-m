import React from 'react';
import { Globe, Anchor, ShieldCheck, Box, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/stones';
import { useI18n } from '../context/I18nContext';

export const ExportAndLogistics: React.FC = () => {
  const { t, tr } = useI18n();

  return (
    <section id="exportacao" className="py-16 sm:py-24 bg-stone-950 text-stone-100 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
            <Globe className="w-4 h-4" />
            <span>{t.export.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            {t.export.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-stone-400 text-xs sm:text-base leading-relaxed">
            {t.export.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Pillar 1 */}
          <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3 hover:border-stone-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Anchor className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-100">
              {t.export.pillars.port.title}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.export.pillars.port.desc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3 hover:border-stone-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Box className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-100">
              {t.export.pillars.bundles.title}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.export.pillars.bundles.desc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3 hover:border-stone-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-100">
              {t.export.pillars.inspection.title}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.export.pillars.inspection.desc}
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3 hover:border-stone-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-100">
              {t.export.pillars.docs.title}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.export.pillars.docs.desc}
            </p>
          </div>
        </div>

        {/* Global Route Banner */}
        <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
                {t.export.reachTitle}
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-stone-100">
                {t.export.reachSubtitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t.export.reachDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{tr({ pt: 'Portos EUA (Miami, Houston, NY)', en: 'US Ports (Miami, Houston, NY)', es: 'Puertos EE. UU. (Miami, Houston, NY)', it: 'Porti USA (Miami, Houston, NY)' })}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{tr({ pt: 'Europa (Roterdã, Valência, Gênova)', en: 'Europe (Rotterdam, Valencia, Genoa)', es: 'Europa (Róterdam, Valencia, Génova)', it: 'Europa (Rotterdam, Valencia, Genova)' })}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{tr({ pt: 'Território nacional via carreta dedicada', en: 'Domestic routes via dedicated freight', es: 'Territorio nacional en camión dedicado', it: 'Trasporto nazionale su gomma dedicato' })}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-950/80 border border-stone-800 p-5 sm:p-6 rounded-xl space-y-3 sm:space-y-4 text-center">
              <div className="text-xs text-stone-400 uppercase tracking-wider">
                {t.export.operationalUnit}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-200">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.number}, {COMPANY_INFO.address.complement}
              </div>
              <div className="text-xs text-amber-400 font-mono">
                {COMPANY_INFO.address.neighborhood} - {COMPANY_INFO.address.city}/{COMPANY_INFO.address.state}
              </div>
              <div className="text-xs text-stone-400 font-mono pt-2 border-t border-stone-800">
                CNPJ {COMPANY_INFO.cnpj}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

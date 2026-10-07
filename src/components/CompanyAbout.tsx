import React from 'react';
import { Mountain, Award, Recycle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/stones';
import { useI18n } from '../context/I18nContext';

export const CompanyAbout: React.FC = () => {
  const { t, tr } = useI18n();

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-stone-900/60 border-t border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Composition with stone texture showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-stone-800">
                <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
                  {tr({ pt: 'Jazidas & Beneficiamento', en: 'Quarries & Processing', es: 'Canteras y Procesamiento', it: 'Cave & Lavorazione' })}
                </span>
                <span className="text-xs text-stone-400 font-mono">Espírito Santo, BR</span>
              </div>

              {/* Real Quarry & Extraction Operations Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 border border-stone-800 group">
                <img
                  src="/images/jazidas-beneficiamento.png"
                  alt={tr({ pt: 'Jazidas de rochas e extração com fio diamantado', en: 'Stone quarries and diamond wire extraction', es: 'Canteras de roca y extracción con hilo diamantado', it: 'Cave di pietra ed estrazione con filo diamantato' })}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-stone-950/20 pointer-events-none" />

                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-stone-950/85 backdrop-blur-md rounded border border-stone-800 text-[10px] text-stone-200 font-mono">
                  {t.about.quarryTag}
                </div>
              </div>

              {/* Key Trust Numbers */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
                  <div className="text-lg sm:text-xl font-bold font-serif text-amber-400">{t.about.reuseWater}</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400">{t.about.reuseWaterDesc}</div>
                </div>
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800">
                  <div className="text-lg sm:text-xl font-bold font-serif text-amber-400">{t.about.precision}</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400">{t.about.precisionDesc}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credibility (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              {t.about.kicker}
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
              {t.about.title}
            </h2>

            <p className="text-stone-300 text-xs sm:text-base leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <Mountain className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">
                    {tr({ pt: 'Seleção Rigorosa de Jazidas', en: 'Strict Quarry Selection', es: 'Selección Rigurosa de Canteras', it: 'Rigorosa Selezione delle Cave' })}
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {tr({ pt: 'Homologação de frentes com estabilidade mineral constante.', en: 'Approval of mining faces with consistent mineral stability.', es: 'Homologación de frentes con estabilidad mineral constante.', it: 'Omologazione di fronti con stabilità minerale costante.' })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">
                    {tr({ pt: 'Padronização Export Grade', en: 'Export Grade Standardization', es: 'Estandarización Grado Exportación', it: 'Standardizzazione Export Grade' })}
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {tr({ pt: 'Chapas com dimensões completas, esquadro perfeito e sem fissuras.', en: 'Full-dimension slabs with perfect squaring and no fissures.', es: 'Placas con dimensiones completas, escuadra perfecta y sin fisuras.', it: 'Lastre a dimensione intera, squadro perfetto e prive di fessure.' })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <Recycle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">
                    {tr({ pt: 'Compromisso Ambiental', en: 'Environmental Commitment', es: 'Compromiso Ambiental', it: 'Impegno Ambientale' })}
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {tr({ pt: 'Licenciamento ambiental pleno e reuso hídrico em ciclo fechado.', en: 'Full environmental licensing and closed-loop water recycling.', es: 'Licenciamiento ambiental pleno y reciclaje hídrico en ciclo cerrado.', it: 'Piena conformità ambientale e riutilizzo idrico a ciclo chiuso.' })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">
                    {tr({ pt: 'Transparência Corporativa', en: 'Corporate Transparency', es: 'Transparencia Corporativa', it: 'Trasparenza Aziendale' })}
                  </h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {tr({ pt: 'CNPJ registrado', en: 'Registered Tax ID', es: 'Registro oficial', it: 'P. IVA / CNPJ registrato' })}: {COMPANY_INFO.cnpj}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

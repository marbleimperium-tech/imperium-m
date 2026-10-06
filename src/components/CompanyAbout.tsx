import React from 'react';
import { Mountain, Award, Recycle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/stones';
import { useI18n } from '../context/I18nContext';

export const CompanyAbout: React.FC = () => {
  const { t } = useI18n();

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
                  Jazidas & Beneficiamento
                </span>
                <span className="text-xs text-stone-400 font-mono">Espírito Santo, BR</span>
              </div>

              {/* Graphic Quarry / Block Yard Representation */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 border border-stone-800">
                <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
                  <defs>
                    <linearGradient id="quarryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#292524" />
                      <stop offset="50%" stopColor="#1c1917" />
                      <stop offset="100%" stopColor="#0c0a09" />
                    </linearGradient>
                    <linearGradient id="sunbeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(212, 175, 55, 0.4)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>

                  <rect width="400" height="300" fill="url(#quarryGrad)" />
                  <polygon points="0,60 120,40 160,110 0,140" fill="#3c3836" />
                  <polygon points="120,40 400,20 400,100 160,110" fill="#44403c" />

                  <polygon points="0,140 180,105 240,180 0,220" fill="#292524" />
                  <polygon points="180,105 400,100 400,190 240,180" fill="#322e2b" />

                  {/* Cut Monolithic Granite & Quartzite Blocks */}
                  <rect x="60" y="190" width="70" height="45" fill="#57534e" stroke="#1c1917" strokeWidth="1.5" />
                  <rect x="135" y="190" width="75" height="45" fill="#44403c" stroke="#1c1917" strokeWidth="1.5" />
                  <rect x="215" y="195" width="80" height="40" fill="#57534e" stroke="#1c1917" strokeWidth="1.5" />
                  <rect x="100" y="150" width="70" height="40" fill="#78716c" stroke="#1c1917" strokeWidth="1.5" />
                  <rect x="175" y="152" width="70" height="38" fill="#57534e" stroke="#1c1917" strokeWidth="1.5" />

                  <polygon points="0,0 280,0 400,300 120,300" fill="url(#sunbeam)" opacity="0.6" />
                </svg>

                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-stone-950/85 backdrop-blur-md rounded border border-stone-800 text-[10px] text-stone-300 font-mono">
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
                  <h4 className="text-xs font-semibold text-stone-200">Seleção Rigorosa de Jazidas</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Homologação de frentes com estabilidade mineral constante.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">Padronização Export Grade</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Chapas com dimensões completas, esquadro perfeito e sem fissuras.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <Recycle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">Compromisso Ambiental</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Licenciamento ambiental pleno e reuso hídrico em ciclo fechado.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-900/80 border border-stone-800">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-stone-200">Transparência Corporativa</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">CNPJ registrado: {COMPANY_INFO.cnpj}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

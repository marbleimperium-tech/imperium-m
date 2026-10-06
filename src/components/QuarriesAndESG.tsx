import React from 'react';
import { Droplets, SunMedium, TreePine, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

export const QuarriesAndESG: React.FC = () => {
  return (
    <section id="sustentabilidade" className="py-20 sm:py-28 bg-stone-950 text-stone-100 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
              <TreePine className="w-4 h-4" />
              <span>Jazidas Próprias & Compromisso ESG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
              A Força da Natureza com Rigoroso Respeito ao Meio Ambiente
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-stone-400 text-sm leading-relaxed">
              Inspirados no padrão de responsabilidade socioambiental de referências globais como a Guidoni, integramos tecnologia de extração não-destrutiva e reciclagem total de recursos em Guarapari/ES.
            </p>
          </div>
        </div>

        {/* 4 ESG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-2xl space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-emerald-400 tabular-nums">100%</div>
              <h3 className="text-base font-serif font-bold text-stone-100 mt-1">Reuso de Água em Ciclo Fechado</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Filtros-prensa industriais recuperam a água do corte e polimento, garantindo zero descarte de efluentes no solo ou mananciais.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-2xl space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-amber-400 tabular-nums">-40%</div>
              <h3 className="text-base font-serif font-bold text-stone-100 mt-1">Corte em Fio Diamantado</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Substituição total de granalhas por teares multifio diamantados, gerando cortes com precisão milimétrica e menor espessura de perda.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-2xl space-y-4 hover:border-emerald-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-emerald-400 tabular-nums">Mata Atlântica</div>
              <h3 className="text-base font-serif font-bold text-stone-100 mt-1">Plano de Recuperação Vegetal</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Reflorestamento permanente das áreas de entorno com mudas nativas, preservando a fauna e corredores ecológicos locais.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-2xl space-y-4 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-stone-100 tabular-nums">100% Legal</div>
              <h3 className="text-base font-serif font-bold text-stone-100 mt-1">Rastreabilidade Mineral ANM</h3>
              <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                Licenciamento mineral e ambiental pleno, com certificado de procedência exigido pelas alfândegas internacionais mais rigorosas.
              </p>
            </div>
          </div>
        </div>

        {/* Industrial Hub Photo & Narrative Banner */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              Parque Industrial Guarapari / ES
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100">
              Capacidade de Beneficiamento de Grande Porte
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Nossa planta fabril conta com linhas automatizadas de resinagem em túnel térmico, calibração contínua e polimento com pratos abrasivos de diamante para um acabamento reflexivo cristalino.
            </p>

            <div className="pt-2 text-xs text-stone-400 font-mono">
              Localização: Rodovia do Sol / Polo Industrial de Rochas Ornamentais de Guarapari
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
              alt="Pátio de blocos e beneficiamento de rochas"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-800 text-xs text-stone-300 font-mono">
              Pátio de Blocos Selecionados para Exportação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

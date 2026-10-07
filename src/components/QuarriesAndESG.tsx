import React from 'react';
import { Droplets, TreePine, ShieldCheck, Cpu } from 'lucide-react';
import { useI18n, LocalizedText } from '../context/I18nContext';

interface EsgCard {
  icon: React.ElementType;
  accent: 'emerald' | 'amber' | 'stone';
  stat: LocalizedText;
  title: LocalizedText;
  desc: LocalizedText;
}

const ESG_CARDS: EsgCard[] = [
  {
    icon: Droplets,
    accent: 'emerald',
    stat: { pt: '100%', en: '100%', es: '100%', it: '100%' },
    title: { pt: 'Reuso de Água em Ciclo Fechado', en: 'Closed-Loop Water Reuse', es: 'Reúso de Agua en Ciclo Cerrado', it: "Riutilizzo dell'Acqua a Ciclo Chiuso" },
    desc: {
      pt: 'Filtros-prensa industriais recuperam a água do corte e polimento, garantindo zero descarte de efluentes no solo ou mananciais.',
      en: 'Industrial filter presses recover water from cutting and polishing, ensuring zero discharge of effluents into soil or water sources.',
      es: 'Filtros prensa industriales recuperan el agua del corte y pulido, garantizando cero vertidos al suelo o manantiales.',
      it: "Filtropresse industriali recuperano l'acqua di taglio e lucidatura, garantendo zero scarichi nel suolo o nelle falde.",
    },
  },
  {
    icon: Cpu,
    accent: 'amber',
    stat: { pt: '-40%', en: '-40%', es: '-40%', it: '-40%' },
    title: { pt: 'Corte em Fio Diamantado', en: 'Diamond Wire Cutting', es: 'Corte con Hilo Diamantado', it: 'Taglio a Filo Diamantato' },
    desc: {
      pt: 'Substituição total de granalhas por teares multifio diamantados, gerando cortes com precisão milimétrica e menor espessura de perda.',
      en: 'Full replacement of steel-grit gang saws with diamond multi-wire saws, delivering millimetric precision and less material loss.',
      es: 'Sustitución total de granallas por telares multihilo diamantados, con cortes de precisión milimétrica y menor pérdida.',
      it: 'Sostituzione totale della graniglia con telai multifilo diamantati, per tagli di precisione millimetrica e minori sprechi.',
    },
  },
  {
    icon: TreePine,
    accent: 'emerald',
    stat: { pt: 'Mata Atlântica', en: 'Atlantic Forest', es: 'Mata Atlántica', it: 'Foresta Atlantica' },
    title: { pt: 'Plano de Recuperação Vegetal', en: 'Vegetation Recovery Plan', es: 'Plan de Recuperación Vegetal', it: 'Piano di Recupero Vegetale' },
    desc: {
      pt: 'Reflorestamento permanente das áreas de entorno com mudas nativas, preservando a fauna e corredores ecológicos locais.',
      en: 'Ongoing reforestation of surrounding areas with native seedlings, preserving local wildlife and ecological corridors.',
      es: 'Reforestación permanente de las áreas aledañas con plantas nativas, preservando la fauna y los corredores ecológicos.',
      it: 'Rimboschimento permanente delle aree circostanti con specie autoctone, preservando fauna e corridoi ecologici locali.',
    },
  },
  {
    icon: ShieldCheck,
    accent: 'stone',
    stat: { pt: '100% Legal', en: '100% Legal', es: '100% Legal', it: '100% Legale' },
    title: { pt: 'Rastreabilidade Mineral ANM', en: 'ANM Mineral Traceability', es: 'Trazabilidad Mineral ANM', it: 'Tracciabilità Mineraria ANM' },
    desc: {
      pt: 'Licenciamento mineral e ambiental pleno, com certificado de procedência exigido pelas alfândegas internacionais mais rigorosas.',
      en: 'Full mining and environmental licensing, with certificates of origin required by the strictest international customs.',
      es: 'Licenciamiento minero y ambiental pleno, con certificado de procedencia exigido por las aduanas internacionales más rigurosas.',
      it: "Licenze minerarie e ambientali complete, con certificato d'origine richiesto dalle dogane internazionali più rigorose.",
    },
  },
];

const ACCENTS = {
  emerald: { hover: 'hover:border-emerald-500/40', box: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400', stat: 'text-emerald-400' },
  amber: { hover: 'hover:border-amber-500/40', box: 'bg-amber-500/10 border-amber-500/30 text-amber-400', stat: 'text-amber-400' },
  stone: { hover: 'hover:border-amber-500/40', box: 'bg-amber-500/10 border-amber-500/30 text-amber-400', stat: 'text-stone-100' },
};

export const QuarriesAndESG: React.FC = () => {
  const { tr } = useI18n();

  return (
    <section id="sustentabilidade" className="py-20 sm:py-28 bg-stone-950 text-stone-100 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
              <TreePine className="w-4 h-4" />
              <span>{tr({ pt: 'Jazidas Próprias & Compromisso ESG', en: 'Own Quarries & ESG Commitment', es: 'Canteras Propias y Compromiso ESG', it: 'Cave Proprie & Impegno ESG' })}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
              {tr({
                pt: 'A Força da Natureza com Rigoroso Respeito ao Meio Ambiente',
                en: 'The Strength of Nature with Rigorous Respect for the Environment',
                es: 'La Fuerza de la Naturaleza con Riguroso Respeto al Medio Ambiente',
                it: "La Forza della Natura nel Massimo Rispetto dell'Ambiente",
              })}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-stone-400 text-sm leading-relaxed">
              {tr({
                pt: 'Seguindo os mais altos padrões de responsabilidade socioambiental, integramos tecnologia de extração não-destrutiva e reciclagem total de recursos em Guarapari/ES.',
                en: 'Following the highest standards of social and environmental responsibility, we integrate non-destructive extraction technology and full resource recycling in Guarapari/ES.',
                es: 'Siguiendo los más altos estándares de responsabilidad socioambiental, integramos tecnología de extracción no destructiva y reciclaje total de recursos en Guarapari/ES.',
                it: 'Seguendo i più alti standard di responsabilità socio-ambientale, integriamo tecnologie di estrazione non distruttiva e il riciclo totale delle risorse a Guarapari/ES.',
              })}
            </p>
          </div>
        </div>

        {/* 4 ESG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ESG_CARDS.map((card, idx) => {
            const Icon = card.icon;
            const a = ACCENTS[card.accent];
            return (
              <div key={idx} className={`p-6 bg-stone-900/90 border border-stone-800 rounded-2xl space-y-4 transition-colors ${a.hover}`}>
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${a.box}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-2xl font-serif font-bold tabular-nums ${a.stat}`}>{tr(card.stat)}</div>
                  <h3 className="text-base font-serif font-bold text-stone-100 mt-1">{tr(card.title)}</h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">{tr(card.desc)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industrial Hub Photo & Narrative Banner */}
        <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              {tr({ pt: 'Parque Industrial Guarapari / ES', en: 'Guarapari / ES Industrial Park', es: 'Parque Industrial Guarapari / ES', it: 'Parco Industriale Guarapari / ES' })}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-100">
              {tr({ pt: 'Capacidade de Beneficiamento de Grande Porte', en: 'Large-Scale Processing Capacity', es: 'Capacidad de Procesamiento a Gran Escala', it: 'Capacità di Lavorazione su Larga Scala' })}
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              {tr({
                pt: 'Nossa planta fabril conta com linhas automatizadas de resinagem em túnel térmico, calibração contínua e polimento com pratos abrasivos de diamante para um acabamento reflexivo cristalino.',
                en: 'Our plant features automated resin lines with thermal tunnels, continuous calibration and diamond abrasive polishing for a crystal-clear reflective finish.',
                es: 'Nuestra planta cuenta con líneas automatizadas de resinado en túnel térmico, calibrado continuo y pulido con platos abrasivos de diamante para un acabado reflectante cristalino.',
                it: 'Il nostro stabilimento dispone di linee automatizzate di resinatura in tunnel termico, calibratura continua e lucidatura con abrasivi diamantati per una finitura riflettente cristallina.',
              })}
            </p>

            <div className="pt-2 text-xs text-stone-400 font-mono">
              {tr({
                pt: 'Localização: Rodovia do Sol / Polo Industrial de Rochas Ornamentais de Guarapari',
                en: 'Location: Rodovia do Sol / Guarapari Ornamental Stone Industrial Hub',
                es: 'Ubicación: Rodovia do Sol / Polo Industrial de Rocas Ornamentales de Guarapari',
                it: 'Posizione: Rodovia do Sol / Polo Industriale della Pietra Ornamentale di Guarapari',
              })}
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden">
            <img
              src="/images/patio-blocos.jpg"
              alt={tr({ pt: 'Pátio de blocos de rochas nobres', en: 'Yard of premium stone blocks', es: 'Patio de bloques de rocas nobles', it: 'Piazzale di blocchi di pietra pregiata' })}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-800 text-xs text-stone-200 font-mono">
              {tr({ pt: 'Polimento Cristalino & Paginação Contínua', en: 'Crystal Polish & Continuous Layout', es: 'Pulido Cristalino y Paginación Continua', it: 'Lucidatura Cristallina & Impaginazione Continua' })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Building2, Factory, Ship, Check, ArrowRight } from 'lucide-react';
import { useI18n, LocalizedText } from '../context/I18nContext';

interface B2BSegmentsProps {
  onOpenQuote: () => void;
}

interface Segment {
  icon: React.ElementType;
  featured?: boolean;
  badge?: LocalizedText;
  title: LocalizedText;
  desc: LocalizedText;
  bullets: LocalizedText[];
  cta: LocalizedText;
}

const SEGMENTS: Segment[] = [
  {
    icon: Factory,
    title: { pt: 'Marmorarias & Beneficiadoras', en: 'Fabricators & Stone Shops', es: 'Marmolerías y Transformadoras', it: 'Marmisti & Laboratori' },
    desc: {
      pt: 'Chapas calibradas, com resinagem profunda a vácuo e tela de reforço para corte limpo em esquadria sem quebras ou desperdício de margem.',
      en: 'Calibrated slabs with deep vacuum resin treatment and reinforcement mesh for clean miter cuts without breakage or margin waste.',
      es: 'Placas calibradas, con resinado profundo al vacío y malla de refuerzo para cortes limpios en inglete sin roturas ni desperdicio.',
      it: 'Lastre calibrate, con resinatura profonda sottovuoto e rete di rinforzo per tagli puliti a 45° senza rotture né sprechi.',
    },
    bullets: [
      { pt: 'Amplo estoque a pronta-entrega para entrega rápida', en: 'Large ready-to-ship inventory for fast delivery', es: 'Amplio stock disponible para entrega rápida', it: 'Ampio magazzino pronto per consegne rapide' },
      { pt: 'Chapas bookmatched casadas para bancadas de luxo', en: 'Matched bookmatched slabs for luxury countertops', es: 'Placas bookmatched combinadas para encimeras de lujo', it: 'Lastre bookmatch abbinate per piani di lusso' },
      { pt: 'Suporte técnico de ferramentas e lâminas diamantadas', en: 'Technical support on diamond tools and blades', es: 'Soporte técnico en herramientas y discos diamantados', it: 'Supporto tecnico su utensili e lame diamantate' },
    ],
    cta: { pt: 'Cadastrar Marmoraria para Tabela Atacadista', en: 'Register Your Shop for Wholesale Pricing', es: 'Registrar Marmolería para Tarifa Mayorista', it: 'Registra il Laboratorio per il Listino Ingrosso' },
  },
  {
    icon: Building2,
    featured: true,
    badge: { pt: 'Grandes Empreendimentos', en: 'Large Developments', es: 'Grandes Proyectos', it: 'Grandi Progetti' },
    title: { pt: 'Construtoras & Empreendimentos', en: 'Builders & Developers', es: 'Constructoras y Promotoras', it: 'Costruttori & Sviluppatori' },
    desc: {
      pt: 'Suprimento de grandes metragens com rigidez de lote e uniformidade tonal para fachadas ventiladas, lobbies e áreas sociais nobres.',
      en: 'Supply of large quantities with strict lot control and tonal uniformity for ventilated façades, lobbies and premium common areas.',
      es: 'Suministro de grandes metrajes con rigor de lote y uniformidad tonal para fachadas ventiladas, lobbies y áreas sociales nobles.',
      it: 'Fornitura di grandi metrature con rigore di lotto e uniformità tonale per facciate ventilate, lobby e aree comuni di pregio.',
    },
    bullets: [
      { pt: 'Laudos de ensaios laboratoriais segundo normas ASTM', en: 'Laboratory test reports according to ASTM standards', es: 'Informes de ensayos de laboratorio según normas ASTM', it: 'Rapporti di prova di laboratorio secondo norme ASTM' },
      { pt: 'Capacidade de fornecimento contínuo de milhares de m²', en: 'Continuous supply capacity of thousands of m²', es: 'Capacidad de suministro continuo de miles de m²', it: 'Capacità di fornitura continua di migliaia di m²' },
      { pt: 'Cronograma programado de entregas escalonadas na obra', en: 'Scheduled phased deliveries to the job site', es: 'Cronograma de entregas escalonadas en obra', it: 'Consegne programmate e scaglionate in cantiere' },
    ],
    cta: { pt: 'Solicitar Cotação para Edital / Construtora', en: 'Request a Quote for Tender / Builder', es: 'Solicitar Cotización para Licitación / Constructora', it: 'Richiedi Preventivo per Gara / Impresa' },
  },
  {
    icon: Ship,
    title: { pt: 'Importadores & Traders Globais', en: 'Global Importers & Traders', es: 'Importadores y Traders Globales', it: 'Importatori & Trader Globali' },
    desc: {
      pt: 'Estufagem com cavaletes reforçados ISPM 15 e carregamento otimizado de contêineres marítimos diretamente via Portos de Vitória e Tubarão.',
      en: 'Container stuffing with reinforced ISPM 15 bundles and optimized loading of sea containers directly via the Ports of Vitória and Tubarão.',
      es: 'Consolidación con caballetes reforzados ISPM 15 y carga optimizada de contenedores marítimos directamente vía Puertos de Vitória y Tubarão.',
      it: 'Stivaggio con cavalletti rinforzati ISPM 15 e carico ottimizzato dei container direttamente dai Porti di Vitória e Tubarão.',
    },
    bullets: [
      { pt: 'Envio prévio de fotos em 4K de todas as chapas do lote', en: 'Advance 4K photos of every slab in the lot', es: 'Envío previo de fotos 4K de todas las placas del lote', it: 'Invio anticipato di foto 4K di tutte le lastre del lotto' },
      { pt: 'Documentação aduaneira completa (Invoice, Packing List, B/L)', en: 'Complete customs documentation (Invoice, Packing List, B/L)', es: 'Documentación aduanera completa (Invoice, Packing List, B/L)', it: 'Documentazione doganale completa (Invoice, Packing List, B/L)' },
      { pt: 'Termos FOB Porto de Vitória ou CIF no porto de destino', en: 'FOB Port of Vitória or CIF destination port terms', es: 'Términos FOB Puerto de Vitória o CIF en puerto de destino', it: 'Termini FOB Porto di Vitória o CIF porto di destinazione' },
    ],
    cta: { pt: 'Consultar Condições de Exportação (FOB/CIF)', en: 'Check Export Terms (FOB/CIF)', es: 'Consultar Condiciones de Exportación (FOB/CIF)', it: 'Consulta Condizioni di Export (FOB/CIF)' },
  },
];

export const B2BSegments: React.FC<B2BSegmentsProps> = ({ onOpenQuote }) => {
  const { tr } = useI18n();

  return (
    <section className="py-20 sm:py-28 bg-stone-900/40 border-t border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
            {tr({ pt: 'Soluções Sob Medida no Atacado', en: 'Tailored Wholesale Solutions', es: 'Soluciones Mayoristas a Medida', it: "Soluzioni su Misura all'Ingrosso" })}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            {tr({ pt: 'Excelência no Atendimento aos Diferentes Segmentos', en: 'Excellence in Serving Every Segment', es: 'Excelencia en la Atención a Cada Segmento', it: 'Eccellenza nel Servire Ogni Segmento' })}
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            {tr({
              pt: 'Entendemos as particularidades operacionais de quem transforma, especifica ou importa rochas ornamentais de alto valor agregado.',
              en: 'We understand the operational needs of those who fabricate, specify or import high-value ornamental stone.',
              es: 'Entendemos las particularidades operativas de quienes transforman, especifican o importan rocas ornamentales de alto valor.',
              it: 'Comprendiamo le esigenze operative di chi lavora, specifica o importa pietre ornamentali di alto valore.',
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SEGMENTS.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className={
                  seg.featured
                    ? 'bg-stone-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative'
                    : 'bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all hover:shadow-2xl'
                }
              >
                {seg.badge && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {tr(seg.badge)}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-100">{tr(seg.title)}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{tr(seg.desc)}</p>

                  <ul className="space-y-2.5 pt-2 text-xs text-stone-300">
                    {seg.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{tr(b)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenQuote}
                  className={
                    seg.featured
                      ? 'mt-6 w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/10'
                      : 'mt-6 w-full py-3 px-4 bg-stone-900 hover:bg-stone-850 text-amber-300 border border-stone-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5'
                  }
                >
                  <span>{tr(seg.cta)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

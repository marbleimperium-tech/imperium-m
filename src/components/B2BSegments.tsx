import React from 'react';
import { Building2, Factory, Ship, Check, ArrowRight } from 'lucide-react';

interface B2BSegmentsProps {
  onOpenQuote: () => void;
}

export const B2BSegments: React.FC<B2BSegmentsProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-28 bg-stone-900/40 border-t border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2">
            Soluções Sob Medida no Atacado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            Excelência no Atendimento aos Diferentes Segmentos
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Como na Guidoni, entendemos as particularidades operacionais de quem transforma, especifica ou importa rochas ornamentais de alto valor agregado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Segment 1: Marmorarias */}
          <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all hover:shadow-2xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-100">
                Marmorarias & Beneficiadoras
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Chapas calibradas, com resinagem profunda a vácuo e tela de reforço para corte limpo em esquadria sem quebras ou desperdício de margem.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Amplo estoque a pronta-entrega para entrega rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Chapas bookmatched casadas para bancadas de luxo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Suporte técnico de ferramentas e lâminas diamantadas</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="mt-6 w-full py-3 px-4 bg-stone-900 hover:bg-stone-850 text-amber-300 border border-stone-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Cadastrar Marmoraria para Tabela Atacadista</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Segment 2: Construtoras & Incorporadoras */}
          <div className="bg-stone-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-4 right-4 px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full text-[10px] uppercase font-bold tracking-wider">
              Grandes Empreendimentos
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-100">
                Construtoras & Empreendimentos
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Suprimento de grandes metragens com rigidez de lote e uniformidade tonal para fachadas ventiladas, lobbies e áreas sociais nobres.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Laudos de ensaios laboratoriais segundo normas ASTM</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Capacidade de fornecimento contínuo de milhares de m²</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cronograma programado de entregas escalonadas na obra</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="mt-6 w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/10"
            >
              <span>Solicitar Cotação para Edital / Construtora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Segment 3: Importadores Globais */}
          <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/50 transition-all hover:shadow-2xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-100">
                Importadores & Traders Globais
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                Estufagem com cavaletes reforçados ISPM 15 e carregamento otimizado de contêineres marítimos diretamente via Portos de Vitória e Tubarão.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Envio prévio de fotos em 4K de todas as chapas do lote</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Documentação aduaneira completa (Invoice, Packing List, B/L)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Termos FOB Porto de Vitória ou CIF no porto de destino</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenQuote}
              className="mt-6 w-full py-3 px-4 bg-stone-900 hover:bg-stone-850 text-amber-300 border border-stone-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Consultar Condições de Exportação (FOB/CIF)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

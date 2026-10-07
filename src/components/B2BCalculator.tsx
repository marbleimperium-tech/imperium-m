import React, { useState } from 'react';
import { Calculator, Truck, Package, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface B2BCalculatorProps {
  onApplyEstimateToQuote: (estimateText: string) => void;
}

export const B2BCalculator: React.FC<B2BCalculatorProps> = ({
  onApplyEstimateToQuote,
}) => {
  const { t, tr, language } = useI18n();
  const [calcMode, setCalcMode] = useState<'area' | 'slabs'>('area');
  const [inputValue, setInputValue] = useState<number>(300);
  const [thickness, setThickness] = useState<'2cm' | '3cm'>('2cm');
  const [materialType, setMaterialType] = useState<'quartzite' | 'marble' | 'granite'>('quartzite');

  const SLAB_AVG_M2 = 5.64;
  const weightPerM2 = thickness === '2cm' ? 55 : 82.5;

  const totalM2 = calcMode === 'area' ? inputValue : inputValue * SLAB_AVG_M2;
  const totalSlabs = calcMode === 'slabs' ? inputValue : Math.ceil(inputValue / SLAB_AVG_M2);

  const totalWeightKg = totalM2 * weightPerM2;
  const totalWeightTons = totalWeightKg / 1000;

  const slabsPerBundle = thickness === '2cm' ? 6 : 4;
  const totalBundles = Math.ceil(totalSlabs / slabsPerBundle);

  const MAX_CONTAINER_TONS = 27;
  const containersNeeded = Math.ceil(totalWeightTons / MAX_CONTAINER_TONS) || 1;
  const containerUtilizationPercent = Math.min(
    100,
    Math.round((totalWeightTons / (containersNeeded * MAX_CONTAINER_TONS)) * 100)
  );

  const handleExportEstimate = () => {
    let summary = '';
    if (language === 'en') {
      summary = `Wholesale Lot Calculation: ${Math.round(totalM2)} m² (${totalSlabs} slabs) of ${materialType.toUpperCase()} in ${thickness} thickness. Estimated weight: ${totalWeightTons.toFixed(1)} tons (${totalBundles} wooden bundles / ${containersNeeded} 20ft container(s)).`;
    } else if (language === 'es') {
      summary = `Cálculo de Lote Mayorista: ${Math.round(totalM2)} m² (${totalSlabs} placas) de ${materialType.toUpperCase()} en espesor ${thickness}. Peso estimado: ${totalWeightTons.toFixed(1)} toneladas (${totalBundles} caballetes de madera / ${containersNeeded} contenedor(es) de 20 pies).`;
    } else if (language === 'it') {
      summary = `Calcolo Lotto all'Ingrosso: ${Math.round(totalM2)} m² (${totalSlabs} lastre) di ${materialType.toUpperCase()} con spessore ${thickness}. Peso stimato: ${totalWeightTons.toFixed(1)} tonnellate (${totalBundles} cavalletti in legno / ${containersNeeded} container da 20 piedi).`;
    } else {
      summary = `Cálculo de Lote Atacadista: ${Math.round(totalM2)} m² (${totalSlabs} chapas) de ${materialType.toUpperCase()} em espessura ${thickness}. Peso estimado: ${totalWeightTons.toFixed(1)} toneladas (${totalBundles} cavalletes de madeira / ${containersNeeded} contêiner(es) de 20ft).`;
    }
    onApplyEstimateToQuote(summary);
  };

  const slabsUnit = tr({ pt: 'chapas', en: 'slabs', es: 'placas', it: 'lastre' });

  return (
    <section id="calculadora-b2b" className="py-16 sm:py-24 bg-stone-900 border-t border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Info & Explanation (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
              <Calculator className="w-4 h-4" />
              <span>{t.calculator.kicker}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight">
              {t.calculator.title}
            </h2>

            <p className="text-stone-300 text-xs sm:text-base leading-relaxed">
              {t.calculator.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-300">
                  <strong className="text-stone-100">
                    {tr({ pt: 'Cavaletes de Exportação ISPM 15: ', en: 'ISPM 15 Export Bundles: ', es: 'Caballetes de Exportación ISPM 15: ', it: 'Cavalletti di Esportazione ISPM 15: ' })}
                  </strong>
                  {tr({
                    pt: 'Madeira tratada termicamente e fumigada conforme padrão internacional.',
                    en: 'Heat-treated, fumigated wood compliant with international standards.',
                    es: 'Madera tratada térmicamente y fumigada según estándares internacionales.',
                    it: 'Legno trattato termicamente e fumigato secondo standard internazionali.',
                  })}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-300">
                  <strong className="text-stone-100">
                    {tr({ pt: 'Aproveitamento Máximo de Carga: ', en: 'Maximum Payload Optimization: ', es: 'Aprovechamiento Máximo de Carga: ', it: 'Ottimizzazione Massima del Carico: ' })}
                  </strong>
                  {tr({
                    pt: 'Otimização de peso para não exceder limites de 27 toneladas por contêiner de 20 pés.',
                    en: 'Weight optimization to respect the 27-ton limit per 20ft container.',
                    es: 'Optimización de peso para no exceder los límites de 27 toneladas por contenedor de 20 pies.',
                    it: 'Ottimizzazione del peso per non superare il limite di 27 tonnellate per container da 20 piedi.',
                  })}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-300">
                  <strong className="text-stone-100">
                    {tr({ pt: 'Fotos de Alta Definição: ', en: 'High-Resolution Photos: ', es: 'Fotos de Alta Definición: ', it: 'Foto ad Alta Risoluzione: ' })}
                  </strong>
                  {tr({
                    pt: 'Envio prévio de fotos em alta resolução de todas as chapas do lote antes do carregamento.',
                    en: 'Advance high-resolution photos of every slab in the lot before loading.',
                    es: 'Envío previo de fotos en alta resolución de todas las placas del lote antes de la carga.',
                    it: 'Invio preventivo di foto ad alta risoluzione di tutte le lastre del lotto prima del carico.',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Interactive Panel (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-base sm:text-lg font-serif font-semibold text-stone-100 flex items-center justify-between pb-3 border-b border-stone-800">
              <span>{tr({ pt: 'Simulação de Lote & Cubagem', en: 'Lot & Volume Simulation', es: 'Simulación de Lote y Cubicación', it: 'Simulazione Lotto & Cubatura' })}</span>
              <span className="text-[11px] sm:text-xs text-amber-500 font-mono">Guarapari/ES Hub</span>
            </h3>

            {/* Input Mode Selector */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setCalcMode('area')}
                className={`py-2.5 px-3 sm:px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  calcMode === 'area'
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                }`}
              >
                {t.calculator.modeArea}
              </button>
              <button
                type="button"
                onClick={() => setCalcMode('slabs')}
                className={`py-2.5 px-3 sm:px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  calcMode === 'slabs'
                    ? 'bg-amber-500 text-stone-950 border-amber-500 shadow'
                    : 'bg-stone-900 text-stone-300 border-stone-800 hover:border-stone-700'
                }`}
              >
                {t.calculator.modeSlabs}
              </button>
            </div>

            {/* Main Numeric Slider / Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-medium text-stone-400">
                  {calcMode === 'area' ? t.calculator.areaLabel : t.calculator.slabsLabel}
                </label>
                <div className="text-lg sm:text-xl font-bold font-mono text-amber-400">
                  {inputValue} {calcMode === 'area' ? 'm²' : slabsUnit}
                </div>
              </div>
              <input
                type="range"
                min={calcMode === 'area' ? 50 : 10}
                max={calcMode === 'area' ? 1200 : 250}
                step={calcMode === 'area' ? 25 : 5}
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono mt-1">
                <span>{calcMode === 'area' ? '50 m²' : `10 ${slabsUnit}`}</span>
                <span>
                  {calcMode === 'area'
                    ? tr({ pt: '1.200 m² (Lote Exportação)', en: '1,200 m² (Export Lot)', es: '1.200 m² (Lote Exportación)', it: '1.200 m² (Lotto Export)' })
                    : tr({ pt: '250 chapas (~5 Contêineres)', en: '250 slabs (~5 Containers)', es: '250 placas (~5 Contenedores)', it: '250 lastre (~5 Container)' })}
                </span>
              </div>
            </div>

            {/* Thickness and Material Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-400 mb-2">
                  {t.calculator.thicknessLabel}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setThickness('2cm')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      thickness === '2cm'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    2 cm (~55 kg/m²)
                  </button>
                  <button
                    type="button"
                    onClick={() => setThickness('3cm')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      thickness === '3cm'
                        ? 'bg-amber-500/10 border-amber-500 text-amber-300'
                        : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    3 cm (~82 kg/m²)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-400 mb-2">
                  {t.calculator.stoneTypeLabel}
                </label>
                <select
                  value={materialType}
                  onChange={(e) => setMaterialType(e.target.value as any)}
                  className="w-full py-2 px-3 bg-stone-900 border border-stone-800 rounded-lg text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="quartzite">{tr({ pt: 'Quartzito Exótico', en: 'Exotic Quartzite', es: 'Cuarcita Exótica', it: 'Quarzite Esotica' })}</option>
                  <option value="marble">{tr({ pt: 'Mármore Nobre', en: 'Noble Marble', es: 'Mármol Noble', it: 'Marmo Pregiato' })}</option>
                  <option value="granite">{tr({ pt: 'Granito Superior', en: 'Premium Granite', es: 'Granito Superior', it: 'Granito Superiore' })}</option>
                </select>
              </div>
            </div>

            {/* Calculated Output Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 bg-stone-900/90 rounded-xl border border-stone-800">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <Package className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.calculator.slabsApprox}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-stone-100 tabular-nums">
                  {totalSlabs}
                </div>
                <div className="text-[10px] text-stone-500">
                  ~ {Math.round(totalM2)} m²
                </div>
              </div>

              <div className="p-3 bg-stone-900/90 rounded-xl border border-stone-800">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <Scale className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.calculator.totalWeight}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-stone-100 tabular-nums">
                  {totalWeightTons.toFixed(1)} <span className="text-xs font-normal text-stone-400">ton</span>
                </div>
                <div className="text-[10px] text-stone-500">
                  {Math.round(totalWeightKg).toLocaleString()} kg
                </div>
              </div>

              <div className="p-3 bg-stone-900/90 rounded-xl border border-stone-800">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <Package className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.calculator.bundles}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-stone-100 tabular-nums">
                  {totalBundles}
                </div>
                <div className="text-[10px] text-stone-500">
                  ~{slabsPerBundle} {tr({ pt: 'ch/cavalete', en: 'slabs/bundle', es: 'pl/caballete', it: 'lastre/cavalletto' })}
                </div>
              </div>

              <div className="p-3 bg-stone-900/90 rounded-xl border border-stone-800">
                <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-1">
                  <Truck className="w-3.5 h-3.5 text-amber-500" />
                  <span>{t.calculator.container20ft}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 tabular-nums">
                  {containersNeeded} <span className="text-xs text-stone-400">({containerUtilizationPercent}%)</span>
                </div>
                <div className="text-[10px] text-stone-500">
                  {tr({ pt: 'Máx. 27t', en: 'Max 27t', es: 'Máx. 27t', it: 'Max 27t' })}
                </div>
              </div>
            </div>

            {/* Action button */}
            <button
              type="button"
              onClick={handleExportEstimate}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer text-xs sm:text-sm"
            >
              <span>{t.calculator.transferToQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { StoneItem, QuoteFormData } from '../types/stone';
import { STONES_DATABASE, COMPANY_INFO } from '../data/stones';
import { useI18n } from '../context/I18nContext';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStone?: StoneItem | null;
  initialNote?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialStone,
  initialNote = '',
}) => {
  const { t } = useI18n();
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    clientType: 'marmoraria',
    email: '',
    phone: '',
    stoneId: initialStone?.id || STONES_DATABASE[0].id,
    volumeType: 'chapas',
    estimatedQuantity: '20',
    destinationCity: '',
    observations: initialNote,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialStone) {
      setFormData((prev) => ({ ...prev, stoneId: initialStone.id }));
    }
    if (initialNote) {
      setFormData((prev) => ({ ...prev, observations: initialNote }));
    }
  }, [initialStone, initialNote]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Nome é obrigatório';
    if (!formData.companyName.trim()) errs.companyName = 'Nome da empresa é obrigatório';
    if (!formData.phone.trim()) errs.phone = 'Telefone/WhatsApp é obrigatório';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'E-mail corporativo válido é obrigatório';
    }
    if (!formData.destinationCity.trim()) {
      errs.destinationCity = 'Cidade/Porto de entrega é obrigatório';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const selectedStone = STONES_DATABASE.find((s) => s.id === formData.stoneId) || STONES_DATABASE[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*SOLICITAÇÃO DE COTAÇÃO - IMPÉRIO MARBLE*
• *Cliente:* ${formData.fullName}
• *Empresa:* ${formData.companyName} (${formData.clientType.toUpperCase()})
• *Telefone:* ${formData.phone}
• *E-mail:* ${formData.email}
• *Rocha de Interesse:* ${selectedStone.name} (${selectedStone.categoryLabel})
• *Volume Estimado:* ${formData.estimatedQuantity} ${formData.volumeType}
• *Destino / Cidade:* ${formData.destinationCity}
• *Observações:* ${formData.observations || 'Nenhuma'}`;

    window.open(`${COMPANY_INFO.contact.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden text-stone-100 animate-in fade-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-800 bg-stone-950/70">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              {t.rfq.kicker}
            </div>
            <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100">
              {t.rfq.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 sm:py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
                {t.rfq.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                {t.rfq.successDesc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors text-xs sm:text-sm shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.rfq.accelerateWhatsApp}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto py-3 px-6 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs sm:text-sm font-medium rounded-xl transition-colors cursor-pointer"
                >
                  {t.rfq.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.fullName}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ex: Carlos Albuquerque"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  {errors.fullName && (
                    <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.companyName}
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Ex: Marmoraria Imperial Ltda"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  {errors.companyName && (
                    <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.companyName}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.companyType}
                  </label>
                  <select
                    value={formData.clientType}
                    onChange={(e) => setFormData({ ...formData, clientType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="marmoraria">Marmoraria / Beneficiadora</option>
                    <option value="construtora">Construtora / Incorporadora</option>
                    <option value="arquiteto">Escritório de Arquitetura / Design</option>
                    <option value="importador">Importador Internacional / Trader</option>
                    <option value="particular">Investidor / Proprietário</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.whatsappPhone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+55 (11) 98765-4321"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  {errors.phone && (
                    <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="comercial@suaempresa.com"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  {errors.email && (
                    <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.destinationCity}
                  </label>
                  <input
                    type="text"
                    value={formData.destinationCity}
                    onChange={(e) => setFormData({ ...formData, destinationCity: e.target.value })}
                    placeholder="Ex: São Paulo - SP ou Port of Miami"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                  />
                  {errors.destinationCity && (
                    <span className="text-rose-400 text-[11px] mt-0.5 block">{errors.destinationCity}</span>
                  )}
                </div>
              </div>

              {/* Stone & Volume selection */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 pt-1">
                <div className="sm:col-span-7">
                  <label className="block text-stone-300 font-medium mb-1">
                    {t.rfq.stoneInterest}
                  </label>
                  <select
                    value={formData.stoneId}
                    onChange={(e) => setFormData({ ...formData, stoneId: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                  >
                    {STONES_DATABASE.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-5 flex gap-2">
                  <div className="w-1/2">
                    <label className="block text-stone-300 font-medium mb-1">
                      {t.rfq.quantity}
                    </label>
                    <input
                      type="text"
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      placeholder="Qtd"
                      className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-stone-300 font-medium mb-1">
                      {t.rfq.unit}
                    </label>
                    <select
                      value={formData.volumeType}
                      onChange={(e) => setFormData({ ...formData, volumeType: e.target.value as any })}
                      className="w-full px-2 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-200 focus:outline-none focus:border-amber-500"
                    >
                      <option value="chapas">Chapas</option>
                      <option value="m2">m²</option>
                      <option value="containers">Contêiner</option>
                      <option value="blocos">Blocos</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">
                  {t.rfq.notes}
                </label>
                <textarea
                  rows={3}
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  placeholder="Espessura (2cm ou 3cm), acabamento (polido, escovado), cronograma da obra..."
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.rfq.sendFormal}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.rfq.quoteWhatsApp}</span>
                </button>
              </div>

              <div className="text-[11px] text-stone-500 text-center pt-1">
                Atendimento direto: {COMPANY_INFO.contact.phone} ou {COMPANY_INFO.contact.email}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

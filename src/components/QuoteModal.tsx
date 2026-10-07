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
  const { t, tr, ls, language } = useI18n();
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
    if (!formData.fullName.trim()) {
      errs.fullName = tr({ pt: 'Nome é obrigatório', en: 'Name is required', es: 'El nombre es obligatorio', it: 'Il nome è obbligatorio' });
    }
    if (!formData.companyName.trim()) {
      errs.companyName = tr({ pt: 'Nome da empresa é obrigatório', en: 'Company name is required', es: 'El nombre de la empresa es obligatorio', it: "Il nome dell'azienda è obbligatorio" });
    }
    if (!formData.phone.trim()) {
      errs.phone = tr({ pt: 'Telefone/WhatsApp é obrigatório', en: 'Phone/WhatsApp is required', es: 'Teléfono/WhatsApp es obligatorio', it: 'Telefono/WhatsApp è obbligatorio' });
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = tr({ pt: 'E-mail corporativo válido é obrigatório', en: 'Valid company email is required', es: 'E-mail corporativo válido es obligatorio', it: 'È richiesta un’e-mail aziendale valida' });
    }
    if (!formData.destinationCity.trim()) {
      errs.destinationCity = tr({ pt: 'Cidade/Porto de entrega é obrigatório', en: 'Delivery city/port is required', es: 'Ciudad/Puerto de entrega es obligatorio', it: 'Città/Porto di consegna è obbligatorio' });
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const rawSelectedStone = STONES_DATABASE.find((s) => s.id === formData.stoneId) || STONES_DATABASE[0];
  const selectedStone = ls(rawSelectedStone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    let header = '*SOLICITAÇÃO DE COTAÇÃO - IMPÉRIO MARBLE*';
    let lblClient = 'Cliente';
    let lblCompany = 'Empresa';
    let lblPhone = 'Telefone';
    let lblEmail = 'E-mail';
    let lblStone = 'Rocha de Interesse';
    let lblVol = 'Volume Estimado';
    let lblDest = 'Destino / Cidade';
    let lblObs = 'Observações';

    if (language === 'en') {
      header = '*QUOTE REQUEST - IMPÉRIO MARBLE*';
      lblClient = 'Client';
      lblCompany = 'Company';
      lblPhone = 'Phone';
      lblEmail = 'Email';
      lblStone = 'Stone of Interest';
      lblVol = 'Estimated Volume';
      lblDest = 'Destination / Port';
      lblObs = 'Notes';
    } else if (language === 'es') {
      header = '*SOLICITUD DE COTIZACIÓN - IMPÉRIO MARBLE*';
      lblClient = 'Cliente';
      lblCompany = 'Empresa';
      lblPhone = 'Teléfono';
      lblEmail = 'E-mail';
      lblStone = 'Roca de Interés';
      lblVol = 'Volumen Estimado';
      lblDest = 'Destino / Puerto';
      lblObs = 'Observaciones';
    } else if (language === 'it') {
      header = '*RICHIESTA DI PREVENTIVO - IMPÉRIO MARBLE*';
      lblClient = 'Cliente';
      lblCompany = 'Azienda';
      lblPhone = 'Telefono';
      lblEmail = 'E-mail';
      lblStone = 'Pietra di Interesse';
      lblVol = 'Volume Stimato';
      lblDest = 'Destinazione / Porto';
      lblObs = 'Note';
    }

    const text = `${header}
• *${lblClient}:* ${formData.fullName}
• *${lblCompany}:* ${formData.companyName} (${formData.clientType.toUpperCase()})
• *${lblPhone}:* ${formData.phone}
• *${lblEmail}:* ${formData.email}
• *${lblStone}:* ${selectedStone.name} (${selectedStone.categoryLabel})
• *${lblVol}:* ${formData.estimatedQuantity} ${formData.volumeType}
• *${lblDest}:* ${formData.destinationCity}
• *${lblObs}:* ${formData.observations || '-'}`;

    window.open(`${COMPANY_INFO.contact.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-stone-900 border-0 sm:border border-stone-800 sm:rounded-2xl shadow-2xl overflow-hidden text-stone-100 animate-in fade-in zoom-in-95 duration-200 sm:my-auto"
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
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label={tr({ pt: 'Fechar', en: 'Close', es: 'Cerrar', it: 'Chiudi' })}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[82vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-100">
                {t.rfq.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                {t.rfq.successDesc}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleSendToWhatsApp}
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.rfq.accelerateWhatsApp}</span>
                </button>
                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
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
                    placeholder={tr({ pt: 'Ex: Carlos Drummond', en: 'e.g. John Smith', es: 'Ej: Carlos Gómez', it: 'Es: Marco Rossi' })}
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
                    placeholder={tr({ pt: 'Ex: Marmoraria Imperial Ltda', en: 'e.g. Stone Design LLC', es: 'Ej: Marmolería Imperial S.L.', it: 'Es: Marmi & Design S.r.l.' })}
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
                    <option value="marmoraria">
                      {tr({ pt: 'Marmoraria / Beneficiadora', en: 'Fabricator / Stone Shop', es: 'Marmolería / Transformadora', it: 'Marmista / Laboratorio' })}
                    </option>
                    <option value="construtora">
                      {tr({ pt: 'Construtora / Incorporadora', en: 'Builder / Developer', es: 'Constructora / Promotora', it: 'Costruttore / Impresa' })}
                    </option>
                    <option value="arquiteto">
                      {tr({ pt: 'Escritório de Arquitetura / Design', en: 'Architecture / Design Firm', es: 'Estudio de Arquitectura / Diseño', it: 'Studio di Architettura / Design' })}
                    </option>
                    <option value="importador">
                      {tr({ pt: 'Importador Internacional / Trader', en: 'International Importer / Trader', es: 'Importador Internacional / Trader', it: 'Importatore Internazionale / Trader' })}
                    </option>
                    <option value="particular">
                      {tr({ pt: 'Investidor / Proprietário', en: 'Investor / Owner', es: 'Inversionista / Propietario', it: 'Investitore / Proprietario' })}
                    </option>
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
                    placeholder={tr({ pt: 'Ex: São Paulo - SP ou Port of Miami', en: 'e.g. Miami, Houston, NY Port or City', es: 'Ej: Madrid, Valencia o Puerto de destino', it: 'Es: Milano, Genova o Porto di destinazione' })}
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
                        {s.name} ({ls(s).categoryLabel})
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
                      placeholder={tr({ pt: 'Qtd', en: 'Qty', es: 'Cant', it: 'Q.tà' })}
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
                      <option value="chapas">{tr({ pt: 'Chapas', en: 'Slabs', es: 'Placas', it: 'Lastre' })}</option>
                      <option value="m2">m²</option>
                      <option value="containers">{tr({ pt: 'Contêineres', en: 'Containers', es: 'Contenedores', it: 'Container' })}</option>
                      <option value="blocos">{tr({ pt: 'Blocos', en: 'Blocks', es: 'Bloques', it: 'Blocchi' })}</option>
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
                  placeholder={tr({
                    pt: 'Espessura (2cm ou 3cm), acabamento (polido, escovado), cronograma da obra...',
                    en: 'Thickness (2cm or 3cm), finish (polished, honed), project schedule...',
                    es: 'Espesor (2cm o 3cm), acabado (pulido, apomazado), cronograma de obra...',
                    it: 'Spessore (2cm o 3cm), finitura (lucida, levigata), cronoprogramma di cantiere...',
                  })}
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/10 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.rfq.sendFormal}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.rfq.quoteWhatsApp}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

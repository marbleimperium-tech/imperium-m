import React from 'react';
import { COMPANY_INFO } from '../data/stones';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const { t, tr } = useI18n();

  return (
    <section id="contato" className="py-16 sm:py-24 bg-stone-950 text-stone-100 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
            {t.contact.kicker}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-100 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-stone-400 text-xs sm:text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone & WhatsApp Card */}
            <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-medium hover:bg-emerald-600/30 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Online</span>
                </a>
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">{t.contact.salesCentral}</div>
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneClean}`}
                  className="text-xl sm:text-2xl font-serif font-bold text-stone-100 hover:text-amber-400 transition-colors block mt-0.5"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
                <p className="text-xs text-stone-400 mt-1">
                  {tr({
                    pt: 'Atendimento para cotações no atacado, especificações técnicas e laudos de rochas.',
                    en: 'Customer support for wholesale quotes, technical specifications and stone test reports.',
                    es: 'Atención para cotizaciones al por mayor, especificaciones técnicas e informes de rocas.',
                    it: 'Assistenza per preventivi all’ingrosso, specifiche tecniche e perizie sulle pietre.',
                  })}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">{t.contact.emailCentral}</div>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-sm sm:text-base font-serif font-semibold text-stone-100 hover:text-amber-400 transition-colors block mt-0.5 break-all"
                >
                  {COMPANY_INFO.contact.email}
                </a>
                <p className="text-xs text-stone-400 mt-1">
                  {tr({
                    pt: 'Envie sua lista de corte, plantas e solicitações de RFQ para resposta formal com ficha técnica.',
                    en: 'Send your cut list, blueprints and RFQ requests for a formal response with technical specs.',
                    es: 'Envíe su lista de despiece, planos y solicitudes de RFQ para respuesta formal con ficha técnica.',
                    it: 'Invia distinta di taglio, planimetrie e richieste di offerta per una risposta formale con scheda tecnica.',
                  })}
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-5 sm:p-6 bg-stone-900 border border-stone-800 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-400 uppercase tracking-wider">{t.contact.headquarters}</div>
                <div className="text-sm font-semibold text-stone-200 mt-1">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.number}, {COMPANY_INFO.address.complement}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {tr({ pt: 'Bairro', en: 'District', es: 'Barrio', it: 'Quartiere' })} {COMPANY_INFO.address.neighborhood} · {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                </div>
                <div className="text-xs text-stone-500 font-mono mt-0.5">
                  {tr({ pt: 'CEP', en: 'ZIP', es: 'CP', it: 'CAP' })} {COMPANY_INFO.address.zipCode} · {tr({ pt: 'Brasil', en: 'Brazil', es: 'Brasil', it: 'Brasile' })}
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 bg-stone-900/60 border border-stone-800/80 rounded-xl flex items-center gap-3 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>
                {tr({
                  pt: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00',
                  en: 'Monday to Friday: 08:00 - 18:00 | Saturday: 08:00 - 12:00',
                  es: 'Lunes a Viernes: 08:00 a 18:00 | Sábado: 08:00 a 12:00',
                  it: 'Lunedì - Venerdì: 08:00 - 18:00 | Sabato: 08:00 - 12:00',
                })}
              </span>
            </div>
          </div>

          {/* Location Map Visual & Registration Card (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-5 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-stone-800">
              <div>
                <div className="text-xs text-amber-500 font-semibold uppercase tracking-wider">
                  {t.contact.strategicLocation}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-100 mt-0.5">
                  Guarapari - Espírito Santo
                </h3>
              </div>
              <span className="flex items-center gap-1 text-xs text-stone-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{tr({ pt: 'Polo Internacional', en: 'International Hub', es: 'Polo Internacional', it: 'Polo Internazionale' })}</span>
              </span>
            </div>

            {/* Interactive Map Visual */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-stone-800 bg-stone-950">
              <svg viewBox="0 0 600 340" className="w-full h-full object-cover">
                <defs>
                  <linearGradient id="mapCoast" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1c1917" />
                    <stop offset="100%" stopColor="#0c0a09" />
                  </linearGradient>
                  <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#292524" strokeWidth="0.5" />
                  </pattern>
                </defs>

                <rect width="600" height="340" fill="url(#mapCoast)" />
                <rect width="600" height="340" fill="url(#gridPattern)" />

                {/* Stylized Coastline */}
                <path
                  d="M 180 0 Q 220 80 200 160 T 260 260 T 320 340 L 0 340 L 0 0 Z"
                  fill="#141210"
                  stroke="#292524"
                  strokeWidth="1.5"
                />

                {/* Ocean Label */}
                <text x="440" y="180" fill="#44403c" fontSize="11" letterSpacing="4" fontFamily="monospace">
                  OCEANO ATLÂNTICO
                </text>

                {/* Port Vitória Route */}
                <path d="M 230 90 L 250 180" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="230" cy="90" r="4" fill="#f59e0b" />
                <text x="242" y="94" fill="#a8a29e" fontSize="10" fontFamily="sans-serif">
                  Porto de Vitória (ES)
                </text>

                {/* Port Tubarão */}
                <circle cx="245" cy="70" r="4" fill="#f59e0b" />
                <text x="257" y="74" fill="#a8a29e" fontSize="10" fontFamily="sans-serif">
                  Porto de Tubarão
                </text>

                {/* Main Hub: Guarapari */}
                <circle cx="250" cy="180" r="16" fill="#f59e0b" fillOpacity="0.15" />
                <circle cx="250" cy="180" r="8" fill="#f59e0b" fillOpacity="0.3" className="animate-ping" />
                <circle cx="250" cy="180" r="5" fill="#f59e0b" />

                <g transform="translate(265, 170)">
                  <rect x="0" y="0" width="165" height="36" rx="6" fill="#0c0a09" fillOpacity="0.9" stroke="#d97706" strokeWidth="1" />
                  <text x="10" y="15" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                    IMPÉRIO MARBLE
                  </text>
                  <text x="10" y="28" fill="#a8a29e" fontSize="9" fontFamily="monospace">
                    Hub Guarapari / ES
                  </text>
                </g>

                {/* Distance Badge */}
                <g transform="translate(20, 20)">
                  <rect x="0" y="0" width="130" height="24" rx="4" fill="#0c0a09" fillOpacity="0.85" stroke="#292524" />
                  <text x="8" y="16" fill="#10b981" fontSize="10" fontFamily="monospace">
                    ● Portos a 55 km
                  </text>
                </g>
              </svg>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 bg-stone-950/90 backdrop-blur-md rounded-lg border border-stone-800 text-xs">
                <span className="text-stone-300 truncate">
                  {COMPANY_INFO.address.fullFormatted}
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address.fullFormatted)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium shrink-0 ml-2"
                >
                  <span>{t.contact.openMap}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Corporate Transparency Details */}
            <div className="p-4 bg-stone-950/70 border border-stone-800 rounded-xl space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-stone-400">
                <span>{t.contact.corporateName}</span>
                <strong className="text-stone-200">{COMPANY_INFO.name}</strong>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-stone-400">
                <span>{t.contact.cnpj}</span>
                <strong className="text-amber-400 font-mono">{COMPANY_INFO.cnpj}</strong>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-stone-400">
                <span>{t.contact.mainActivity}</span>
                <strong className="text-stone-200">
                  {tr({
                    pt: 'Comércio Atacadista de Mármores e Granitos',
                    en: 'Wholesale Trade in Marble and Granite',
                    es: 'Comercio Mayorista de Mármoles y Granitos',
                    it: 'Commercio all’Ingrosso di Marmi e Graniti',
                  })}
                </strong>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenQuoteModal}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer text-xs sm:text-sm"
            >
              <span>{t.contact.requestSalesSupport}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

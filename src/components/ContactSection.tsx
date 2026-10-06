import React from 'react';
import { COMPANY_INFO } from '../data/stones';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const { t } = useI18n();

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
                  Atendimento para cotações no atacado, especificações técnicas e laudos de rochas.
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
                  Envie sua lista de corte, plantas e solicitações de RFQ para resposta formal com ficha técnica.
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
                  Bairro {COMPANY_INFO.address.neighborhood} · {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
                </div>
                <div className="text-xs text-stone-500 font-mono mt-0.5">
                  CEP {COMPANY_INFO.address.zipCode} · Brasil
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 bg-stone-900/60 border border-stone-800/80 rounded-xl flex items-center gap-3 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.contact.hours}</span>
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
                <span>Polo Internacional</span>
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
                  <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#142129" />
                    <stop offset="100%" stopColor="#0c161d" />
                  </linearGradient>
                </defs>

                <rect width="600" height="340" fill="url(#mapCoast)" />

                <path
                  d="M420,0 Q390,90 410,170 T380,260 Q390,300 440,340 L600,340 L600,0 Z"
                  fill="url(#oceanGrad)"
                />
                <text x="490" y="180" fill="#2d4a5e" fontSize="13" fontFamily="sans-serif" letterSpacing="3">
                  OCEANO ATLÂNTICO
                </text>

                <path d="M280,0 Q310,120 330,220 T360,340" stroke="#44403c" strokeWidth="4" fill="none" />
                <path d="M280,0 Q310,120 330,220 T360,340" stroke="#f59e0b" strokeWidth="1" strokeDasharray="6,4" fill="none" />

                <circle cx="340" cy="80" r="4" fill="#a8a29e" />
                <text x="350" y="85" fill="#a8a29e" fontSize="10" fontFamily="sans-serif">
                  Porto de Vitória / Tubarão
                </text>

                <circle cx="350" cy="220" r="28" fill="rgba(212, 175, 55, 0.15)" />
                <circle cx="350" cy="220" r="14" fill="rgba(212, 175, 55, 0.4)" />
                <circle cx="350" cy="220" r="6" fill="#f59e0b" />

                <g transform="translate(370, 210)">
                  <rect width="180" height="46" rx="6" fill="#1c1917" stroke="#d4af37" strokeWidth="1" />
                  <text x="10" y="18" fill="#f59e0b" fontSize="10" fontWeight="bold">
                    IMPÉRIO MARBLE LTDA
                  </text>
                  <text x="10" y="34" fill="#d6d3d1" fontSize="9">
                    Av. Pe. José de Anchieta, 2165
                  </text>
                </g>
              </svg>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-2 bg-stone-950/85 backdrop-blur-md rounded-lg border border-stone-800 text-[10px] sm:text-[11px] text-stone-300">
                <span className="truncate">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.number}, Sl 12 · Guarapari - ES
                </span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    COMPANY_INFO.address.fullFormatted
                  )}`}
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
                <strong className="text-stone-200">Comércio Atacadista de Mármores e Granitos</strong>
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

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/stones';
import { useI18n, LocalizedText } from '../context/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onOpenQuote: () => void;
}

interface NavLink {
  href: string;
  short: LocalizedText;
  long: LocalizedText;
}

const NAV_LINKS: NavLink[] = [
  {
    href: '#catalogo',
    short: { pt: 'Catálogo', en: 'Catalog', es: 'Catálogo', it: 'Catalogo' },
    long: { pt: 'Catálogo de Chapas', en: 'Slab Catalog', es: 'Catálogo de Placas', it: 'Catalogo Lastre' },
  },
  {
    href: '#projetos',
    short: { pt: 'Inspiração & Obras', en: 'Inspiration & Projects', es: 'Inspiración y Obras', it: 'Ispirazione & Opere' },
    long: { pt: 'Inspiração & Projetos de Referência', en: 'Inspiration & Reference Projects', es: 'Inspiración y Proyectos de Referencia', it: 'Ispirazione & Progetti di Riferimento' },
  },
  {
    href: '#bookmatch-studio',
    short: { pt: 'Bookmatch Studio', en: 'Bookmatch Studio', es: 'Bookmatch Studio', it: 'Bookmatch Studio' },
    long: { pt: 'Bookmatch Studio & Paginação', en: 'Bookmatch Studio & Layout', es: 'Bookmatch Studio y Paginación', it: 'Bookmatch Studio & Impaginazione' },
  },
  {
    href: '#sustentabilidade',
    short: { pt: 'Jazidas & ESG', en: 'Quarries & ESG', es: 'Canteras y ESG', it: 'Cave & ESG' },
    long: { pt: 'Jazidas Próprias & Compromisso ESG', en: 'Own Quarries & ESG Commitment', es: 'Canteras Propias y Compromiso ESG', it: 'Cave Proprie & Impegno ESG' },
  },
  {
    href: '#calculadora-b2b',
    short: { pt: 'Calculadora B2B', en: 'B2B Calculator', es: 'Calculadora B2B', it: 'Calcolatore B2B' },
    long: { pt: 'Calculadora de Contêiner & Carga B2B', en: 'Container & B2B Load Calculator', es: 'Calculadora de Contenedor y Carga B2B', it: 'Calcolatore Container & Carico B2B' },
  },
  {
    href: '#exportacao',
    short: { pt: 'Comex', en: 'Export', es: 'Comex', it: 'Export' },
    long: { pt: 'Logística Portuária & Exportação', en: 'Port Logistics & Export', es: 'Logística Portuaria y Exportación', it: 'Logistica Portuale & Export' },
  },
  {
    href: '#contato',
    short: { pt: 'Contato', en: 'Contact', es: 'Contacto', it: 'Contatti' },
    long: { pt: 'Contato & Localização em Guarapari', en: 'Contact & Location in Guarapari', es: 'Contacto y Ubicación en Guarapari', it: 'Contatti & Sede a Guarapari' },
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, tr } = useI18n();

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/95 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Single text element wordmark in display face with IM emblem */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group min-w-0"
          >
            <img
              src="/favicon.svg"
              alt="Império Marble IM"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0 transition-transform group-hover:scale-105 shadow-md shadow-black"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-2xl font-serif font-bold tracking-wider sm:tracking-widest text-stone-100 group-hover:text-amber-400 transition-colors truncate">
                IMPÉRIO MARBLE
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-stone-400 group-hover:text-amber-300 font-sans transition-colors truncate">
                GUARAPARI · ES
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links in editorial style */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] uppercase tracking-widest font-medium text-stone-300">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-amber-400 transition-colors py-1">
                {tr(link.short)}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions + Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <LanguageSwitcher />

            <a
              href={`tel:${COMPANY_INFO.contact.phoneClean}`}
              className="hidden 2xl:flex items-center gap-1.5 text-xs text-stone-300 hover:text-white px-2.5 py-1.5 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.contact.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-2.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-stone-950 bg-amber-500 rounded-lg sm:rounded-xl hover:bg-amber-400 transition-colors whitespace-nowrap cursor-pointer shadow-md shadow-amber-500/10"
            >
              <span className="hidden xs:inline sm:inline">{tr({ pt: 'Cotação B2B', en: 'B2B Quote', es: 'Cotización B2B', it: 'Preventivo B2B' })}</span>
              <span className="xs:hidden inline">{tr({ pt: 'Cotar', en: 'Quote', es: 'Cotizar', it: 'Preventivo' })}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900 transition-colors cursor-pointer"
              aria-label={tr({ pt: 'Abrir menu', en: 'Open menu', es: 'Abrir menú', it: 'Apri menu' })}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-stone-800 bg-stone-950 px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-stone-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-400 py-1"
              >
                {tr(link.long)}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <LanguageSwitcher isMobile={true} />

          <div className="pt-4 border-t border-stone-800 space-y-2">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneClean}`}
              className="block text-center py-2.5 px-4 rounded-xl bg-stone-900 text-stone-200 text-xs font-medium"
            >
              {tr({ pt: 'Telefone', en: 'Phone', es: 'Teléfono', it: 'Telefono' })}: {COMPANY_INFO.contact.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs"
            >
              {t.hero.requestQuote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

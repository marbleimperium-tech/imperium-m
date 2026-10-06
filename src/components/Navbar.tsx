import React, { useState } from 'react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/stones';
import { useI18n } from '../context/I18nContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/95 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark in display face with IM emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <img
              src="/favicon.svg"
              alt="Império Marble IM"
              className="w-10 h-10 rounded-full shrink-0 transition-transform group-hover:scale-105 shadow-md shadow-black"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-serif font-bold tracking-widest text-stone-100 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                IMPÉRIO MARBLE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 group-hover:text-amber-300 font-sans transition-colors">
                GUARAPARI · ESPÍRITO SANTO
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links in Guidoni editorial style */}
          <nav className="hidden xl:flex items-center gap-6 text-[11px] uppercase tracking-widest font-medium text-stone-300">
            <a href="#catalogo" className="hover:text-amber-400 transition-colors py-1">
              Catálogo
            </a>
            <a href="#projetos" className="hover:text-amber-400 transition-colors py-1">
              Inspiração & Obras
            </a>
            <a href="#bookmatch-studio" className="hover:text-amber-400 transition-colors py-1">
              Bookmatch Studio
            </a>
            <a href="#simulador" className="hover:text-amber-400 transition-colors py-1">
              Simulador
            </a>
            <a href="#sustentabilidade" className="hover:text-amber-400 transition-colors py-1">
              Jazidas & ESG
            </a>
            <a href="#calculadora-b2b" className="hover:text-amber-400 transition-colors py-1">
              Calculadora B2B
            </a>
            <a href="#exportacao" className="hover:text-amber-400 transition-colors py-1">
              Comex
            </a>
            <a href="#contato" className="hover:text-amber-400 transition-colors py-1">
              Contato
            </a>
          </nav>

          {/* Zone 3: Actions + Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
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
              className="px-4 py-2.5 text-xs font-bold text-stone-950 bg-amber-500 rounded-xl hover:bg-amber-400 transition-colors whitespace-nowrap cursor-pointer shadow-md shadow-amber-500/10"
            >
              Cotação B2B
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900 transition-colors cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-stone-800 bg-stone-950 px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-stone-300">
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Catálogo de Chapas
            </a>
            <a
              href="#projetos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Inspiração & Projetos de Referência
            </a>
            <a
              href="#bookmatch-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Bookmatch Studio & Paginação
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Simulador de Ambientes 3D
            </a>
            <a
              href="#sustentabilidade"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Jazidas Próprias & Compromisso ESG
            </a>
            <a
              href="#calculadora-b2b"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Calculadora de Contêiner & Carga B2B
            </a>
            <a
              href="#exportacao"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Logística Portuária & Exportação
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 py-1"
            >
              Contato & Localização em Guarapari
            </a>
          </nav>

          {/* Language Selector */}
          <LanguageSwitcher isMobile={true} />

          <div className="pt-4 border-t border-stone-800 space-y-2">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneClean}`}
              className="block text-center py-2.5 px-4 rounded-xl bg-stone-900 text-stone-200 text-xs font-medium"
            >
              Telefone: {COMPANY_INFO.contact.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs"
            >
              Solicitar Cotação de Lote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

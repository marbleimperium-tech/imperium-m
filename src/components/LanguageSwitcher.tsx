import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';
import { Language } from '../i18n/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export const LanguageSwitcher: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="pt-2 border-t border-stone-800">
        <div className="text-xs text-stone-400 font-medium mb-2 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-amber-500" />
          <span>Idioma / Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => setLanguage(item.code)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                language === item.code
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                  : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
              }`}
            >
              <span className="text-sm">{item.flag}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-900 border border-stone-800 transition-colors whitespace-nowrap cursor-pointer"
        aria-label="Selecionar idioma"
      >
        <span className="text-sm">{current.flag}</span>
        <span className="uppercase tracking-wider font-mono text-[11px]">{current.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-40 rounded-xl bg-stone-900 border border-stone-800 shadow-2xl py-1.5 z-50 animate-in fade-in duration-150">
          {LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLanguage(item.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                language === item.code
                  ? 'bg-amber-500/10 text-amber-300 font-semibold'
                  : 'text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-sm">{item.flag}</span>
                <span>{item.label}</span>
              </span>
              {language === item.code && <Check className="w-3.5 h-3.5 text-amber-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

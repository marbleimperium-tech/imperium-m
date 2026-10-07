import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, TRANSLATIONS } from '../i18n/translations';
import { localizeStone } from '../i18n/stoneTranslations';
import type { StoneItem } from '../types/stone';

export type LocalizedText = Record<Language, string>;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  /** Inline translation helper: tr({ pt, en, es, it }) */
  tr: (texts: LocalizedText) => string;
  /** Returns a stone with descriptive texts in the current language */
  ls: (stone: StoneItem) => StoneItem;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('imperio_lang');
    if (saved && (saved === 'pt' || saved === 'en' || saved === 'es' || saved === 'it')) {
      return saved;
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('imperio_lang', lang);
  };

  useEffect(() => {
    const htmlLang: Record<Language, string> = { pt: 'pt-BR', en: 'en', es: 'es', it: 'it' };
    document.documentElement.lang = htmlLang[language];
  }, [language]);

  const t = TRANSLATIONS[language];
  const tr = (texts: LocalizedText) => texts[language] ?? texts.pt;
  const ls = (stone: StoneItem) => localizeStone(stone, language);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, tr, ls }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

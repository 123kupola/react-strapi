import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import slTranslations from '../locales/sl/common.json';
import enTranslations from '../locales/en/common.json';
import hrTranslations from '../locales/hr/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'sl',
    fallbackLng: 'sl',
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
      sl: { translation: slTranslations },
      en: { translation: enTranslations },
      hr: { translation: hrTranslations },
    },
  });

export default i18n;
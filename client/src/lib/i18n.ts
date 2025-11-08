import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'sl',
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
      sl: { translation: require('../locales/sl/common.json') },
      en: { translation: require('../locales/en/common.json') },
    },
  });

export default i18n;
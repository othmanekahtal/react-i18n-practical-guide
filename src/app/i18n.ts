import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../locales/english/translation.json";
import deTranslation from "../locales/deutsch/translation.json";
import arTranslation from "../locales/arabic/translation.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          ...enTranslation,
        },
      },
      de: {
        translation: {
          ...deTranslation,
        },
      },
      ar: {
        translation: {
          ...arTranslation,
        },
      },
    },
  });

export default i18n;

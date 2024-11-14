import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
          welcome: "Hi",
        },
      },
      de: {
        translation: {
          welcome: "Hallo",
        },
      },
      ar: {
        translation: {
          welcome: "مرحبا",
        },
      },
    },
  });

export default i18n;

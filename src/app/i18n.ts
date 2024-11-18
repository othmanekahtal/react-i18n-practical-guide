import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import namespaces for each language
import enCommon from "../locales/en/common.json";
import enValidation from "../locales/en/validation.json";
import enAuth from "../locales/en/auth.json";

import deCommon from "../locales/de/common.json";
import deValidation from "../locales/de/validation.json";
import deAuth from "../locales/de/auth.json";

import arCommon from "../locales/ar/common.json";
import arValidation from "../locales/ar/validation.json";
import arAuth from "../locales/ar/auth.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "ar",
    fallbackLng: "en",

    // Define default namespace
    defaultNS: "common",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        common: enCommon,
        validation: enValidation,
        auth: enAuth,
      },
      de: {
        common: deCommon,
        validation: deValidation,
        auth: deAuth,
      },
      ar: {
        common: arCommon,
        validation: arValidation,
        auth: arAuth,
      },
    },
  });

export default i18n;

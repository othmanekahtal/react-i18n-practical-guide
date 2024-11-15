import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import namespaces for each language
import enCommon from "../locales/english/common.json";
import enValidation from "../locales/english/validation.json";
import enAuth from "../locales/english/auth.json";

import deCommon from "../locales/deutsch/common.json";
import deValidation from "../locales/deutsch/validation.json";
import deAuth from "../locales/deutsch/auth.json";

import arCommon from "../locales/arabic/common.json";
import arValidation from "../locales/arabic/validation.json";
import arAuth from "../locales/arabic/auth.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
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

import i18n, { FormatFunction } from "i18next";
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
      format: function (value, format, lng) {
        if (value instanceof Date) {
          switch (format) {
            case "short":
              return new Intl.DateTimeFormat(lng, {
                dateStyle: "short",
              }).format(value);
            case "long":
              return new Intl.DateTimeFormat(lng, {
                dateStyle: "long",
              }).format(value);
            case "time":
              return new Intl.DateTimeFormat(lng, {
                timeStyle: "short",
              }).format(value);
            case "full":
              return new Intl.DateTimeFormat(lng, {
                dateStyle: "full",
                timeStyle: "long",
              }).format(value);
          }
        }
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          switch (format) {
            // Currency, Decimal, Percent, Compact
            case "currency":
              return new Intl.NumberFormat(lng, {
                style: "currency",
                currency: lng === "ar" ? "SAR" : "USD",
              }).format(numValue);
            case "decimal":
              return new Intl.NumberFormat(lng, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(numValue);
            case "percent":
              return new Intl.NumberFormat(lng, {
                style: "percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(numValue);
            case "compact":
              return new Intl.NumberFormat(lng, {
                notation: "compact",
                compactDisplay: "short",
              }).format(numValue);

            // Units
            case "bytes":
              return new Intl.NumberFormat(lng, {
                style: "unit",
                unit: "byte",
                unitDisplay: "long",
              }).format(numValue);
            case "kg":
              return new Intl.NumberFormat(lng, {
                style: "unit",
                unit: "kilogram",
                unitDisplay: "long",
              }).format(numValue);
            case "meter":
              return new Intl.NumberFormat(lng, {
                style: "unit",
                unit: "meter",
                unitDisplay: "long",
              }).format(numValue);
            case "temperature":
              return new Intl.NumberFormat(lng, {
                style: "unit",
                unit: "celsius",
                unitDisplay: "long",
              }).format(numValue);
            default:
              return numValue.toString();
          }
        }

        return String(value);
      } as FormatFunction,

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

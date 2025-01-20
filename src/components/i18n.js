import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("../locales/en/translation.json"),
      },
      hi: {
        translation: require("../locales/hi/translation.json"),
      },
    },
    fallbackLng: "en", // Default language
    lng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

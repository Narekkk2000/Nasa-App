import i18n from "i18next";
import engTranslations from '../locales/english/translation.json'
import ruTranslation from '../locales/russian/translation.json'
import armTranslations from '../locales/armenian/translation.json'
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
        en: engTranslations,
        ru: ruTranslation,
        arm:armTranslations 
    }
});

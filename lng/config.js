import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend';
import en from "./en.json"
import fr from "./fr.json"

export const defaultNS = 'en';

i18next
  // .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next).init({
  lng: 'fr', // if you're using a language detector, do not define the lng option
  // debug: true,
  resources: {
    fr: {translation: fr},
    en: {translation: en}
  },
  // defaultNS,
});
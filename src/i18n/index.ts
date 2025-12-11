import { en } from './translations/en';
import { es } from './translations/es';
import { fr } from './translations/fr';

export const translations = {
  en,
  es,
  fr,
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof en;

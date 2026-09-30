import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { resources } from './resources';

const options = {
  lng: 'en',
  fallbackLng: 'ro',
  returnNull: false,
  ns: ['geograpi', 'common', 'menu'],
  defaultNS: 'common',
  fallbackNS: ['geograpi', 'common'],
  resources: resources,
  interpolation: { escapeValue: false },
  partialBundledLanguages: true,
};

export const initTranslations = async (): Promise<void> => {
  try {
    i18next.use(initReactI18next);
    await i18next.init(options);
  } catch {
    // swallow exception
  }
};

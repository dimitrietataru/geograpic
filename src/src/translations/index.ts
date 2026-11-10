import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

const options = {
  lng: 'en',
  fallbackLng: 'en',
  returnNull: false,
  ns: ['common', 'map', 'menu', 'table'],
  defaultNS: 'common',
  fallbackNS: ['common'],
  resources: resources,
  interpolation: { escapeValue: false },
  partialBundledLanguages: true,
};

const initTranslations = async (): Promise<void> => {
  try {
    i18next.use(initReactI18next);
    await i18next.init(options);
  } catch {
    // swallow
  }
};

export default initTranslations;

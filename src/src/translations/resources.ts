import en from './common/en';
import ro from './common/ro';
import enMenu from './menu/en';
import roMenu from './menu/ro';

export const resources = {
  en: {
    common: en,
    menu: enMenu,
  },
  ro: {
    common: ro,
    menu: roMenu,
  },
} as const;

import en from './common/en';
import ro from './common/ro';
import enMenu from './menu/en';
import roMenu from './menu/ro';
import enTable from './table/en';
import roTable from './table/ro';

export const resources = {
  en: {
    common: en,
    menu: enMenu,
    table: enTable,
  },
  ro: {
    common: ro,
    menu: roMenu,
    table: roTable,
  },
} as const;

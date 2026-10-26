import en from './common/en';
import ro from './common/ro';
import enMap from './map/en';
import roMap from './map/ro';
import enMenu from './menu/en';
import roMenu from './menu/ro';
import enTable from './table/en';
import roTable from './table/ro';

export const resources = {
  en: {
    common: en,
    map: enMap,
    menu: enMenu,
    table: enTable,
  },
  ro: {
    common: ro,
    map: roMap,
    menu: roMenu,
    table: roTable,
  },
} as const;

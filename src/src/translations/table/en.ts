const en = {
  table: {
    common: {
      actions: 'Actions',
    },
    headers: {
      id: 'Id',
      name: 'Name',
    },
    continents: {
      id: 'Id',
      name: 'Name',
    },
    countries: {
      id: 'Id',
      name: 'Name',
    },
  },
} as const;

type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown> ? `${K}.${NestedKeyOf<T[K]>}` : K;
}[keyof T & string];

export type TableTranslationKey = NestedKeyOf<typeof en.table>;

export default en;

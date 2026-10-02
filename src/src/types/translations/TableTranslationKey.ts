import en from '../../translations/table/en';

type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends Record<string, unknown> ? `${K}.${NestedKeyOf<T[K]>}` : K;
}[keyof T & string];

export type TableTranslationKey = NestedKeyOf<typeof en.table>;

export const SortDirection = {
  Ascending: 1,
  Descending: 2,
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

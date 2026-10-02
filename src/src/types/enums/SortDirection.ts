export const SortDirection = {
  Ascending: 1,
  Descending: 2,
} as const;

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

export const sortDirectionFromString = (value: string): SortDirection | undefined => {
  switch (value.toLocaleLowerCase()) {
    case '1':
      return SortDirection.Ascending;
    case '2':
      return SortDirection.Descending;
    default:
      return undefined;
  }
};

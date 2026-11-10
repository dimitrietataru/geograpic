import { type GridSortDirection } from '@mui/x-data-grid';
import { SortDirection } from '../../types/enums/SortDirection';

export const toAppSortDirection = (sortDirection: GridSortDirection): SortDirection | undefined => {
  switch (sortDirection) {
    case 'asc':
      return SortDirection.Ascending;
    case 'desc':
      return SortDirection.Descending;
    default:
      return undefined;
  }
};

export const toMuiSortDirection = (sortDirection: SortDirection | string | undefined): GridSortDirection => {
  switch (sortDirection) {
    case '1':
      return 'asc';
    case '2':
      return 'desc';
    case SortDirection.Ascending:
      return 'asc';
    case SortDirection.Descending:
      return 'desc';
    default:
      return undefined;
  }
};

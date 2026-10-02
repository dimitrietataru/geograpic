import { type GridSortDirection } from '@mui/x-data-grid';
import { SortDirection } from '../../../types/enums/SortDirection';

export const toAppSortDirection = (sortDirection: GridSortDirection): SortDirection | undefined => {
  console.log('mui-sort', sortDirection);

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
  console.log('app-sort', sortDirection);

  switch (sortDirection) {
    case '1':
      return 'asc' as GridSortDirection;
    case '2':
      return 'desc' as GridSortDirection;
    case SortDirection.Ascending:
      return 'asc' as GridSortDirection;
    case SortDirection.Descending:
      return 'desc' as GridSortDirection;
    default:
      return undefined;
  }
};

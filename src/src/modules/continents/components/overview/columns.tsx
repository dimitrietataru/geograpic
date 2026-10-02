import { Box } from '@mui/material';
import { type GridColDef, type GridValidRowModel } from '@mui/x-data-grid';
import type { TableTranslationKey } from '../../../../translations/table/en';
import type { IContinent } from '../../../../types/continent';

export type TranslatedGridColDef<T extends GridValidRowModel> = GridColDef<T> & { headerName: TableTranslationKey };

export const columns: TranslatedGridColDef<IContinent>[] = [
  {
    field: 'id',
    headerName: 'headers.id',
    sortable: true,
    filterable: false,
    hideable: false,
    flex: 1,
    minWidth: 120,
    maxWidth: 200,
    renderCell: data => <Box>{data.row.id}</Box>,
  },
  {
    field: 'name',
    headerName: 'headers.name',
    sortable: true,
    filterable: false,
    hideable: false,
    flex: 1,
    minWidth: 200,
    renderCell: data => <Box>{data.row.name}</Box>,
  },
  {
    field: 'actions',
    headerName: 'common.actions',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    disableReorder: true,
    hideable: false,
    resizable: false,
    width: 160,
    renderCell: () => <Box sx={{ display: 'flex', justifyContent: 'end' }}>..</Box>,
  },
];

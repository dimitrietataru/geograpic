import { Box } from '@mui/material';
import type { ICountry } from '../../../types/country';
import type { TranslatedGridColDef } from '../../../types/translations/TranslatedGridColDef';

export const getColumns = (continentsById: Map<number, string>): TranslatedGridColDef<ICountry>[] => [
  {
    field: 'id',
    headerName: 'header.id',
    sortable: true,
    filterable: false,
    hideable: true,
    flex: 1,
    minWidth: 120,
    maxWidth: 200,
    renderCell: data => <Box>{data.row.id}</Box>,
  },
  {
    field: 'name',
    headerName: 'header.name',
    sortable: true,
    filterable: true,
    hideable: false,
    flex: 1,
    minWidth: 200,
    renderCell: data => <Box>{data.row.name}</Box>,
  },
  {
    field: 'continentId',
    headerName: 'header.continent',
    sortable: true,
    filterable: false,
    hideable: false,
    flex: 1,
    minWidth: 200,
    renderCell: data => <Box>{continentsById.get(data.row.continentId) ?? '-'}</Box>,
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

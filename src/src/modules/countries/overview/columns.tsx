import { Box, Typography } from '@mui/material';
import type { ICountry } from '../../../types/country';
import type { TranslatedGridColDef } from '../../../types/translations/TranslatedGridColDef';
import ColumnArea from './column-area';
import ColumnCode from './column-code';
import ColumnPopulation from './column-population';

export const getColumns = (continentsById: Map<number, string>): TranslatedGridColDef<ICountry>[] => [
  {
    field: 'id',
    headerName: 'header.id',
    sortable: true,
    filterable: false,
    hideable: true,
    minWidth: 120,
    maxWidth: 200,
    renderCell: data => <Typography variant="tableText1">{data.row.id}</Typography>,
  },
  {
    field: 'name',
    headerName: 'header.name',
    sortable: true,
    filterable: true,
    hideable: false,
    flex: 1,
    minWidth: 500,
    renderCell: data => <Typography variant="tableText1">{`${data.row.name} (${data.row.nameOfficial})`}</Typography>,
  },
  {
    field: 'code',
    headerName: 'header.code',
    sortable: true,
    filterable: true,
    hideable: true,
    minWidth: 120,
    maxWidth: 200,
    renderCell: data => <ColumnCode codeA2={data.row.code} codeA3={data.row.codeA3} />,
  },
  {
    field: 'area',
    headerName: 'header.country.area',
    sortable: true,
    filterable: false,
    hideable: true,
    minWidth: 160,
    maxWidth: 200,
    renderCell: data => <ColumnArea area={data.row.area} />,
  },
  {
    field: 'population',
    headerName: 'header.country.population',
    sortable: true,
    filterable: false,
    hideable: true,
    minWidth: 160,
    maxWidth: 200,
    renderCell: data => <ColumnPopulation population={data.row.population} />,
  },
  {
    field: 'continentId',
    headerName: 'header.continent',
    sortable: true,
    filterable: false,
    hideable: false,
    flex: 1,
    minWidth: 200,
    renderCell: data => <Typography variant="tableText1">{continentsById.get(data.row.continentId) ?? '-'}</Typography>,
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

import { Box } from '@mui/material';
import type { Continent } from '../../../types/continent';
import type { Country } from '../../../types/country';
import type { TranslatedGridColDef } from '../../../types/translations/TranslatedGridColDef';
import ColumnArea from './column-area';
import ColumnCode from './column-code';
import ColumnContinent from './column-continent';
import ColumnId from './column-id';
import ColumnName from './column-name';
import ColumnPopulation from './column-population';

export const getColumns = (continentsById: Map<number, Continent>): TranslatedGridColDef<Country>[] => [
  {
    field: 'id',
    headerName: 'header.id',
    sortable: true,
    filterable: false,
    hideable: true,
    disableColumnMenu: true,
    minWidth: 100,
    maxWidth: 160,
    renderCell: data => <ColumnId id={data.row.id} />,
  },
  {
    field: 'name',
    headerName: 'header.name',
    sortable: true,
    filterable: true,
    hideable: false,
    flex: 1,
    minWidth: 200,
    renderCell: data => <ColumnName name={data.row.name} nameOfficial={data.row.nameOfficial} />,
  },
  {
    field: 'code',
    headerName: 'header.code',
    sortable: true,
    filterable: true,
    hideable: true,
    disableColumnMenu: true,
    minWidth: 120,
    maxWidth: 200,
    renderCell: data => <ColumnCode codeA2={data.row.code} codeA3={data.row.codeA3} />,
  },
  {
    field: 'area',
    headerName: 'header.countries.area',
    sortable: true,
    filterable: false,
    hideable: true,
    disableColumnMenu: true,
    minWidth: 160,
    maxWidth: 200,
    renderCell: data => <ColumnArea area={data.row.area} />,
  },
  {
    field: 'population',
    headerName: 'header.countries.population',
    sortable: true,
    filterable: false,
    hideable: true,
    disableColumnMenu: true,
    minWidth: 160,
    maxWidth: 200,
    renderCell: data => <ColumnPopulation population={data.row.population} />,
  },
  {
    field: 'continentId',
    headerName: 'header.countries.continent',
    sortable: true,
    filterable: false,
    hideable: false,
    disableColumnMenu: true,
    flex: 1,
    minWidth: 100,
    maxWidth: 160,
    renderCell: data => <ColumnContinent continent={continentsById.get(data.row.continentId)} />,
  },
  {
    field: 'actions',
    headerName: 'common.actions',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    hideable: false,
    resizable: false,
    disableColumnMenu: true,
    disableReorder: true,
    width: 160,
    renderCell: () => <Box sx={{ display: 'flex', justifyContent: 'end' }}>..</Box>,
  },
];

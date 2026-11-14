import { Box } from '@mui/material';
import type { Continent } from '../../../types/continent';
import type { TranslatedGridColDef } from '../../../types/translations/TranslatedGridColDef';
import ColumnCode from './column-code';
import ColumnCoordinates from './column-coordinates';
import ColumnGoogleId from './column-google-id';
import ColumnId from './column-id';
import ColumnName from './column-name';

export const columns: TranslatedGridColDef<Continent>[] = [
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
    renderCell: data => <ColumnName name={data.row.name} />,
  },
  {
    field: 'code',
    headerName: 'header.code',
    sortable: true,
    filterable: true,
    hideable: false,
    disableColumnMenu: true,
    minWidth: 120,
    maxWidth: 200,
    renderCell: data => <ColumnCode code={data.row.code} />,
  },
  {
    field: 'googleId',
    headerName: 'header.googleId',
    sortable: true,
    filterable: false,
    hideable: true,
    flex: 1,
    minWidth: 200,
    renderCell: data => <ColumnGoogleId googleId={data.row.googleId} />,
  },
  {
    field: 'coordinates',
    headerName: 'header.coordinates',
    sortable: false,
    filterable: false,
    hideable: true,
    flex: 1,
    minWidth: 180,
    maxWidth: 200,
    renderCell: data => <ColumnCoordinates lat={data.row.centerLat} lng={data.row.centerLng} />,
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

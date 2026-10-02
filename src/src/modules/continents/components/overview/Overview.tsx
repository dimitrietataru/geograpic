import { Box, CircularProgress, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import type { GridPaginationModel, GridSortModel } from '@mui/x-data-grid/models';
import toUpper from 'lodash/toUpper';
import { useContinentFilters } from '../../../../hooks/filters/useContinentFilters';
import {
  toAppSortDirection,
  toMuiSortDirection,
} from '../../../../infrastructure/mappers/x-data-grid/grid-sort-direction-mapper';
import {
  getContinentCountSelector,
  getContinentLoadingSelector,
  getContinentsSelector,
} from '../../../../infrastructure/store/selectors/continent-selector';
import { useAppSelector } from '../../../../infrastructure/store/store';
import { useTableTranslations } from '../../../../translations/useAppTranslations';
import type { IContinent } from '../../../../types/continent';
import { columns } from './columns';

function Overview() {
  const [t] = useTableTranslations();
  const { filters, setFilters } = useContinentFilters();
  console.log('component-filters', filters);

  const loading = useAppSelector(getContinentLoadingSelector);
  const count = useAppSelector(getContinentCountSelector);
  const entities = useAppSelector(getContinentsSelector);

  const onSortChange = (model: GridSortModel) => {
    if (!model.length) {
      setFilters({ ...filters, sortBy: undefined, sortDirection: undefined });
      return;
    }

    const { field, sort } = model[0];
    if (!field || !sort) {
      setFilters({ ...filters, sortBy: undefined, sortDirection: undefined });
      return;
    }

    setFilters({ ...filters, sortBy: field, sortDirection: toAppSortDirection(sort) });
  };

  const onPaginationChange = (model: GridPaginationModel) => {
    setFilters({ ...filters, page: model.page + 1, size: model.pageSize });
  };

  const tableColumns = columns.map(column => ({
    ...column,
    headerName: column?.headerName ? toUpper(t(`table.${column.headerName}`) ?? '') : '',
  }));

  return (
    <Box sx={{ height: '100%', width: '100%', minWidth: 0, minHeight: 0 }}>
      {loading && (
        <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress color="primary" />
        </Box>
      )}

      {!loading && (
        <Paper sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            sx={{ fontSize: 12, paddingLeft: '8px', paddingRight: '8px', height: '100%', width: '100%' }}
            initialState={{ pagination: { paginationModel: { page: 1, pageSize: 10 } } }}
            getRowId={(data: IContinent) => data?.id}
            columns={tableColumns}
            rows={entities}
            rowCount={count}
            checkboxSelection={false}
            disableRowSelectionOnClick
            rowHeight={60}
            columnHeaderHeight={48}
            sortingMode="server"
            sortingOrder={['asc', 'desc', null]}
            sortModel={
              filters.sortBy && filters.sortDirection
                ? [{ field: filters.sortBy, sort: toMuiSortDirection(filters.sortDirection) }]
                : []
            }
            onSortModelChange={onSortChange}
            paginationMode="server"
            paginationModel={{ page: (filters.page ?? 1) - 1, pageSize: filters.size ?? 10 }}
            slotProps={{ pagination: { showFirstButton: true, showLastButton: true } }}
            pageSizeOptions={[2, 3, 5, 10, 15, 20, 50, 100]}
            onPaginationModelChange={onPaginationChange}
            autoPageSize={false}
          />
        </Paper>
      )}
    </Box>
  );
}

export default Overview;

import { Box } from '@mui/material';
import type { GridPaginationModel, GridSortModel } from '@mui/x-data-grid/models';
import toUpper from 'lodash/toUpper';
import AppDataGrid from '../../../components/app-data-grid';
import { useContinentFilters } from '../../../hooks/filters/useContinentFilters';
import { toAppSortDirection, toMuiSortDirection } from '../../../mappers/x-data-grid/grid-sort-direction-mapper';
import { useAppSelector } from '../../../store';
import {
  getContinentCountSelector,
  getContinentLoadingSelector,
  getContinentsSelector,
} from '../../../store/selectors/continent-selector';
import { useTableTranslations } from '../../../translations/useAppTranslations';
import type { IContinent } from '../../../types/continent';
import { columns } from './columns';

function Overview() {
  const [t] = useTableTranslations();
  const { filters, setFilters } = useContinentFilters();

  const loading = useAppSelector(getContinentLoadingSelector);
  const count = useAppSelector(getContinentCountSelector);
  const continents = useAppSelector(getContinentsSelector);

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
    <Box sx={{ height: '100%', width: '100%', minHeight: 0, minWidth: 0 }}>
      <AppDataGrid
        getRowId={(data: IContinent) => data?.id}
        columns={tableColumns}
        rows={continents}
        rowCount={count}
        sortModel={
          filters.sortBy && filters.sortDirection
            ? [{ field: filters.sortBy, sort: toMuiSortDirection(filters.sortDirection) }]
            : []
        }
        paginationModel={
          filters.page && filters.size
            ? { page: (filters.page ?? 1) - 1, pageSize: filters.size ?? 10 }
            : { page: 0, pageSize: 10 }
        }
        onSortModelChange={onSortChange}
        onPaginationModelChange={onPaginationChange}
        pageSizeOptions={[2, 5, 10]}
        loading={loading}
        rowHeight={60}
      />
    </Box>
  );
}

export default Overview;

import { Box } from '@mui/material';
import type { GridPaginationModel, GridSortModel } from '@mui/x-data-grid/models';
import toUpper from 'lodash/toUpper';
import { useMemo } from 'react';
import AppDataGrid from '../../../components/app-data-grid';
import { useCountryFilters } from '../../../hooks/filters/useCountryFilters';
import { toAppSortDirection, toMuiSortDirection } from '../../../mappers/x-data-grid/grid-sort-direction-mapper';
import { useAppSelector } from '../../../store';
import { getContinentsSelector } from '../../../store/selectors/continent-selector';
import {
  getCountriesSelector,
  getCountryCountSelector,
  getCountryLoadingSelector,
} from '../../../store/selectors/country-selector';
import { useTableTranslations } from '../../../translations/useAppTranslations';
import type { ICountry } from '../../../types/country';
import { getColumns } from './columns';

function Overview() {
  const [t] = useTableTranslations();
  const { filters, setFilters } = useCountryFilters();

  const loading = useAppSelector(getCountryLoadingSelector);
  const count = useAppSelector(getCountryCountSelector);
  const countries = useAppSelector(getCountriesSelector);

  const continents = useAppSelector(getContinentsSelector);
  const continentsById = useMemo(() => new Map(continents.map(c => [c.id, c.name])), [continents]);

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
    if (model.pageSize === -1) {
      setFilters({ ...filters, page: 1, size: count });
      return;
    }

    setFilters({ ...filters, page: model.page + 1, size: model.pageSize });
  };

  const sortModel: GridSortModel =
    filters.sortBy && filters.sortDirection
      ? [{ field: filters.sortBy, sort: toMuiSortDirection(filters.sortDirection) }]
      : [];

  const paginationModel: GridPaginationModel =
    !filters.page || !filters.size
      ? { page: 0, pageSize: 100 }
      : filters.size > 100
        ? { page: 0, pageSize: -1 }
        : { page: filters.page - 1, pageSize: filters.size };

  const tableColumns = getColumns(continentsById).map(column => ({
    ...column,
    headerName: column?.headerName ? toUpper(t(`table.${column.headerName}`) ?? '') : '',
  }));

  return (
    <Box sx={{ height: '100%', width: '100%', minHeight: 0, minWidth: 0 }}>
      <AppDataGrid
        getRowId={(data: ICountry) => data?.id}
        columns={tableColumns}
        rows={countries}
        rowCount={count}
        sortModel={sortModel}
        onSortModelChange={onSortChange}
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationChange}
        pageSizeOptions={[10, 25, 50, 100, { value: -1, label: t('table.footer.all') }]}
        loading={loading}
        rowHeight={48}
      />
    </Box>
  );
}

export default Overview;

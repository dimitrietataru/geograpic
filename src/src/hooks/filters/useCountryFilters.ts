import isString from 'lodash/isString';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { ICountryQueryRequest } from '../../types/country';
import { sortDirectionFromString } from '../../types/enums/SortDirection';

const DEFAULT_PAGE = '1';
const DEFAULT_SIZE = '100';

export function useCountryFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: ICountryQueryRequest = useMemo((): ICountryQueryRequest => {
    const page = toNumber(searchParams.get('page') ?? DEFAULT_PAGE);
    const size = toNumber(searchParams.get('size') ?? DEFAULT_SIZE);
    const sortBy = toString(searchParams.get('sortBy'));
    const sortDirection = sortDirectionFromString(toString(searchParams.get('sortDirection')));

    const continents = (searchParams.get('continent') ?? '')
      .split(',')
      .filter(Boolean)
      .map(toNumber)
      .filter(id => id > 0);

    return {
      page,
      size,
      sortBy,
      sortDirection,
      filter: {
        name: undefined,
        continentIds: continents,
      },
    };
  }, [searchParams]);

  const hasActiveFilters = useMemo(() => {
    return filters.filter && isString(filters.filter?.name);
  }, [filters]);

  const setFilters = useCallback(
    (updates: ICountryQueryRequest, { replace = false, reset = false } = {}) => {
      setSearchParams(
        prev => {
          const next = new URLSearchParams(prev);

          if (reset) {
            next.set('page', DEFAULT_PAGE);
            next.set('size', DEFAULT_SIZE);

            return next;
          }

          next.set('page', toString(updates.page));
          next.set('size', toString(updates.size));

          if (updates.sortBy) {
            next.set('sortBy', toString(updates.sortBy));
          } else {
            next.delete('sortBy');
            next.delete('sortDirection');
          }

          if (updates.sortDirection) {
            next.set('sortDirection', toString(updates.sortDirection));
          } else {
            next.delete('sortDirection');
            next.delete('sortBy');
          }

          return next;
        },
        { replace },
      );
    },
    [setSearchParams],
  );

  const setContinents = useCallback(
    (updates: number[], { replace = false } = {}) => {
      setSearchParams(
        prev => {
          const next = new URLSearchParams(prev);
          next.set('page', DEFAULT_PAGE);

          if (updates.length === 0) {
            next.delete('continent');
            return next;
          }

          next.set('continent', updates.join(','));
          return next;
        },
        { replace },
      );
    },
    [setSearchParams],
  );

  return {
    filters,
    hasActiveFilters,
    setFilters,
    setContinents,
  };
}

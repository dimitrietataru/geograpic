import isString from 'lodash/isString';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { IContinentQueryRequest } from '../../types/continent';
import { sortDirectionFromString } from '../../types/enums/SortDirection';

export function useContinentFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: IContinentQueryRequest = useMemo((): IContinentQueryRequest => {
    const page = toNumber(searchParams.get('page') ?? '1');
    const size = toNumber(searchParams.get('size') ?? '10');
    const sortBy = toString(searchParams.get('sortBy'));
    const sortDirection = sortDirectionFromString(toString(searchParams.get('sortDirection')));

    return {
      page,
      size,
      sortBy,
      sortDirection,
      filter: {
        name: undefined,
      },
    };
  }, [searchParams]);

  const hasActiveFilters = useMemo(() => {
    return filters.filter && isString(filters.filter?.name);
  }, [filters]);

  const setFilters = useCallback(
    (updates: IContinentQueryRequest, { replace = false, reset = false } = {}) => {
      setSearchParams(
        prev => {
          const next = new URLSearchParams(prev);

          if (reset) {
            next.set('page', '1');
            next.set('size', '10');

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

  return {
    filters,
    hasActiveFilters,
    setFilters,
  };
}

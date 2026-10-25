import toString from 'lodash/toString';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { IExploreQuery, MapType } from '../../types/explore';

const DEFAULT_MAP_TYPE = 'World';

export function useExploreFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: IExploreQuery = useMemo((): IExploreQuery => {
    const mapType = (searchParams.get('mapType') ?? 'World') as MapType;
    const selectedContinent = toString(searchParams.get('continent'));
    const selectedCountry = toString(searchParams.get('country'));

    return {
      mapType,
      selectedContinent,
      selectedCountry,
    };
  }, [searchParams]);

  const setFilters = useCallback(
    (updates: IExploreQuery, { replace = false, reset = false } = {}) => {
      setSearchParams(
        prev => {
          const next = new URLSearchParams(prev);

          if (reset) {
            next.set('mapType', DEFAULT_MAP_TYPE);
            next.delete('continent');
            next.delete('country');

            return next;
          }

          next.set('mapType', updates.mapType);
          if (updates.selectedContinent) {
            next.set('continent', toString(updates.selectedContinent));
          } else {
            next.delete('continent');
          }

          if (updates.selectedCountry) {
            next.set('country', toString(updates.selectedCountry));
          } else {
            next.delete('country');
          }

          return next;
        },
        { replace },
      );
    },
    [setSearchParams],
  );

  return { filters, setFilters };
}

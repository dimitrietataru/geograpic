import toString from 'lodash/toString';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import type { ExploreQuery } from '../../types/explore';
import type { MapStyle } from '../../types/geo/MapStyle';
import type { MapType } from '../../types/geo/MapType';

const DEFAULT_MAP_STYLE = 'Default';
const DEFAULT_MAP_TYPE = 'World';

export function useExploreFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: ExploreQuery = useMemo((): ExploreQuery => {
    const mapStyle = (searchParams.get('mapStyle') ?? 'Default') as MapStyle;
    const mapType = (searchParams.get('mapType') ?? 'World') as MapType;
    const selectedContinent = toString(searchParams.get('continent'));
    const selectedCountry = toString(searchParams.get('country'));
    const debug = searchParams.get('debug') === 'true';

    return {
      mapStyle,
      mapType,
      selectedContinent,
      selectedCountry,
      debug,
    };
  }, [searchParams]);

  const setFilters = useCallback(
    (updates: ExploreQuery, { replace = false, reset = false } = {}) => {
      setSearchParams(
        prev => {
          const next = new URLSearchParams(prev);

          if (reset) {
            next.set('mapStyle', DEFAULT_MAP_STYLE);
            next.delete('mapType');
            next.delete('continent');
            next.delete('country');

            return next;
          }

          next.set('mapStyle', updates.mapStyle);

          if (updates.mapType) {
            next.set('mapType', toString(updates.mapType));
          } else {
            if (updates.mapStyle === 'Administrative') {
              next.set('mapType', DEFAULT_MAP_TYPE);
            } else {
              next.delete('mapType');
            }
          }

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

          if (updates.debug !== undefined) {
            if (updates.debug) {
              next.set('debug', 'true');
            } else {
              next.delete('debug');
            }
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

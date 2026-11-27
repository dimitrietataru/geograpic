import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useExploreFilters } from '../../../../../hooks/filters/useExploreFilters';
import { getContinentStrokeColor } from '../../../../../mappers/geo/map-colors-mapper';
import { useAppSelector } from '../../../../../store';
import { getContinentByCodeSelector } from '../../../../../store/selectors/continent-selector';
import { getCountryByCodeSelector } from '../../../../../store/selectors/country-selector';
import { useAppTheme } from '../../../../../theme/hooks/useAppTheme';

function LayerCountry() {
  const map = useMap();
  const { filters } = useExploreFilters();
  const { theme } = useAppTheme();

  const continent = useAppSelector(getContinentByCodeSelector(filters.selectedContinent));
  const country = useAppSelector(getCountryByCodeSelector(filters.selectedCountry));

  useEffect(() => {
    if (!map || !continent || !country) {
      return;
    }

    const featureLayer = map.getFeatureLayer('COUNTRY');
    featureLayer.style = (options: google.maps.FeatureStyleFunctionOptions) => {
      const place = options.feature as google.maps.PlaceFeature;
      if (place.placeId !== country.googleId) {
        return null;
      }

      return {
        fillOpacity: 0,
        strokeColor: getContinentStrokeColor(theme, continent.code),
        strokeWeight: 2,
      };
    };

    return () => {
      featureLayer.style = null;
    };
  }, [map, theme, continent, country]);

  return null;
}

export default LayerCountry;

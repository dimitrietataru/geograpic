import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import ContinentMapPin from '../../../../../components/app-map-pins/continent-map-pin';
import { MapZoom } from '../../../../../constants/geo/map-zoom';
import { useExploreFilters } from '../../../../../hooks/filters/useExploreFilters';
import {
  getContinentFillColor,
  getContinentFillOpacity,
  getContinentStrokeColor,
  getContinentStrokeWeight,
} from '../../../../../mappers/geo/map-colors-mapper';
import { useAppSelector } from '../../../../../store';
import { getContinentsSelector } from '../../../../../store/selectors/continent-selector';
import { getContinentsByCountryPlaceIdSelector } from '../../../../../store/selectors/country-selector';
import { useAppTheme } from '../../../../../theme/hooks/useAppTheme';
import type { Continent } from '../../../../../types/continent';

function LayerWorld() {
  const map = useMap();
  const { setFilters } = useExploreFilters();
  const { theme } = useAppTheme();

  const continents = useAppSelector(getContinentsSelector);
  const continentsByPlaceId = useAppSelector(getContinentsByCountryPlaceIdSelector);

  useEffect(() => {
    if (!map) {
      return;
    }

    const featureLayer = map.getFeatureLayer('COUNTRY');
    const styleFeatureLayer = () => {
      const zoom = map.getZoom() ?? MapZoom.default;
      const fillOpacity = getContinentFillOpacity(zoom);
      const strokeWeight = getContinentStrokeWeight(zoom);

      featureLayer.style = (options: google.maps.FeatureStyleFunctionOptions) => {
        const place = options.feature as google.maps.PlaceFeature;
        const continent = continentsByPlaceId.get(place.placeId);
        if (!continent) {
          return null;
        }

        return {
          fillColor: getContinentFillColor(theme, continent.code),
          fillOpacity: fillOpacity,
          strokeColor: getContinentStrokeColor(theme, continent.code),
          strokeWeight: strokeWeight,
        };
      };
    };

    styleFeatureLayer();

    const onZoomChange = map.addListener('zoom_changed', styleFeatureLayer);
    const onCountryClick = featureLayer.addListener('click', (event: google.maps.FeatureMouseEvent) => {
      const place = event.features[0] as google.maps.PlaceFeature;
      const continent = continentsByPlaceId.get(place.placeId);
      if (!continent) {
        return;
      }

      setFilters({
        mapStyle: 'Administrative',
        mapType: 'Continent',
        selectedContinent: continent.code,
      });
    });

    return () => {
      featureLayer.style = null;
      onZoomChange.remove();
      onCountryClick.remove();
    };
  }, [map, theme, setFilters, continentsByPlaceId]);

  const onContinentClick = (continent: Continent) => {
    setFilters({
      mapStyle: 'Administrative',
      mapType: 'Continent',
      selectedContinent: continent.code,
    });
  };

  return (
    <>
      {continents.map(continent => (
        <ContinentMapPin
          key={continent.googleId}
          id={continent.id}
          code={continent.code}
          name={continent.name}
          placeId={continent.googleId}
          position={{ lat: continent.centerLat, lng: continent.centerLng }}
          onClick={() => onContinentClick(continent)}
        />
      ))}
    </>
  );
}

export default LayerWorld;

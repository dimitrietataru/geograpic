import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import useWorldGeoJson from '../../../../hooks/geo/useWorldGeoJson';
import {
  getContinentFillColor,
  getContinentFillOpacity,
  getContinentStrokeColor,
  getContinentStrokeWeight,
} from '../../../../mappers/geo/map-colors-mapper';
import { useAppTheme } from '../../../../theme/hooks/useAppTheme';

function LayerWorld() {
  const map = useMap();
  const layer = useWorldGeoJson();
  const { setFilters } = useExploreFilters();
  const { theme } = useAppTheme();

  useEffect(() => {
    if (!map || !layer) {
      return;
    }

    const features = map.data.addGeoJson(layer);
    const stylingFunction = (feature: google.maps.Data.Feature) => {
      const continentCode = String(feature.getProperty('code'));
      const fillColor = getContinentFillColor(theme, continentCode);
      const strokeColor = getContinentStrokeColor(theme, continentCode);

      const zoom = map.getZoom() ?? 3;
      const fillOpacity = getContinentFillOpacity(zoom);
      const strokeWeight = getContinentStrokeWeight(zoom);

      return {
        fillColor: fillColor,
        fillOpacity: fillOpacity,
        strokeColor: strokeColor,
        strokeWeight: strokeWeight,
      };
    };

    map.data.setStyle(stylingFunction);

    const onClick = map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
      const continentCode = String(event.feature.getProperty('code'));
      setFilters({ mapType: 'Continent', selectedContinent: continentCode });
    });

    const onZoomChange = map.addListener('zoom_changed', () => {
      map.data.setStyle(stylingFunction);
    });

    // const featureLayer = map.getFeatureLayer('COUNTRY');
    // featureLayer.style = (options: google.maps.FeatureStyleFunctionOptions) => {
    //   const place = options.feature as google.maps.PlaceFeature;
    //   console.log('PLACE', place.placeId);

    //   return {
    //     fillColor: red[500],
    //     fillOpacity: 0.6,
    //     strokeColor: red[900],
    //     strokeWeight: 0.5,
    //   };
    // };

    return () => {
      features.forEach(f => map.data.remove(f));
      onClick.remove();
      onZoomChange.remove();
    };
  }, [map, layer, theme, setFilters]);

  return null;
}

export default LayerWorld;

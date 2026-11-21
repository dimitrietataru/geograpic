import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { WORLD_BOUNDS } from '../../../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../../../constants/geo/map-centers';
import { MapZoom } from '../../../../constants/geo/map-zoom';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import { toBoundary } from '../../../../mappers/geo/boundaries-mapper';
import { toCenter } from '../../../../mappers/geo/center-mapper';

function MapCameraControl() {
  const map = useMap();
  const { filters } = useExploreFilters();

  useEffect(() => {
    if (!map) {
      return;
    }

    if (filters.mapStyle === 'Default') {
      map.setOptions({
        minZoom: MapZoom.min,
        maxZoom: MapZoom.max,
        restriction: { latLngBounds: WORLD_BOUNDS, strictBounds: true },
      });
    }

    if (filters.mapStyle === 'Administrative' && filters.mapType === 'World') {
      map.setOptions({
        minZoom: MapZoom.administrative.min,
        maxZoom: MapZoom.administrative.max,
        restriction: { latLngBounds: WORLD_BOUNDS, strictBounds: true },
      });

      map.panTo(WORLD_CENTER);
      map.setZoom(MapZoom.administrative.default);
    }

    if (filters.mapStyle === 'Administrative' && filters.mapType === 'Continent' && filters.selectedContinent) {
      const boundary = toBoundary(filters.selectedContinent);
      const center = toCenter(filters.selectedContinent);

      map.panTo(center);
      map.fitBounds(boundary, 32);
    }
  }, [map, filters.mapStyle, filters.mapType, filters.selectedContinent]);

  return null;
}

export default MapCameraControl;

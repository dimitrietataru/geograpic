import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { WORLD_BOUNDS } from '../../../../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../../../../constants/geo/map-centers';
import { useExploreFilters } from '../../../../../hooks/filters/useExploreFilters';
import { toBoundary } from '../../../../../mappers/geo/boundaries-mapper';
import { toCenter } from '../../../../../mappers/geo/center-mapper';

function MapCameraController() {
  const map = useMap();
  const { filters } = useExploreFilters();

  useEffect(() => {
    if (!map) {
      return;
    }

    if (filters.mapType === 'World') {
      map.setOptions({
        minZoom: 3,
        maxZoom: 10,
        restriction: { latLngBounds: WORLD_BOUNDS, strictBounds: true },
      });

      map.panTo(WORLD_CENTER);
      map.setZoom(3);
    }

    if (filters.mapType === 'Continent' && filters.selectedContinent) {
      const boundary = toBoundary(filters.selectedContinent);
      const center = toCenter(filters.selectedContinent);

      map.panTo(center);
      map.fitBounds(boundary, 32);
    }
  }, [map, filters.mapType, filters.selectedContinent]);

  return null;
}

export default MapCameraController;

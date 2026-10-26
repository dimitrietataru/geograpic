import { EU_BOUNDS, WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import type { MapBounds } from '../../types/geo/MapBounds';

export const toBoundary = (continentCode: string): MapBounds => {
  console.log('Continent', continentCode);
  if (continentCode === 'EU') {
    return EU_BOUNDS;
  }

  return WORLD_BOUNDS;
};

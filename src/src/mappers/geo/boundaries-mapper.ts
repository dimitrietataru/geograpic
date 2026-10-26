import { EU_BOUNDS, WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import type { TMapBounds } from '../../types/geo/TMapBounds';

export const toBoundary = (continentCode: string): TMapBounds => {
  console.log('Continent', continentCode);
  if (continentCode === 'EU') {
    return EU_BOUNDS;
  }

  return WORLD_BOUNDS;
};

import { CONTINENT_BOUNDS, WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import type { MapBounds } from '../../types/geo/MapBounds';

export const toBoundary = (continentCode: string): MapBounds => {
  const boundary = CONTINENT_BOUNDS[continentCode];

  return boundary ?? WORLD_BOUNDS;
};

import type { MapBounds } from '../../types/geo/MapBounds';

export const WORLD_BOUNDS: MapBounds = { north: 85, south: -85, west: -180, east: 180 };

export const CONTINENT_BOUNDS: Record<string, MapBounds> = {
  AF: { north: 37.5, south: -35, west: -25.5, east: 58 },
  AS: { north: 55.5, south: -11, west: 25.5, east: 146 },
  EU: { north: 70, south: 35, west: -25, east: 50 },
  OC: { north: 15, south: -47, west: 113, east: -150 },
  NA: { north: 72, south: 7, west: -141, east: -52 },
  SA: { north: 12.5, south: -56.5, west: -82, east: -34.5 },
};

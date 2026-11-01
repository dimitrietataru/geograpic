import type { MapBounds } from '../../types/geo/MapBounds';

export const WORLD_BOUNDS: MapBounds = { north: 85, south: -85, west: -180, east: 180 };

export const CONTINENT_BOUNDS: Record<string, MapBounds> = {
  AF: { north: 35, south: -35, west: -20, east: 50 },
  AS: { north: 55, south: -15.0, west: 40, east: 145 },
  EU: { north: 70, south: 35, west: -30, east: 50 },
  OC: { north: 0, south: -50, west: 110, east: 180 },
  NA: { north: 55, south: 10, west: -155, east: 50 },
  SA: { north: 5, south: -55, west: -85, east: -35 },
};

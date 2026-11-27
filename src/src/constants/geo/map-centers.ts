import type { MapPoint } from '../../types/geo/MapPoint';

export const WORLD_CENTER: MapPoint = { lat: 22.5, lng: 8 };

export const CONTINENT_CENTERS: Record<string, MapPoint> = {
  AF: { lat: 1.2568, lng: 16.2239 },
  AS: { lat: 22.2172, lng: 85.7415 },
  EU: { lat: 52.9932, lng: 12.7336 },
  OC: { lat: -16.0722, lng: 161.4712 },
  NA: { lat: 34.6058, lng: -96.8106 },
  SA: { lat: -22.0396, lng: -58.2642 },
};

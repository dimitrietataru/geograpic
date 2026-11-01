import type { MapPoint } from '../../types/geo/MapPoint';

export const WORLD_CENTER: MapPoint = { lat: 22.5, lng: 0 };

export const CONTINENT_CENTERS: Record<string, MapPoint> = {
  AF: { lat: 54, lng: 25 },
  AS: { lat: 35, lng: 90 },
  EU: { lat: 55, lng: 17.5 },
  OC: { lat: -25, lng: 135 },
  NA: { lat: 35, lng: -120 },
  SA: { lat: -15, lng: -60 },
};

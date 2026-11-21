import type { MapPoint } from '../../../types/geo/MapPoint';

export interface ContinentMapPinPros {
  id: number;
  code: string;
  name: string;
  placeId: string;
  position: MapPoint;
  onClick: () => void;
}

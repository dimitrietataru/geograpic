import type { MapPoint } from '../../../types/geo/MapPoint';

export interface CountryMapPinProps {
  id: number;
  code: string;
  name: string;

  continentCode: string;
  priority: number;

  placeId: string;
  position: MapPoint;
  onClick: () => void;
}

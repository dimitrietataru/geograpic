import { EUROPE_CENTER, WORLD_CENTER } from '../../constants/geo/map-centers';
import type { MapPoint } from '../../types/geo/MapPoint';

export const toCenter = (continentCode: string): MapPoint => {
  if (continentCode === 'EU') {
    return EUROPE_CENTER;
  }

  return WORLD_CENTER;
};

import { EUROPE_CENTER, WORLD_CENTER } from '../../constants/geo/map-centers';
import type { TMapPoint } from '../../types/geo/TMapPoint';

export const toCenter = (continentCode: string): TMapPoint => {
  if (continentCode === 'EU') {
    return EUROPE_CENTER;
  }

  return WORLD_CENTER;
};

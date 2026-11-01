import { CONTINENT_CENTERS, WORLD_CENTER } from '../../constants/geo/map-centers';
import type { MapPoint } from '../../types/geo/MapPoint';

export const toCenter = (continentCode: string): MapPoint => {
  const center = CONTINENT_CENTERS[continentCode];

  return center ?? WORLD_CENTER;
};

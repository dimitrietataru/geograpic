import type { MapBounds } from '../../../../../types/geo/MapBounds';
import type { MapPoint } from '../../../../../types/geo/MapPoint';
import type { MapType } from '../../../../../types/geo/MapType';

export interface MapCameraControllerProps {
  mapType: MapType;
  boundaries?: MapBounds;
  center?: MapPoint;
}

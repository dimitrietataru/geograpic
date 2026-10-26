import type { TMapType } from '../../../../../types/explore';
import type { TMapBounds } from '../../../../../types/geo/TMapBounds';
import type { TMapPoint } from '../../../../../types/geo/TMapPoint';

export interface IMapCameraControllerProps {
  mapType: TMapType;
  boundaries?: TMapBounds;
  center?: TMapPoint;
}

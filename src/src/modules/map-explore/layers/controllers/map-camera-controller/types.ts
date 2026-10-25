import type { MapType } from '../../../../../types/explore';

export interface IMapCameraControllerProps {
  mapType: MapType;
  boundaries?: google.maps.LatLngBoundsLiteral;
  center?: google.maps.LatLngLiteral;
}

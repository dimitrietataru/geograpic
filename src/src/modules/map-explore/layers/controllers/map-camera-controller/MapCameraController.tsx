import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { WORLD_BOUNDS } from '../../../../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../../../../constants/geo/map-centers';
import type { IMapCameraControllerProps } from './types';

function MapCameraController(props: IMapCameraControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (!map || props.mapType !== 'World') {
      return;
    }

    map.setOptions({
      minZoom: 3,
      maxZoom: 10,
      restriction: { latLngBounds: WORLD_BOUNDS, strictBounds: true },
    });

    map.moveCamera({ center: WORLD_CENTER, zoom: 3 });
  }, [map, props.mapType]);

  return null;
}

export default MapCameraController;

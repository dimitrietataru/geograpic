import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { WORLD_BOUNDS } from '../../../../../mappers/geo/boundaries-mapper';
import { WORLD_CENTER } from '../../../../../mappers/geo/center-mapper';
import type { IMapCameraControllerProps } from './types';

function MapCameraController(props: IMapCameraControllerProps) {
  const map = useMap();

  useEffect(() => {
    console.log('ENTERED CONTROLLER', props.mapType);

    console.log('Controller effect', {
      mapType: props.mapType,
      hasMap: !!map,
      zoom: map?.getZoom(),
      center: map?.getCenter()?.toJSON(),
    });

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

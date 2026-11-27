import { Box } from '@mui/material';
import { MapControl, useMap } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import type { MapCursorPositionControlProps } from './types';

function MapCursorPositionControl({ position }: MapCursorPositionControlProps) {
  const map = useMap();
  const [cursor, setCursor] = useState<google.maps.LatLngLiteral>();

  useEffect(() => {
    if (!map) {
      return;
    }

    const onMouseMove = map.addListener('mousemove', (e: google.maps.MapMouseEvent) => setCursor(e.latLng?.toJSON()));
    const onFeatureMouseMove = map
      .getFeatureLayer('COUNTRY')
      .addListener('mousemove', (e: google.maps.FeatureMouseEvent) => setCursor(e.latLng?.toJSON()));
    const onMouseOut = map.addListener('mouseout', () => setCursor(undefined));
    map.setOptions({ draggableCursor: 'default' });

    return () => {
      onMouseMove.remove();
      onFeatureMouseMove.remove();
      onMouseOut.remove();
      map.setOptions({ draggableCursor: null });
    };
  }, [map]);

  if (!cursor) {
    return null;
  }

  return (
    <MapControl position={position}>
      <Box
        sx={{
          m: 1,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          boxShadow: 1,
          bgcolor: 'background.paper',
          typography: 'body2',
        }}
      >
        {cursor.lat.toFixed(6)}, {cursor.lng.toFixed(6)}
      </Box>
    </MapControl>
  );
}

export default MapCursorPositionControl;

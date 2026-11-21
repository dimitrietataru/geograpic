import { Box } from '@mui/material';
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { ControlPosition } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import AppMap from '../../components/app-mapp-cloud';
import { getGoogleMapsMapId, getGoogleMapsMapIdAdmin } from '../../config';
import { WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../constants/geo/map-centers';
import { useExploreFilters } from '../../hooks/filters/useExploreFilters';
import { useAppDispatch } from '../../store';
import { fetchAllContinents } from '../../store/thunks/continent-thunks';
import { fetchAllCountries } from '../../store/thunks/country-thunks';
import MapBreadcrumbs from '../map-explore/map-breadcrumbs';
import MapCameraControl from './controls/map-camera-control';
import MapStyleControl from './controls/map-style-control';
import AdministrativeLayer from './layers/administrative-layer';

const ZOOM = 3;
const MIN_ZOOM = 3;
const MAX_ZOOM = 12;

function MapExplore() {
  const { filters } = useExploreFilters();
  const dispatch = useAppDispatch();
  const mapId = filters.mapStyle === 'Administrative' ? getGoogleMapsMapIdAdmin() : getGoogleMapsMapId();

  useEffect(() => {
    void dispatch(fetchAllContinents());
    void dispatch(fetchAllCountries());
  }, [dispatch]);

  const [zoom, setZoom] = useState<number>(ZOOM);

  const onZoomChange = (event: MapCameraChangedEvent): void => {
    console.log('ZOOM: ', event.detail.zoom);
    setZoom(event.detail.zoom);
  };

  return (
    <Box
      sx={[
        { height: '100%', width: '100%', minHeight: 0, minWidth: 0 },
        { display: 'flex', flexDirection: 'column', gap: 0.5 },
      ]}
    >
      <MapBreadcrumbs />
      <AppMap
        mapId={mapId}
        defaultCenter={WORLD_CENTER}
        restriction={{ latLngBounds: WORLD_BOUNDS, strictBounds: true }}
        defaultZoom={zoom}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        isFractionalZoomEnabled={false}
        onZoomChanged={onZoomChange}
      >
        <MapStyleControl position={ControlPosition.LEFT_BOTTOM} />
        <MapCameraControl />
        {filters.mapStyle === 'Administrative' && <AdministrativeLayer />}
      </AppMap>
    </Box>
  );
}

export default MapExplore;

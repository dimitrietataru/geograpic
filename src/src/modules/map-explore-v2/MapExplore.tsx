import { Box } from '@mui/material';
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import AppMap from '../../components/app-mapp-cloud';
import { WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../constants/geo/map-centers';
import { useExploreFilters } from '../../hooks/filters/useExploreFilters';
import { useAppDispatch } from '../../store';
import { fetchAllContinents } from '../../store/thunks/continent-thunks';
import { fetchAllCountries } from '../../store/thunks/country-thunks';
import MapBreadcrumbs from '../map-explore/map-breadcrumbs';
import LayerWorld from './layers';

const ZOOM = 3;
const MIN_ZOOM = 3;
const MAX_ZOOM = 12;

function MapExplore() {
  const { filters } = useExploreFilters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllContinents());
    dispatch(fetchAllCountries());
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
        defaultCenter={WORLD_CENTER}
        restriction={{ latLngBounds: WORLD_BOUNDS, strictBounds: true }}
        defaultZoom={zoom}
        minZoom={MIN_ZOOM}
        maxZoom={MAX_ZOOM}
        isFractionalZoomEnabled={false}
        onZoomChanged={onZoomChange}
      >
        {filters.mapType === 'World' && <LayerWorld />}
        {/* <MapCameraController />
        
        {filters.mapType === 'Continent' && filters.selectedContinent === 'EU' && <LayerEurope />} */}
      </AppMap>
    </Box>
  );
}

export default MapExplore;

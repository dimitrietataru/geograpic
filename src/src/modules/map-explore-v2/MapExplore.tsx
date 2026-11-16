import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { ControlPosition, MapControl } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import AppMap from '../../components/app-mapp-cloud';
import { getGoogleMapsMapId, getGoogleMapsMapIdAdmin } from '../../config';
import { WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../constants/geo/map-centers';
import { useExploreFilters } from '../../hooks/filters/useExploreFilters';
import { useAppDispatch } from '../../store';
import { fetchAllContinents } from '../../store/thunks/continent-thunks';
import { fetchAllCountries } from '../../store/thunks/country-thunks';
import { useMapTranslations } from '../../translations/useAppTranslations';
import type { MapStyle } from '../../types/geo/MapStyle';
import MapBreadcrumbs from '../map-explore/map-breadcrumbs';
import LayerWorld from './layers';

const ZOOM = 3;
const MIN_ZOOM = 3;
const MAX_ZOOM = 12;

function MapStyleControl() {
  const [t] = useMapTranslations();
  const { filters, setFilters } = useExploreFilters();

  const onChange = (_event: React.MouseEvent<HTMLElement>, mapStyle: MapStyle | null): void => {
    // Clicking the selected button again gives null: keep one style always selected.
    if (mapStyle === null) {
      return;
    }

    setFilters({ mapType: 'World', mapStyle });
  };

  return (
    <MapControl position={ControlPosition.LEFT_BOTTOM}>
      <ToggleButtonGroup
        value={filters.mapStyle}
        exclusive
        onChange={onChange}
        size="small"
        sx={{ m: 1.25, bgcolor: 'background.paper', boxShadow: 2 }}
      >
        <Tooltip title={t('map.style.default')} placement="top">
          <ToggleButton value="Default" aria-label={t('map.style.default')}>
            <GoogleIcon />
          </ToggleButton>
        </Tooltip>
        <Tooltip title={t('map.style.administrative')} placement="top">
          <ToggleButton value="Administrative" aria-label={t('map.style.administrative')}>
            <FlagOutlinedIcon />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </MapControl>
  );
}

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
        <MapStyleControl />
        {filters.mapStyle === 'Administrative' && filters.mapType === 'World' && zoom <= 5 && <LayerWorld />}
        {/* <MapCameraController />
        
        {filters.mapType === 'Continent' && filters.selectedContinent === 'EU' && <LayerEurope />} */}
      </AppMap>
    </Box>
  );
}

export default MapExplore;

import { Box } from '@mui/material';
import { type MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import AppMap from '../../components/app-map';
import { WORLD_BOUNDS } from '../../constants/geo/map-bounds';
import { WORLD_CENTER } from '../../constants/geo/map-centers';
import { useExploreFilters } from '../../hooks/filters/useExploreFilters';
import { useAppDispatch } from '../../store';
import { fetchAllContinents } from '../../store/thunks/continent-thunks';
import { fetchAllCountries } from '../../store/thunks/country-thunks';
import MapCameraController from './layers/controllers/map-camera-controller';
import LayerEurope from './layers/layer-europe';
import LayerWorld from './layers/layer-world';
import MapBreadcrumbs from './map-breadcrumbs';

const ZOOM = 3;
const MIN_ZOOM = 3;
const MAX_ZOOM = 10;

function MapExplore() {
  const { filters } = useExploreFilters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllContinents());
    dispatch(fetchAllCountries());
  }, [dispatch]);

  const [zoom, setZoom] = useState<number>(ZOOM);

  const [showAdministrativeCountryLabels, setShowAdministrativeCountryLabels] = useState<boolean>(true);
  const [showAdministrativeProvinceLabels, setShowAdministrativeProvinceLabels] = useState<boolean>(false);
  const [showAdministrativeLocalityLabels, setShowAdministrativeLocalityLabels] = useState<boolean>(false);
  const [showAdministrativeNeighborhoodLabels, setShowAdministrativeNeighborhoodLabels] = useState<boolean>(false);
  const [showAdministrativeLandParcelLabels, setShowAdministrativeLandParcelLabels] = useState<boolean>(false);

  const [showAdministrativeCountryGeometry, setShowAdministrativeCountryGeometry] = useState<boolean>(true);
  const [showAdministrativeProvinceGeometry, setShowAdministrativeProvinceGeometry] = useState<boolean>(false);
  const [showAdministrativeLocalityGeometry, setShowAdministrativeLocalityGeometry] = useState<boolean>(false);
  const [showAdministrativeNeighborhoodGeometry, setShowAdministrativeNeighborhoodGeometry] = useState<boolean>(false);
  const [showAdministrativeLandParcelGeometry, setShowAdministrativeLandParcelGeometry] = useState<boolean>(false);

  const [showRoadArterialLabels, setShowRoadArterialLabels] = useState<boolean>(false);
  const [showRoadHighwayLabels, setShowRoadHighwayLabels] = useState<boolean>(false);
  const [showRoadHighwayControlledLabels, setShowRoadHighwayControlledLabels] = useState<boolean>(false);
  const [showRoadLocalLabels, setShowRoadLocalLabels] = useState<boolean>(false);

  const [showRoadArterialGeometry, setShowRoadArterialGeometry] = useState<boolean>(false);
  const [showRoadHighwayGeometry, setShowRoadHighwayGeometry] = useState<boolean>(false);
  const [showRoadHighwayControlledGeometry, setShowRoadHighwayControlledGeometry] = useState<boolean>(false);
  const [showRoadLocalGeometry, setShowRoadLocalGeometry] = useState<boolean>(false);

  const onZoomChange = (event: MapCameraChangedEvent): void => {
    setZoom(event.detail.zoom);

    setShowAdministrativeCountryLabels(event.detail.zoom >= 3);
    setShowAdministrativeProvinceLabels(event.detail.zoom >= 5);
    setShowAdministrativeLocalityLabels(event.detail.zoom >= 6);
    setShowAdministrativeNeighborhoodLabels(event.detail.zoom >= 7);
    setShowAdministrativeLandParcelLabels(event.detail.zoom >= 8);

    setShowAdministrativeCountryGeometry(event.detail.zoom >= 3);
    setShowAdministrativeProvinceGeometry(event.detail.zoom >= 5);
    setShowAdministrativeLocalityGeometry(event.detail.zoom >= 6);
    setShowAdministrativeNeighborhoodGeometry(event.detail.zoom >= 7);
    setShowAdministrativeLandParcelGeometry(event.detail.zoom >= 8);

    setShowRoadArterialLabels(event.detail.zoom >= 7);
    setShowRoadHighwayLabels(event.detail.zoom >= 8);
    setShowRoadHighwayControlledLabels(event.detail.zoom >= 8);
    setShowRoadLocalLabels(event.detail.zoom >= 9);

    setShowRoadArterialGeometry(event.detail.zoom >= 7);
    setShowRoadHighwayGeometry(event.detail.zoom >= 8);
    setShowRoadHighwayControlledGeometry(event.detail.zoom >= 8);
    setShowRoadLocalGeometry(event.detail.zoom >= 9);
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
        onZoomChanged={onZoomChange}
        showAdministrativeCountryLabels={showAdministrativeCountryLabels}
        showAdministrativeProvinceLabels={showAdministrativeProvinceLabels}
        showAdministrativeLocalityLabels={showAdministrativeLocalityLabels}
        showAdministrativeNeighborhoodLabels={showAdministrativeNeighborhoodLabels}
        showAdministrativeLandParcelLabels={showAdministrativeLandParcelLabels}
        showAdministrativeCountryGeometry={showAdministrativeCountryGeometry}
        showAdministrativeProvinceGeometry={showAdministrativeProvinceGeometry}
        showAdministrativeLocalityGeometry={showAdministrativeLocalityGeometry}
        showAdministrativeNeighborhoodGeometry={showAdministrativeNeighborhoodGeometry}
        showAdministrativeLandParcelGeometry={showAdministrativeLandParcelGeometry}
        showRoadArterialLabels={showRoadArterialLabels}
        showRoadHighwayLabels={showRoadHighwayLabels}
        showRoadHighwayControlledLabels={showRoadHighwayControlledLabels}
        showRoadLocalLabels={showRoadLocalLabels}
        showRoadArterialGeometry={showRoadArterialGeometry}
        showRoadHighwayGeometry={showRoadHighwayGeometry}
        showRoadHighwayControlledGeometry={showRoadHighwayControlledGeometry}
        showRoadLocalGeometry={showRoadLocalGeometry}
      >
        <MapCameraController mapType={filters.mapType} />
        {filters.mapType === 'World' && <LayerWorld />}
        {filters.mapType === 'Continent' && filters.selectedContinent === 'EU' && <LayerEurope />}
      </AppMap>
    </Box>
  );
}

export default MapExplore;

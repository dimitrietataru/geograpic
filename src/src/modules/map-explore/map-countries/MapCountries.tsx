import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import AppMap from '../../../components/app-map';

const WORLD_BOUNDS = { north: 85, south: -85, west: -180, east: 180 };
const MIN_ZOOM = 3;
const MAX_ZOOM = 10;

function MapCountries() {
  const [zoom, setZoom] = useState<number>(3);
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
    console.log('zoom', event.detail.zoom);
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
    <AppMap
      defaultCenter={{ lat: 22.5, lng: 0 }}
      defaultZoom={zoom}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      restriction={{ latLngBounds: WORLD_BOUNDS, strictBounds: true }}
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
      onZoomChanged={onZoomChange}
    />
  );
}

export default MapCountries;

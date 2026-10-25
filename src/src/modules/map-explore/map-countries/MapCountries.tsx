import { type MapCameraChangedEvent } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import AppMap from '../../../components/app-map';
import { useExploreFilters } from '../../../hooks/filters/useExploreFilters';
import LayerEurope from '../layers/layer-europe';
import type { ILayerEuropeClickProps } from '../layers/layer-europe/types';
import LayerWorld from '../layers/layer-world';
import type { ILayerWorldClickProps } from '../layers/layer-world/types';
import { filter } from 'lodash';
import MapCameraController from '../layers/controllers/map-camera-controller';

const WORLD_BOUNDS: google.maps.LatLngBoundsLiteral = { north: 85, south: -85, west: -180, east: 180 };
const WORLD_CENTER: google.maps.LatLngLiteral = { lat: 22.5, lng: 0 };
const ZOOM = 3;
const MIN_ZOOM = 3;
const MAX_ZOOM = 10;

// interface StyledProperties {
//   fill?: string;
//   'fill-opacity'?: number;
//   stroke?: string;
//   'stroke-width'?: number;
//   [key: string]: unknown;
// }

// type StyledGeoJson = FeatureCollection<Geometry, StyledProperties>;

// function useWorldGeoJson() {
//   const [data, setData] = useState<StyledGeoJson | null>(null);

//   useEffect(() => {
//     let cancelled = false;

//     fetch('/map/europe.geojson')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Failed to load GeoJSON: ${response.status}.`);
//         }

//         return response.json();
//       })
//       .then((json: StyledGeoJson) => {
//         if (!cancelled) {
//           setData(json);
//         }
//       })
//       .catch((error: unknown) => {
//         console.log('Failed to load world GeoJSON.', error);
//       });

//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   return data;
// }

// function GeoJsonLayer() {
//   const map = useMap();
//   const data = useWorldGeoJson();

//   const [hoveredCountry, setHoveredCountry] = useState<{
//     name: string;
//     lat: number;
//     lng: number;
//   } | null>(null);

//   useEffect(() => {
//     if (!map || !data) {
//       return;
//     }

//     // const addFeatureListener = map.data.addListener('addfeature', (event: google.maps.Data.AddFeatureEvent) => {
//     //   const feature = event.feature;

//     //   const countryName = feature.getProperty('name');
//     //   console.log('country name', countryName);

//     //   if (!countryName) return;

//     //   const bounds = new google.maps.LatLngBounds();

//     //   feature.getGeometry()?.forEachLatLng(latLng => {
//     //     bounds.extend(latLng);
//     //   });

//     //   const center = bounds.getCenter();

//     //   return new google.maps.Marker({
//     //     position: center,
//     //     map,
//     //     title: String(countryName),
//     //     label: {
//     //       text: String(countryName),
//     //       color: '#222222',
//     //       fontSize: '11px',
//     //       fontWeight: 'bold',
//     //     },
//     //     icon: {
//     //       path: google.maps.SymbolPath.CIRCLE,
//     //       scale: 0, // Hide the marker icon; show only the text
//     //     },
//     //     clickable: false,
//     //   });
//     // });

//     // Add the GeoJSON features.
//     const features = map.data.addGeoJson(data);

//     map.data.setStyle(feature => {
//       const fill = feature.getProperty('fill');
//       const fillOpacity = feature.getProperty('fill-opacity');
//       // const stroke = feature.getProperty('stroke');
//       // const strokeWidth = feature.getProperty('stroke-width');

//       return {
//         fillColor: typeof fill === 'string' ? fill : '#3388ff',
//         fillOpacity: typeof fillOpacity === 'number' ? fillOpacity : 0.1,
//         strokeWeight: 0.8,
//         strokeOpacity: 0.8,

//         // strokeColor: typeof stroke === 'string' ? stroke : '#333333',
//         // strokeWeight: typeof strokeWidth === 'number' ? strokeWidth : 1,
//         // strokeOpacity: 1,
//       };
//     });

//     const mouseoverListener = map.data.addListener('mouseover', (event: google.maps.Data.MouseEvent) => {
//       console.log('feature', event.feature);
//       const name = event.feature.getProperty('name') ?? 'Unknown country';

//       setHoveredCountry({
//         name: String(name),
//         lat: event.latLng?.lat() ?? 0,
//         lng: event.latLng?.lng() ?? 0,
//       });
//     });

//     const mouseoutListener = map.data.addListener('mouseout', () => {
//       setHoveredCountry(null);
//     });

//     return () => {
//       features.forEach(feature => map.data.remove(feature));
//       mouseoverListener.remove();
//       mouseoutListener.remove();
//       // addFeatureListener.remove();
//     };
//   }, [map, data]);

//   return hoveredCountry ? (
//     <InfoWindow
//       position={{
//         lat: hoveredCountry.lat,
//         lng: hoveredCountry.lng,
//       }}
//       pixelOffset={[0, -5]}
//       headerDisabled
//     >
//       <div style={{ fontSize: 14, fontWeight: 600, color: 'black' }}>{hoveredCountry.name}</div>
//     </InfoWindow>
//   ) : null;
// }

function MapCountries() {
  const { filters, setFilters } = useExploreFilters();

  const [zoom, setZoom] = useState<number>(ZOOM);
  const [minZoom, setMinZoom] = useState<number>(MIN_ZOOM);
  const [maxZoom, setMaxZoom] = useState<number>(MAX_ZOOM);
  const [boundaries, setBoundaries] = useState<google.maps.LatLngBoundsLiteral>(WORLD_BOUNDS);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>(WORLD_CENTER);

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
    <AppMap
      defaultCenter={center}
      restriction={{ latLngBounds: boundaries, strictBounds: true }}
      defaultZoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
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
      {filters.mapType === 'World' && (
        <LayerWorld
          onClick={(cp: ILayerWorldClickProps) => {
            setFilters({ mapType: 'Continent', selectedContinent: cp.continentCode });
            setBoundaries(cp.boundaries);
            setCenter(cp.center);
          }}
        />
      )}
      {filters.mapType === 'Continent' && filters.selectedContinent === 'EU' && (
        <LayerEurope
          onClick={(cp: ILayerEuropeClickProps) => {
            setFilters({ mapType: 'Country', selectedContinent: cp.continentCode, selectedCountry: cp.countryCode });
          }}
        />
      )}
    </AppMap>
  );
}

export default MapCountries;

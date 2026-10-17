import { Box } from '@mui/material';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { getGoogleMapsApiKey } from '../../config';
import {
  showAdministrativeCountryGeometry,
  showAdministrativeGeometry,
  showAdministrativeLandParcelGeometry,
  showAdministrativeLocalityGeometry,
  showAdministrativeNeighborhoodGeometry,
  showAdministrativeProvinceGeometry,
  showRoadArterialGeometry,
  showRoadHighwayControlledGeometry,
  showRoadHighwayGeometry,
  showRoadLocalGeometry,
} from './map-styles/geometry';
import {
  showAdministrativeCountryLabels,
  showAdministrativeLabels,
  showAdministrativeLandParcelLabels,
  showAdministrativeLocalityLabels,
  showAdministrativeNeighborhoodLabels,
  showAdministrativeProvinceLabels,
  showRoadArterialLabels,
  showRoadHighwayControlledLabels,
  showRoadHighwayLabels,
  showRoadLabels,
  showRoadLocalLabels,
} from './map-styles/labels';
import type { AppMapProps } from './types';

function AppMap(props: AppMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const styles = [
    props.showAdministrativeLabels === undefined
      ? undefined
      : showAdministrativeLabels(props.showAdministrativeLabels!),
    props.showAdministrativeCountryLabels === undefined || props.showAdministrativeLabels !== undefined
      ? undefined
      : showAdministrativeCountryLabels(props.showAdministrativeCountryLabels!),
    props.showAdministrativeProvinceLabels === undefined || props.showAdministrativeLabels !== undefined
      ? undefined
      : showAdministrativeProvinceLabels(props.showAdministrativeProvinceLabels!),
    props.showAdministrativeLocalityLabels === undefined || props.showAdministrativeLabels !== undefined
      ? undefined
      : showAdministrativeLocalityLabels(props.showAdministrativeLocalityLabels!),
    props.showAdministrativeNeighborhoodLabels === undefined || props.showAdministrativeLabels !== undefined
      ? undefined
      : showAdministrativeNeighborhoodLabels(props.showAdministrativeNeighborhoodLabels!),
    props.showAdministrativeLandParcelLabels === undefined || props.showAdministrativeLabels !== undefined
      ? undefined
      : showAdministrativeLandParcelLabels(props.showAdministrativeLandParcelLabels!),
    props.showAdministrativeGeometry === undefined
      ? undefined
      : showAdministrativeGeometry(props.showAdministrativeGeometry!),
    props.showAdministrativeCountryGeometry === undefined || props.showAdministrativeGeometry !== undefined
      ? undefined
      : showAdministrativeCountryGeometry(props.showAdministrativeCountryGeometry!),
    props.showAdministrativeProvinceGeometry === undefined || props.showAdministrativeGeometry !== undefined
      ? undefined
      : showAdministrativeProvinceGeometry(props.showAdministrativeProvinceGeometry!),
    props.showAdministrativeLocalityGeometry === undefined || props.showAdministrativeGeometry !== undefined
      ? undefined
      : showAdministrativeLocalityGeometry(props.showAdministrativeLocalityGeometry!),
    props.showAdministrativeNeighborhoodGeometry === undefined || props.showAdministrativeGeometry !== undefined
      ? undefined
      : showAdministrativeNeighborhoodGeometry(props.showAdministrativeNeighborhoodGeometry!),
    props.showAdministrativeLandParcelGeometry === undefined || props.showAdministrativeGeometry !== undefined
      ? undefined
      : showAdministrativeLandParcelGeometry(props.showAdministrativeLandParcelGeometry!),
    props.showRoadLabels === undefined ? undefined : showRoadLabels(props.showRoadLabels!),
    props.showRoadArterialLabels === undefined || props.showRoadLabels !== undefined
      ? undefined
      : showRoadArterialLabels(props.showRoadArterialLabels!),
    props.showRoadHighwayLabels === undefined || props.showRoadLabels !== undefined
      ? undefined
      : showRoadHighwayLabels(props.showRoadHighwayLabels!),
    props.showRoadHighwayControlledLabels === undefined || props.showRoadLabels !== undefined
      ? undefined
      : showRoadHighwayControlledLabels(props.showRoadHighwayControlledLabels!),
    props.showRoadLocalLabels === undefined || props.showRoadLabels !== undefined
      ? undefined
      : showRoadLocalLabels(props.showRoadLocalLabels!),
    props.showRoadGeometry === undefined ? undefined : showRoadLabels(props.showRoadGeometry!),
    props.showRoadArterialGeometry === undefined || props.showRoadGeometry !== undefined
      ? undefined
      : showRoadArterialGeometry(props.showRoadArterialGeometry!),
    props.showRoadHighwayGeometry === undefined || props.showRoadGeometry !== undefined
      ? undefined
      : showRoadHighwayGeometry(props.showRoadHighwayGeometry!),
    props.showRoadHighwayControlledGeometry === undefined || props.showRoadGeometry !== undefined
      ? undefined
      : showRoadHighwayControlledGeometry(props.showRoadHighwayControlledGeometry!),
    props.showRoadLocalGeometry === undefined || props.showRoadGeometry !== undefined
      ? undefined
      : showRoadLocalGeometry(props.showRoadLocalGeometry!),
  ].filter(s => s !== undefined);

  return (
    <>
      {apiKey !== undefined && apiKey.length !== 0 && (
        <APIProvider apiKey={apiKey!}>
          <Map
            style={{ width: '100%', height: '100%', flex: 1 }}
            gestureHandling="greedy"
            disableDefaultUI
            styles={[...styles, ...(props.styles ?? [])]}
            {...props}
          />
        </APIProvider>
      )}
      {(apiKey === undefined || apiKey.length === 0) && (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>Map is not available or API key is missing..</Box>
      )}
    </>
  );
}

export default AppMap;

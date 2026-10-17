import type { MapProps } from '@vis.gl/react-google-maps';

export interface AppMapProps extends MapProps {
  showAdministrativeLabels?: boolean;
  showAdministrativeCountryLabels?: boolean;
  showAdministrativeProvinceLabels?: boolean;
  showAdministrativeLocalityLabels?: boolean;
  showAdministrativeNeighborhoodLabels?: boolean;
  showAdministrativeLandParcelLabels?: boolean;

  showAdministrativeGeometry?: boolean;
  showAdministrativeCountryGeometry?: boolean;
  showAdministrativeProvinceGeometry?: boolean;
  showAdministrativeLocalityGeometry?: boolean;
  showAdministrativeNeighborhoodGeometry?: boolean;
  showAdministrativeLandParcelGeometry?: boolean;

  showRoadLabels?: boolean;
  showRoadArterialLabels?: boolean;
  showRoadHighwayLabels?: boolean;
  showRoadHighwayControlledLabels?: boolean;
  showRoadLocalLabels?: boolean;

  showRoadGeometry?: boolean;
  showRoadArterialGeometry?: boolean;
  showRoadHighwayGeometry?: boolean;
  showRoadHighwayControlledGeometry?: boolean;
  showRoadLocalGeometry?: boolean;
}

import { toggleVisibility } from './toggle';

export const showAdministrativeLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative', 'labels', value);

export const showAdministrativeCountryLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.country', 'labels', value);

export const showAdministrativeProvinceLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.province', 'labels', value);

export const showAdministrativeLocalityLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.locality', 'labels', value);

export const showAdministrativeNeighborhoodLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.neighborhood', 'labels', value);

export const showAdministrativeLandParcelLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.land_parcel', 'labels', value);

export const showRoadLabels = (value: boolean): google.maps.MapTypeStyle => toggleVisibility('road', 'labels', value);

export const showRoadArterialLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.arterial', 'labels', value);

export const showRoadHighwayLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.highway', 'labels', value);

export const showRoadHighwayControlledLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.highway.controlled_access', 'labels', value);

export const showRoadLocalLabels = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.local', 'labels', value);

import { toggleVisibility } from './toggle';

export const showAdministrativeGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative', 'geometry', value);

export const showAdministrativeCountryGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.country', 'geometry', value);

export const showAdministrativeProvinceGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.province', 'geometry', value);

export const showAdministrativeLocalityGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.locality', 'geometry', value);

export const showAdministrativeNeighborhoodGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.neighborhood', 'geometry', value);

export const showAdministrativeLandParcelGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('administrative.land_parcel', 'geometry', value);

export const showRoadGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road', 'geometry', value);

export const showRoadArterialGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.arterial', 'geometry', value);

export const showRoadHighwayGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.highway', 'geometry', value);

export const showRoadHighwayControlledGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.highway.controlled_access', 'geometry', value);

export const showRoadLocalGeometry = (value: boolean): google.maps.MapTypeStyle =>
  toggleVisibility('road.local', 'geometry', value);

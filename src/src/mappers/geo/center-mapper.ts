export const WORLD_CENTER: google.maps.LatLngLiteral = { lat: 22.5, lng: 0 };
export const EUROPE_CENTER: google.maps.LatLngLiteral = { lat: 55, lng: 17.5 };

export const toCenter = (continentCode: string): google.maps.LatLngLiteral => {
  if (continentCode === 'EU') {
    return EUROPE_CENTER;
  }

  return WORLD_CENTER;
};

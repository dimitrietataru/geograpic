export const WORLD_BOUNDS: google.maps.LatLngBoundsLiteral = { north: 85, south: -85, west: -180, east: 180 };
export const EU_BOUNDS: google.maps.LatLngBoundsLiteral = { north: 85, south: 25, west: -180, east: 180 };

export const toBoundary = (continentCode: string): google.maps.LatLngBoundsLiteral => {
  console.log('Continent', continentCode);
  if (continentCode === 'EU') {
    return EU_BOUNDS;
  }

  return WORLD_BOUNDS;
};

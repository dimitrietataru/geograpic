export const getCoordinateLabels = (lat: number, lng: number): { lat: string; lng: string } => {
  return {
    lat: `${Math.abs(lat)}° ${lat < 0 ? 'S' : 'N'}`,
    lng: `${Math.abs(lng)}° ${lng < 0 ? 'W' : 'E'}`,
  };
};

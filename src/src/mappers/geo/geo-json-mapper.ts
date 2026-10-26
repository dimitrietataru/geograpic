export const toContinentPath = (code: string): string => {
  if (code === 'EU') {
    return '/map/europe.geojson';
  }

  return '';
};

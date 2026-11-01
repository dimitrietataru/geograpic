import type { Theme } from '@mui/material/styles';

export const getContinentFillColor = (theme: Theme, continentCode: string): string => {
  switch (continentCode) {
    case 'AF':
      return theme.palette.map.continent.af.fillColor;
    case 'AS':
      return theme.palette.map.continent.as.fillColor;
    case 'EU':
      return theme.palette.map.continent.eu.fillColor;
    case 'OC':
      return theme.palette.map.continent.oc.fillColor;
    case 'NA':
      return theme.palette.map.continent.na.fillColor;
    case 'SA':
      return theme.palette.map.continent.sa.fillColor;
    default:
      return '';
  }
};

export const getContinentStrokeColor = (theme: Theme, continentCode: string): string => {
  switch (continentCode) {
    case 'AF':
      return theme.palette.map.continent.af.strokeColor;
    case 'AS':
      return theme.palette.map.continent.as.strokeColor;
    case 'EU':
      return theme.palette.map.continent.eu.strokeColor;
    case 'OC':
      return theme.palette.map.continent.oc.strokeColor;
    case 'NA':
      return theme.palette.map.continent.na.strokeColor;
    case 'SA':
      return theme.palette.map.continent.sa.strokeColor;
    default:
      return '';
  }
};

export const getContinentFillOpacity = (zoom: number): number => {
  return zoom <= 3 ? 0.8 : zoom <= 4 ? 0.2 : 0;
};

export const getContinentStrokeWeight = (zoom: number): number => {
  return zoom <= 3 ? 0.6 : zoom <= 4 ? 0.2 : 0;
};

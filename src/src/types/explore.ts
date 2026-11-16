import type { MapStyle } from './geo/MapStyle';
import type { MapType } from './geo/MapType';

export interface ExploreQuery {
  mapStyle: MapStyle;

  mapType?: MapType;
  selectedContinent?: string;
  selectedCountry?: string;
}

import type { MapType } from './geo/MapType';

export interface ExploreQuery {
  mapType: MapType;

  selectedContinent?: string;
  selectedCountry?: string;
}

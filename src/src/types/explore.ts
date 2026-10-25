export type MapType = 'World' | 'Continent' | 'Country';

export interface IExploreQuery {
  mapType: MapType;

  selectedContinent?: string;
  selectedCountry?: string;
}

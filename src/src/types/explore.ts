export type TMapType = 'World' | 'Continent' | 'Country';

export interface IExploreQuery {
  mapType: TMapType;

  selectedContinent?: string;
  selectedCountry?: string;
}

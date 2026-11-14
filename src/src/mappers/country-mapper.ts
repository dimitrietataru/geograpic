import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { Country, CountryQueryResponse } from '../types/country';
import { mapQueryResponse } from './base/query-response-mapper';

export const mapCountry = (country?: Partial<Country>): Country => {
  return {
    id: toNumber(country?.id),
    continentId: toNumber(country?.continentId),
    code: toString(country?.code),
    codeA3: toString(country?.codeA3),
    name: toString(country?.name),
    nameOfficial: toString(country?.nameOfficial),
    area: toNumber(country?.area ?? 0),
    population: toNumber(country?.population ?? 0),
    googleId: toString(country?.googleId),
    boundaryN: toNumber(country?.boundaryN ?? 0),
    boundaryS: toNumber(country?.boundaryS ?? 0),
    boundaryE: toNumber(country?.boundaryE ?? 0),
    boundaryW: toNumber(country?.boundaryW ?? 0),
    centerLat: toNumber(country?.centerLat ?? 0),
    centerLng: toNumber(country?.centerLng ?? 0),
  };
};

export const mapCountries = (countries?: Partial<Country[]>): Country[] => {
  if (!isArray(countries)) {
    return [];
  }

  return countries?.map(mapCountry);
};

export const mapPagedCountries = (response?: Partial<CountryQueryResponse>): CountryQueryResponse => {
  return mapQueryResponse(response, mapCountries);
};

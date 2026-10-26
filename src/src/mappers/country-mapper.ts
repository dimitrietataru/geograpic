import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { Country, CountryQueryResponse } from '../types/country';

export const mapCountry = (country?: Partial<Country>): Country => {
  return {
    id: toNumber(country?.id),
    continentId: toNumber(country?.continentId),
    code: toString(country?.code),
    codeA3: toString(country?.codeA3),
    name: toString(country?.name),
    nameOfficial: toString(country?.nameOfficial),
    area: toNumber(country?.area),
    population: toNumber(country?.population),
  };
};

export const mapCounties = (countries?: Partial<Country[]>): Country[] => {
  if (!isArray(countries)) {
    return [];
  }

  return countries?.map(mapCountry);
};

export const mapPagedCountries = (response?: Partial<CountryQueryResponse>): CountryQueryResponse => {
  return {
    page: toNumber(response?.page),
    size: toNumber(response?.size),
    count: toNumber(response?.count),
    items: mapCounties(response?.items),
  };
};

import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { ICountry, ICountryQueryResponse } from '../types/country';

export const mapCountry = (country?: Partial<ICountry>): ICountry => {
  return {
    id: toNumber(country?.id),
    continentId: toNumber(country?.continentId),
    name: toString(country?.name),
  };
};

export const mapCounties = (countries?: Partial<ICountry[]>): ICountry[] => {
  if (!isArray(countries)) {
    return [];
  }

  return countries?.map(mapCountry);
};

export const mapPagedCountries = (response?: Partial<ICountryQueryResponse>): ICountryQueryResponse => {
  return {
    page: toNumber(response?.page),
    size: toNumber(response?.size),
    count: toNumber(response?.count),
    items: mapCounties(response?.items),
  };
};

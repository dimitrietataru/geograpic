import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { City } from '../types/city';

export const mapCity = (city?: Partial<City>): City => {
  return {
    id: toNumber(city?.id),
    name: toString(city?.name),
  };
};

export const mapCities = (cities?: Partial<City[]>): City[] => {
  if (!isArray(cities)) {
    return [];
  }

  return cities?.map(mapCity);
};

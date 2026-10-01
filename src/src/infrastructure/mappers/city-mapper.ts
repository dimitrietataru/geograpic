import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { ICity } from '../../types/city';

export const mapCity = (city?: Partial<ICity>): ICity => {
  return {
    id: toNumber(city?.id),
    name: toString(city?.name),
  };
};

export const mapCities = (cities?: Partial<ICity[]>): ICity[] => {
  if (!isArray(cities)) {
    return [];
  }

  return cities?.map(mapCity);
};

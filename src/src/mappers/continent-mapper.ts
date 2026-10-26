import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { Continent, ContinentQueryResponse } from '../types/continent';

export const mapContinent = (continent?: Partial<Continent>): Continent => {
  return {
    id: toNumber(continent?.id),
    code: toString(continent?.code),
    name: toString(continent?.name),
  };
};

export const mapContinents = (continents?: Partial<Continent[]>): Continent[] => {
  if (!isArray(continents)) {
    return [];
  }

  return continents?.map(mapContinent);
};

export const mapPagedContinents = (response?: Partial<ContinentQueryResponse>): ContinentQueryResponse => {
  return {
    page: toNumber(response?.page),
    size: toNumber(response?.size),
    count: toNumber(response?.count),
    items: mapContinents(response?.items),
  };
};

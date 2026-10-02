import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { IContinent, IContinentQueryResponse } from '../../types/continent';

export const mapContinent = (continent?: Partial<IContinent>): IContinent => {
  return {
    id: toNumber(continent?.id),
    name: toString(continent?.name),
  };
};

export const mapContinents = (continents?: Partial<IContinent[]>): IContinent[] => {
  if (!isArray(continents)) {
    return [];
  }

  return continents?.map(mapContinent);
};

export const mapPagedContinents = (response?: Partial<IContinentQueryResponse>): IContinentQueryResponse => {
  return {
    page: toNumber(response?.page),
    size: toNumber(response?.size),
    count: toNumber(response?.count),
    items: mapContinents(response?.items),
  };
};

import isArray from 'lodash/isArray';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import type { Continent, ContinentQueryResponse } from '../types/continent';
import { mapQueryResponse } from './base/query-response-mapper';

export const mapContinent = (continent?: Partial<Continent>): Continent => {
  return {
    id: toNumber(continent?.id),
    code: toString(continent?.code),
    name: toString(continent?.name),
    googleId: toString(continent?.googleId),
    boundaryN: toNumber(continent?.boundaryN ?? 0),
    boundaryS: toNumber(continent?.boundaryS ?? 0),
    boundaryE: toNumber(continent?.boundaryE ?? 0),
    boundaryW: toNumber(continent?.boundaryW ?? 0),
    centerLat: toNumber(continent?.centerLat ?? 0),
    centerLng: toNumber(continent?.centerLng ?? 0),
  };
};

export const mapContinents = (continents?: Partial<Continent[]>): Continent[] => {
  if (!isArray(continents)) {
    return [];
  }

  return continents?.map(mapContinent);
};

export const mapPagedContinents = (response?: Partial<ContinentQueryResponse>): ContinentQueryResponse => {
  return mapQueryResponse(response, mapContinents);
};

import type { IModel } from './abstractions/model';
import type { IQueryRequest } from './abstractions/queryRequest';
import type { IQueryResponse } from './abstractions/queryResponse';

export interface ICountry extends IModel {
  continentId: number;
  code: string;
  codeA3: string;
  name: string;
  nameOfficial: string;
  area: number;
  population: number;
}

interface ICountryQueryFilter {
  code?: string;
  name?: string;
  continentIds?: number[];
}

export type ICountryQueryRequest = IQueryRequest<ICountryQueryFilter>;
export type ICountryQueryResponse = IQueryResponse<ICountry>;

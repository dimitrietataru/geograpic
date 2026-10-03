import type { IModel } from './abstractions/model';
import type { IQueryRequest } from './abstractions/queryRequest';
import type { IQueryResponse } from './abstractions/queryResponse';

export interface ICountry extends IModel {
  continentId: number;
  name: string;
}

interface ICountryQueryFilter {
  name?: string;
  continentIds?: number[];
}

export type ICountryQueryRequest = IQueryRequest<ICountryQueryFilter>;
export type ICountryQueryResponse = IQueryResponse<ICountry>;

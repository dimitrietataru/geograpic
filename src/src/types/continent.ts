import type { IModel } from './abstractions/model';
import type { IQueryRequest } from './abstractions/queryRequest';
import type { IQueryResponse } from './abstractions/queryResponse';
import type { ICountry } from './country';

export interface IContinent extends IModel {
  code: string;
  name: string;
}

export interface IContinentDetails extends IContinent {
  countries: ICountry[];
}

interface IContinentQueryFilter {
  code?: string;
  name?: string;
}

export type IContinentQueryRequest = IQueryRequest<IContinentQueryFilter>;
export type IContinentQueryResponse = IQueryResponse<IContinent>;

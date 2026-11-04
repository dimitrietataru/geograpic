import type { ModelBase } from './abstractions/model';
import type { QueryRequest } from './abstractions/query-request';
import type { QueryResponse } from './abstractions/query-response';
import type { Country } from './country';

export interface Continent extends ModelBase {
  code: string;
  name: string;
  googleId: string;
  boundaryN: number;
  boundaryS: number;
  boundaryE: number;
  boundaryW: number;
  centerLat: number;
  centerLng: number;
}

export interface ContinentDetails extends Continent {
  countries: Country[];
}

interface ContinentQueryFilter {
  code?: string;
  name?: string;
}

export type ContinentQueryRequest = QueryRequest<ContinentQueryFilter>;
export type ContinentQueryResponse = QueryResponse<Continent>;

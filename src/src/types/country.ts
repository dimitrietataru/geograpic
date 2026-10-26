import type { ModelBase } from './abstractions/model';
import type { QueryRequest } from './abstractions/query-request';
import type { QueryResponse } from './abstractions/query-response';

export interface Country extends ModelBase {
  continentId: number;
  code: string;
  codeA3: string;
  name: string;
  nameOfficial: string;
  area: number;
  population: number;
}

interface CountryQueryFilter {
  code?: string;
  name?: string;
  continentIds?: number[];
}

export type CountryQueryRequest = QueryRequest<CountryQueryFilter>;
export type CountryQueryResponse = QueryResponse<Country>;

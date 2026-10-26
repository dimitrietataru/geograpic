import { SortDirection } from '../enums/SortDirection';

export interface QueryRequestBase {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: SortDirection;
}

export interface QueryRequest<TFilter> extends QueryRequestBase {
  filter: TFilter;
}

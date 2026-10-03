import { SortDirection } from '../enums/SortDirection';

export interface IQueryRequestBase {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: SortDirection;
}

export interface IQueryRequest<TFilter> extends IQueryRequestBase {
  filter: TFilter;
}

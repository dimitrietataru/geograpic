import { SortDirection } from '../enums/SortDirection';

export interface IQueryRequest<TFilter> {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: SortDirection;
  filter: TFilter;
}

import type { IModel } from './model';

interface QueryResponseBase {
  page: number;
  size: number;
}

export interface IQueryResponse<TModel extends IModel> extends QueryResponseBase {
  count: number;
  items: TModel[];
}

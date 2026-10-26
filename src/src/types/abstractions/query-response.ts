import type { ModelBase } from './model';

interface QueryResponseBase {
  page: number;
  size: number;
}

export interface QueryResponse<TModel extends ModelBase> extends QueryResponseBase {
  count: number;
  items: TModel[];
}

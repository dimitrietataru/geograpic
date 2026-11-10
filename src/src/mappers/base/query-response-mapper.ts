import toNumber from 'lodash/toNumber';
import type { ModelBase } from '../../types/abstractions/model';
import type { QueryResponse } from '../../types/abstractions/query-response';

export const mapQueryResponse = <TModel extends ModelBase>(
  response: Partial<QueryResponse<TModel>> | undefined,
  mapItems: (items?: Partial<TModel[]>) => TModel[],
): QueryResponse<TModel> => {
  return {
    page: toNumber(response?.page),
    size: toNumber(response?.size),
    count: toNumber(response?.count),
    items: mapItems(response?.items),
  };
};

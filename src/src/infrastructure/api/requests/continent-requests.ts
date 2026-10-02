import type { AxiosResponse } from 'axios';
import toString from 'lodash/toString';
import { getApi } from '..';
import type { IContinentQueryRequest, IContinentQueryResponse } from '../../../types/continent';
import { mapPagedContinents } from '../../mappers/continent-mapper';

export const fetchContinentsRequest = async (request: IContinentQueryRequest) => {
  const params = buildQueryParams(request);
  const response: AxiosResponse<Partial<IContinentQueryResponse>> = await getApi().get(
    `/api/v1/continents?${params.toString()}`,
  );

  return mapPagedContinents(response?.data);
};

const buildQueryParams = (request: IContinentQueryRequest): URLSearchParams => {
  const params = new URLSearchParams();

  if (request.page) {
    params.set('page', toString(request.page));
  }

  if (request.size) {
    params.set('size', toString(request.size));
  }

  if (request.sortBy) {
    params.set('sortBy', request.sortBy);
  }

  if (request.sortDirection) {
    params.set('sortDirection', toString(request.sortDirection));
  }

  if (request.filter?.name) {
    params.set('name', toString(request.filter?.name));
  }

  return params;
};

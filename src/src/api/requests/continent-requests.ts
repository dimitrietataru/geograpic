import type { AxiosResponse } from 'axios';
import { getApi } from '..';
import { mapPagedContinents } from '../../mappers/continent-mapper';
import mapQueryParams from '../../mappers/requests/continent-params-mapper';
import type { IContinentQueryRequest, IContinentQueryResponse } from '../../types/continent';

export const fetchContinentsRequest = async (request: IContinentQueryRequest) => {
  const params = mapQueryParams(request);
  const response: AxiosResponse<Partial<IContinentQueryResponse>> = await getApi().get(
    `/api/v1/continents?${params.toString()}`,
  );

  return mapPagedContinents(response?.data);
};

import type { AxiosResponse } from 'axios';
import { getApi } from '..';
import { mapPagedContinents } from '../../mappers/continent-mapper';
import mapQueryParams from '../../mappers/requests/continent-params-mapper';
import type { ContinentQueryRequest, ContinentQueryResponse } from '../../types/continent';

export const fetchContinentsRequest = async (request: ContinentQueryRequest, signal?: AbortSignal) => {
  const params = mapQueryParams(request);
  const response: AxiosResponse<Partial<ContinentQueryResponse>> = await getApi().get(
    `/api/v1/continents?${params.toString()}`,
    { signal },
  );

  return mapPagedContinents(response?.data);
};

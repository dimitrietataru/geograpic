import type { AxiosResponse } from 'axios';
import { getApi } from '..';
import { mapPagedCountries } from '../../mappers/country-mapper';
import mapQueryParams from '../../mappers/requests/country-params-mapper';
import type { CountryQueryRequest, CountryQueryResponse } from '../../types/country';

export const fetchCountriesRequest = async (request: CountryQueryRequest, signal?: AbortSignal) => {
  const params = mapQueryParams(request);
  const response: AxiosResponse<Partial<CountryQueryResponse>> = await getApi().get(
    `/api/v1/countries?${params.toString()}`,
    { signal },
  );

  return mapPagedCountries(response?.data);
};

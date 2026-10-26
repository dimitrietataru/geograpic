import type { AxiosResponse } from 'axios';
import { getApi } from '..';
import { mapPagedCountries } from '../../mappers/country-mapper';
import mapQueryParams from '../../mappers/requests/country-params-mapper';
import type { CountryQueryRequest } from '../../types/country';

export const fetchCountriesRequest = async (request: CountryQueryRequest) => {
  const params = mapQueryParams(request);
  const response: AxiosResponse<Partial<CountryQueryRequest>> = await getApi().get(
    `/api/v1/countries?${params.toString()}`,
  );

  return mapPagedCountries(response?.data);
};

import type { AxiosResponse } from 'axios';
import { getApi } from '..';
import { mapPagedCountries } from '../../mappers/country-mapper';
import mapQueryParams from '../../mappers/requests/country-params-mapper';
import type { ICountryQueryRequest } from '../../types/country';

export const fetchCountriesRequest = async (request: ICountryQueryRequest) => {
  const params = mapQueryParams(request);
  const response: AxiosResponse<Partial<ICountryQueryRequest>> = await getApi().get(
    `/api/v1/countries?${params.toString()}`,
  );

  return mapPagedCountries(response?.data);
};

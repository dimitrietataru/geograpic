import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountriesRequest } from '../../api/requests/country-requests';
import type { CountryQueryRequest, CountryQueryResponse } from '../../types/country';

export const fetchCountries = createAsyncThunk(
  'countries/fetch',
  async (request: CountryQueryRequest): Promise<CountryQueryResponse> => {
    return fetchCountriesRequest(request);
  },
);

export const fetchAllCountries = createAsyncThunk('countries/fetch-all', async (): Promise<CountryQueryResponse> => {
  const request = {
    page: 1,
    size: 200,
  } as CountryQueryRequest;

  return fetchCountriesRequest(request);
});

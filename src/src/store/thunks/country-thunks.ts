import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountriesRequest } from '../../api/requests/country-requests';
import type { ICountryQueryRequest, ICountryQueryResponse } from '../../types/country';

export const fetchCountries = createAsyncThunk(
  'countries/fetch',
  async (request: ICountryQueryRequest): Promise<ICountryQueryResponse> => {
    return fetchCountriesRequest(request);
  },
);

export const fetchAllCountries = createAsyncThunk('countries/fetch-all', async (): Promise<ICountryQueryResponse> => {
  const request = {
    page: 1,
    size: 200,
  } as ICountryQueryRequest;

  return fetchCountriesRequest(request);
});

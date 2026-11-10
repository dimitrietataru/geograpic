import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '.';
import { fetchCountriesRequest } from '../../api/requests/country-requests';
import type { CountryQueryRequest, CountryQueryResponse } from '../../types/country';

export const fetchCountries = createAsyncThunk(
  'countries/fetch',
  async (request: CountryQueryRequest, { signal }): Promise<CountryQueryResponse> => {
    return fetchCountriesRequest(request, signal);
  },
);

export const fetchAllCountries = createAppAsyncThunk(
  'countries/fetch-all',
  async (): Promise<CountryQueryResponse> => {
    const request = {
      page: 1,
      size: 200,
    } as CountryQueryRequest;

    return fetchCountriesRequest(request);
  },
  {
    condition: (_, { getState }) => {
      const { allLoading, allLoaded } = getState().countries;

      return !allLoading && !allLoaded;
    },
  },
);

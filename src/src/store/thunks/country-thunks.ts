import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCountriesRequest } from '../../api/requests/country-requests';
import type { ICountryQueryRequest, ICountryQueryResponse } from '../../types/country';

export const fetchCountries = createAsyncThunk(
  'countries/fetch',
  async (request: ICountryQueryRequest): Promise<ICountryQueryResponse> => {
    return fetchCountriesRequest(request);
  },
);

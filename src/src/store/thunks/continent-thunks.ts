import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContinentsRequest } from '../../api/requests/continent-requests';
import type { ContinentQueryRequest, ContinentQueryResponse } from '../../types/continent';

export const fetchContinents = createAsyncThunk(
  'continents/fetch',
  async (request: ContinentQueryRequest): Promise<ContinentQueryResponse> => {
    return fetchContinentsRequest(request);
  },
);

export const fetchAllContinents = createAsyncThunk(
  'continents/fetch-all',
  async (): Promise<ContinentQueryResponse> => {
    const request = {
      page: 1,
      size: 10,
    } as ContinentQueryRequest;

    return fetchContinentsRequest(request);
  },
);

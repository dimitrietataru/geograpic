import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContinentsRequest } from '../../api/requests/continent-requests';
import type { IContinentQueryRequest, IContinentQueryResponse } from '../../types/continent';

export const fetchContinents = createAsyncThunk(
  'continents/fetch',
  async (request: IContinentQueryRequest): Promise<IContinentQueryResponse> => {
    return fetchContinentsRequest(request);
  },
);

export const fetchAllContinents = createAsyncThunk(
  'continents/fetch-all',
  async (): Promise<IContinentQueryResponse> => {
    const request = {
      page: 1,
      size: 10,
    } as IContinentQueryRequest;

    return fetchContinentsRequest(request);
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '.';
import { fetchContinentsRequest } from '../../api/requests/continent-requests';
import type { ContinentQueryRequest, ContinentQueryResponse } from '../../types/continent';

export const fetchContinents = createAsyncThunk(
  'continents/fetch',
  async (request: ContinentQueryRequest, { signal }): Promise<ContinentQueryResponse> => {
    return fetchContinentsRequest(request, signal);
  },
);

export const fetchAllContinents = createAppAsyncThunk(
  'continents/fetch-all',
  async (): Promise<ContinentQueryResponse> => {
    const request = {
      page: 1,
      size: 10,
    } as ContinentQueryRequest;

    return fetchContinentsRequest(request);
  },
  {
    condition: (_, { getState }) => {
      const { allLoading, allLoaded } = getState().continents;

      return !allLoading && !allLoaded;
    },
  },
);

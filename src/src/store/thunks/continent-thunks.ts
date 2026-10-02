import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContinentsRequest } from '../../api/requests/continent-requests';
import type { IContinentQueryRequest, IContinentQueryResponse } from '../../types/continent';

export const fetchContinents = createAsyncThunk(
  'continents/fetch',
  async (request: IContinentQueryRequest): Promise<IContinentQueryResponse> => {
    return fetchContinentsRequest(request);
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IContinentQueryRequest, IContinentQueryResponse } from '../../../types/continent';
import { fetchContinentsRequest } from '../../api/requests/continent-requests';

export const fetchContinents = createAsyncThunk(
  'continents/fetch',
  async (request: IContinentQueryRequest): Promise<IContinentQueryResponse> => {
    return fetchContinentsRequest(request);
  },
);

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICity } from '../../types/city';
import cityAdapter from '../adapters/city-adapter';

const initialState = cityAdapter.getInitialState({
  loading: false,
  error: null as string | null,
  count: 0,
});

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setCities(state, action: PayloadAction<ICity[]>) {
      cityAdapter.setAll(state, action.payload);
    },
    addCity(state, action: PayloadAction<ICity>) {
      cityAdapter.addOne(state, action.payload);
    },
    updateCity(state, action: PayloadAction<ICity>) {
      cityAdapter.upsertOne(state, action.payload);
    },
    removeCity(state, action: PayloadAction<number>) {
      cityAdapter.removeOne(state, action.payload);
    },
  },
});

export const { setCities, addCity, updateCity, removeCity } = citySlice.actions;

export default citySlice.reducer;

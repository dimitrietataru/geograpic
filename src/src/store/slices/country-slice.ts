import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICountry } from '../../types/country';
import countryAdapter from '../adapters/country-adapter';

const initialState = countryAdapter.getInitialState({
  loading: false,
  error: null as string | null,
  count: 0,
});

const countrySlice = createSlice({
  name: 'countries',
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
    setCountries(state, action: PayloadAction<ICountry[]>) {
      countryAdapter.setAll(state, action.payload);
    },
    addCountry(state, action: PayloadAction<ICountry>) {
      countryAdapter.addOne(state, action.payload);
    },
    updateCountry(state, action: PayloadAction<ICountry>) {
      countryAdapter.upsertOne(state, action.payload);
    },
    removeCountry(state, action: PayloadAction<number>) {
      countryAdapter.removeOne(state, action.payload);
    },
  },
});

export const { setCountries, addCountry, updateCountry, removeCountry } = countrySlice.actions;

export default countrySlice.reducer;

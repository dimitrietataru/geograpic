import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICountry } from '../../types/country';
import countryAdapter from '../adapters/country-adapter';
import { fetchCountries } from '../thunks/country-thunks';

const initialState = countryAdapter.getInitialState({
  loading: false,
  initialLoaded: false,
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
    setInitialLoading(state, action: PayloadAction<boolean>) {
      state.initialLoaded = action.payload;
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
  extraReducers: builder => {
    builder
      .addCase(fetchCountries.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.initialLoaded = true;
        state.count = action.payload.count;
        countryAdapter.setAll(state, action.payload.items);
      })
      .addCase(fetchCountries.rejected, state => {
        state.loading = false;
      });
  },
});

export const { setCountries, addCountry, updateCountry, removeCountry } = countrySlice.actions;

export default countrySlice.reducer;

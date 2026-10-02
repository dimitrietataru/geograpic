import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IContinent } from '../../types/continent';
import continentAdapter from '../adapters/continent-adapter';
import { fetchContinents } from '../thunks/continent-thunks';

const initialState = continentAdapter.getInitialState({
  loading: false,
  error: null as string | null,
  count: 0,
});

const continentSlice = createSlice({
  name: 'continents',
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
    setContinents(state, action: PayloadAction<IContinent[]>) {
      continentAdapter.setAll(state, action.payload);
    },
    addContinent(state, action: PayloadAction<IContinent>) {
      continentAdapter.addOne(state, action.payload);
    },
    updateContinent(state, action: PayloadAction<IContinent>) {
      continentAdapter.upsertOne(state, action.payload);
    },
    removeContinent(state, action: PayloadAction<number>) {
      continentAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContinents.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContinents.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload.count;
        continentAdapter.setAll(state, action.payload.items);
      })
      .addCase(fetchContinents.rejected, state => {
        state.loading = false;
      });
  },
});

export const { setContinents, addContinent, updateContinent, removeContinent } = continentSlice.actions;

export default continentSlice.reducer;

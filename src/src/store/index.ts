import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import citySlice from './slices/city-slice';
import continentSlice from './slices/continent-slice';
import countrySlice from './slices/country-slice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const appReducer = combineReducers({
  continents: continentSlice,
  countries: countrySlice,
  cities: citySlice,
});

const store = configureStore({
  reducer: appReducer,
});

export default store;

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';
import countryAdapter from '../adapters/country-adapter';
import { getContinentsSelector } from './continent-selector';

const countryState = (state: RootState) => state.countries;
const countrySelector = countryAdapter.getSelectors(countryState);

export const getCountriesSelector = (state: RootState) => countrySelector.selectAll(state);
export const getCountryByIdSelector = (id: number) => (state: RootState) => countrySelector.selectById(state, id);
export const getCountriesTotalSelector = (state: RootState) => countrySelector.selectTotal(state);

export const getCountriesByContinentIdSelector = (continentId: number) => (state: RootState) =>
  countrySelector.selectAll(state).filter(c => c.continentId === continentId);
export const getCountryByCodeSelector = (code?: string) => (state: RootState) =>
  code ? countrySelector.selectAll(state).find(country => country.code === code) : undefined;

export const getContinentsByCountryPlaceIdSelector = createSelector(
  [getCountriesSelector, getContinentsSelector],
  (countries, continents) => {
    const continentsById = new Map(continents.map(c => [c.id, c]));
    return new Map(
      countries
        .filter(c => c.googleId)
        .filter(c => !(c.centerLat === 0 && c.centerLng === 0))
        .flatMap(c => {
          const continent = continentsById.get(c.continentId);
          return continent ? [[c.googleId, continent] as const] : [];
        }),
    );
  },
);

export const getCountryLoadingSelector = (state: RootState) => countryState(state).loading;
export const getCountryErrorSelector = (state: RootState) => countryState(state).error;
export const getCountryCountSelector = (state: RootState) => countryState(state).count;

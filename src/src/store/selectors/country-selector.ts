import { createSelector } from '@reduxjs/toolkit';
import groupBy from 'lodash/groupBy';
import type { RootState } from '..';
import countryAdapter from '../adapters/country-adapter';

const LARGEST_COUNTRIES_PER_CONTINENT = 60;

const countryState = (state: RootState) => state.countries;
const countrySelector = countryAdapter.getSelectors(countryState);

export const getCountriesSelector = (state: RootState) => countrySelector.selectAll(state);
export const getCountryByIdSelector = (id: number) => (state: RootState) => countrySelector.selectById(state, id);
export const getCountriesTotalSelector = (state: RootState) => countrySelector.selectTotal(state);

export const getCountriesByContinentIdSelector = (continentId: number) => (state: RootState) =>
  countrySelector.selectAll(state).filter(c => c.continentId === continentId);
export const getCountryByCodeSelector = (code?: string) => (state: RootState) =>
  code ? countrySelector.selectAll(state).find(country => country.code === code) : undefined;

export const getDefinedCountriesSelector = createSelector([getCountriesSelector], countries =>
  countries.filter(c => c.googleId && !(c.centerLat === 0 && c.centerLng === 0)),
);
export const getLargestCountriesByContinentSelector = createSelector([getDefinedCountriesSelector], countries =>
  Object.values(groupBy(countries, c => c.continentId))
    .flatMap(continentCountries =>
      continentCountries.sort((a, b) => b.area - a.area).slice(0, LARGEST_COUNTRIES_PER_CONTINENT),
    )
    // .filter(c => c.area > 50_000)
    .sort((a, b) => b.area - a.area),
);

export const getCountryLoadingSelector = (state: RootState) => countryState(state).loading;
export const getCountryErrorSelector = (state: RootState) => countryState(state).error;
export const getCountryCountSelector = (state: RootState) => countryState(state).count;

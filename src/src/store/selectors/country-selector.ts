import countryAdapter from '../adapters/country-adapter';
import type { RootState } from '..';

const countryState = (state: RootState) => state.countries;
const countrySelector = countryAdapter.getSelectors(countryState);

export const getCountriesSelector = (state: RootState) => countrySelector.selectAll(state);
export const getCountryByIdSelector = (id: number) => (state: RootState) => countrySelector.selectById(state, id);
export const getCountriesTotalSelector = (state: RootState) => countrySelector.selectTotal(state);

export const getCountriesByContinentIdSelector = (continentId: number) => (state: RootState) =>
  countrySelector.selectAll(state).filter(c => c.continentId === continentId);

export const getCountryLoadingSelector = (state: RootState) => countryState(state).loading;
export const getCountryErrorSelector = (state: RootState) => countryState(state).error;
export const getCountryCountSelector = (state: RootState) => countryState(state).count;

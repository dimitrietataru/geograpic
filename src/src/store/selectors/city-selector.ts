import cityAdapter from '../adapters/city-adapter';
import type { RootState } from '..';

const cityState = (state: RootState) => state.cities;
const citySelector = cityAdapter.getSelectors(cityState);

export const getCitiesSelector = (state: RootState) => citySelector.selectAll(state);
export const getCityByIdSelector = (id: number) => (state: RootState) => citySelector.selectById(state, id);
export const getCitiesTotalSelector = (state: RootState) => citySelector.selectTotal(state);

export const getCityLoadingSelector = (state: RootState) => cityState(state).loading;
export const getCityErrorSelector = (state: RootState) => cityState(state).error;
export const getCityCountSelector = (state: RootState) => cityState(state).count;

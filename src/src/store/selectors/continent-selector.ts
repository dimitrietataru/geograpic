import continentAdapter from '../adapters/continent-adapter';
import type { RootState } from '..';

const continentState = (state: RootState) => state.continents;
const continentSelector = continentAdapter.getSelectors(continentState);

export const getContinentsSelector = (state: RootState) => continentSelector.selectAll(state);
export const getContinentByIdSelector = (id: number) => (state: RootState) => continentSelector.selectById(state, id);
export const getContinentsTotalSelector = (state: RootState) => continentSelector.selectTotal(state);

export const getContinentLoadingSelector = (state: RootState) => continentState(state).loading;
export const getContinentErrorSelector = (state: RootState) => continentState(state).error;
export const getContinentCountSelector = (state: RootState) => continentState(state).count;

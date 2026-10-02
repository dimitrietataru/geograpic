import { createEntityAdapter } from '@reduxjs/toolkit';
import type { IContinent } from '../../types/continent';

const continentAdapter = createEntityAdapter<IContinent, number>({ selectId: e => e.id });

export default continentAdapter;

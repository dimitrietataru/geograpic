import { createEntityAdapter } from '@reduxjs/toolkit';
import type { Continent } from '../../types/continent';

const continentAdapter = createEntityAdapter<Continent, number>({ selectId: e => e.id });

export default continentAdapter;

import { createEntityAdapter } from '@reduxjs/toolkit';
import type { City } from '../../types/city';

const cityAdapter = createEntityAdapter<City, number>({ selectId: e => e.id });

export default cityAdapter;

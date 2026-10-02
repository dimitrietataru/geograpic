import { createEntityAdapter } from '@reduxjs/toolkit';
import type { ICity } from '../../types/city';

const cityAdapter = createEntityAdapter<ICity, number>({ selectId: e => e.id });

export default cityAdapter;

import { createEntityAdapter } from '@reduxjs/toolkit';
import type { Country } from '../../types/country';

const countryAdapter = createEntityAdapter<Country, number>({ selectId: e => e.id });

export default countryAdapter;

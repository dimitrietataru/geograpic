import { createEntityAdapter } from '@reduxjs/toolkit';
import type { ICountry } from '../../types/country';

const countryAdapter = createEntityAdapter<ICountry, number>({ selectId: e => e.id });

export default countryAdapter;

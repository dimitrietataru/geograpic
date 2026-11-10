import { describe, expect, it } from 'vitest';
import type { Country } from '../types/country';
import { mapCountries, mapCountry, mapPagedCountries } from './country-mapper';

const romania: Country = {
  id: 1,
  continentId: 1,
  code: 'RO',
  codeA3: 'ROU',
  name: 'Romania',
  nameOfficial: 'Romania',
  area: 238397,
  population: 19000000,
};

describe('mapCountry', () => {
  it('maps all country fields', () => {
    expect(mapCountry(romania)).toEqual(romania);
  });

  it('maps undefined fields', () => {
    const result = mapCountry({
      id: undefined,
      continentId: undefined,
      code: undefined,
      codeA3: undefined,
      name: undefined,
      nameOfficial: undefined,
      area: undefined,
      population: undefined,
    });

    expect(result.id).toBeNaN();
    expect(result.continentId).toBeNaN();
    expect(result.code).toEqual('');
    expect(result.codeA3).toEqual('');
    expect(result.name).toEqual('');
    expect(result.nameOfficial).toEqual('');
    expect(result.area).toEqual(0);
    expect(result.population).toEqual(0);
  });
});

describe('mapCountries', () => {
  it('maps all countries', () => {
    expect(mapCountries([romania])).toEqual([romania]);
  });

  it('handles non-array input', () => {
    expect(mapCountries(undefined)).toEqual([]);
  });
});

describe('mapPagedCountries', () => {
  it('maps the paging fields and the items', () => {
    const result = mapPagedCountries({ page: 1, size: 10, count: 1, items: [romania] });
    expect(result).toEqual({ page: 1, size: 10, count: 1, items: [romania] });
  });
});

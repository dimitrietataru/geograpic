import { describe, expect, it } from 'vitest';
import type { Continent } from '../types/continent';
import { mapContinent, mapContinents, mapPagedContinents } from './continent-mapper';

const europe: Continent = {
  id: 1,
  code: 'EU',
  name: 'Europe',
  googleId: 'ChI..',
  boundaryN: 70,
  boundaryS: 35,
  boundaryE: 50,
  boundaryW: -30,
  centerLat: 54.52,
  centerLng: 15.25,
};

describe('mapContinent', () => {
  it('maps all continent fields', () => {
    expect(mapContinent(europe)).toEqual(europe);
  });

  it('maps undefined fields', () => {
    const result = mapContinent({
      id: undefined,
      code: undefined,
      name: undefined,
      googleId: undefined,
      boundaryN: undefined,
      boundaryS: undefined,
      boundaryW: undefined,
      centerLat: undefined,
      centerLng: undefined,
    });

    expect(result.id).toBeNaN();
    expect(result.code).toEqual('');
    expect(result.name).toEqual('');
    expect(result.googleId).toEqual('');
    expect(result.boundaryN).toEqual(0);
    expect(result.boundaryS).toEqual(0);
    expect(result.boundaryE).toEqual(0);
    expect(result.boundaryW).toEqual(0);
    expect(result.centerLat).toEqual(0);
    expect(result.centerLng).toEqual(0);
  });
});

describe('mapContinents', () => {
  it('maps all continents', () => {
    expect(mapContinents([europe])).toEqual([europe]);
  });

  it('handles non-array input', () => {
    expect(mapContinents(undefined)).toEqual([]);
  });
});

describe('mapPagedContinents', () => {
  it('maps the paging fields and the items', () => {
    const result = mapPagedContinents({ page: 1, size: 10, count: 1, items: [europe] });
    expect(result).toEqual({ page: 1, size: 10, count: 1, items: [europe] });
  });
});

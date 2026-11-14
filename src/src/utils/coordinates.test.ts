import { describe, expect, it } from 'vitest';
import { getCoordinateLabels } from './coordinates';

describe('getCoordinateLabels', () => {
  it('labels positive values as north and east', () => {
    expect(getCoordinateLabels(12.34, 56.78)).toEqual({ lat: '12.34° N', lng: '56.78° E' });
    expect(getCoordinateLabels(0.01, 0.01)).toEqual({ lat: '0.01° N', lng: '0.01° E' });
  });

  it('labels negative values as south and west', () => {
    expect(getCoordinateLabels(-12.34, -56.78)).toEqual({ lat: '12.34° S', lng: '56.78° W' });
    expect(getCoordinateLabels(-0.01, -0.01)).toEqual({ lat: '0.01° S', lng: '0.01° W' });
  });

  it('labels zero as north and east', () => {
    expect(getCoordinateLabels(0, 0)).toEqual({ lat: '0° N', lng: '0° E' });
  });
});

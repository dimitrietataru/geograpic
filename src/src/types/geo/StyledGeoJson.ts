import type { FeatureCollection, Geometry } from 'geojson';
import type { StyledGeoJsonProperties } from './StyledGeoJsonProperties';

export type StyledGeoJson = FeatureCollection<Geometry, StyledGeoJsonProperties>;

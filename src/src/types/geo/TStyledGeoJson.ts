import type { FeatureCollection, Geometry } from 'geojson';
import type { IStyledGeoJsonProperties } from './IStyledGeoJsonProperties';

export type TStyledGeoJson = FeatureCollection<Geometry, IStyledGeoJsonProperties>;

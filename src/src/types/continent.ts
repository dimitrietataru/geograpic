import type { IModel } from './abstractions/model';
import type { ICountry } from './country';

export interface IContinent extends IModel {
  name: string;
}

export interface IContinentDetails extends IContinent {
  countries: ICountry[];
}

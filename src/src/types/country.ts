import type { IModel } from './abstractions/model';

export interface ICountry extends IModel {
  continentId: number;
  name: string;
}

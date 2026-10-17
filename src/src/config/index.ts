import type { IAppSettings } from './types';

let appSettings: IAppSettings | null = null;

export const getConfig = (key: keyof IAppSettings) => appSettings?.[key];
export const setConfig = (config: IAppSettings) => (appSettings = { ...config });

export const getEnvironment = () => appSettings?.ENVIRONMENT;
export const getGeograpiApi = () => appSettings?.GEOGRAPI_API;
export const getGoogleMapsApiKey = () => appSettings?.GOOGLE_MAPS_API_KEY;

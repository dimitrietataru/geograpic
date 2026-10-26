import type { AppSettings } from './types';

let appSettings: AppSettings | null = null;

export const getConfig = (key: keyof AppSettings) => appSettings?.[key];
export const setConfig = (config: AppSettings) => (appSettings = { ...config });

export const getEnvironment = () => appSettings?.ENVIRONMENT;
export const getGeograpiApi = () => appSettings?.GEOGRAPI_API;
export const getGoogleMapsApiKey = () => appSettings?.GOOGLE_MAPS_API_KEY;

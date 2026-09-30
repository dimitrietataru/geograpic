import axios, { type AxiosInstance } from 'axios';
import { getEnvironment, getGeograpiApi } from '../../config';

let api: AxiosInstance | undefined;

export const initApi = (): AxiosInstance => {
  api = axios.create({ baseURL: getGeograpiApi() });

  api.interceptors.response.use(
    response => response,
    error => {
      const env = getEnvironment();
      if (env === 'Development') {
        console.log(error);
      }

      return Promise.reject(error);
    },
  );

  return api;
};

export const getApi = (): AxiosInstance => {
  return api ?? initApi();
};

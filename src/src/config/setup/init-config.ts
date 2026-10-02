import { setConfig } from '..';
import type { IAppSettings } from '../types';

const loadConfig = async (): Promise<IAppSettings> => {
  let jsonConfig = null;

  try {
    const response = await fetch('/appsettings.json');
    jsonConfig = await response.json();
  } catch {
    // swallow
  }

  return jsonConfig;
};

const initConfig = async (): Promise<void> => {
  const config = await loadConfig();
  setConfig(config);
};

export default initConfig;

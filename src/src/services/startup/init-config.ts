import { setConfig } from '../../config';
import type { IAppSettings } from '../../config/types';

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
  const configJson = await loadConfig();
  setConfig(configJson);
};

export default initConfig;

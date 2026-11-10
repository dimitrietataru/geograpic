import { setConfig } from '..';
import type { AppSettings } from '../types';

const loadConfig = async (): Promise<AppSettings> => {
  let jsonConfig: AppSettings | null = null;

  try {
    const response = await fetch('/appsettings.json');
    jsonConfig = (await response.json()) as AppSettings;
  } catch {
    // swallow
  }

  return jsonConfig!;
};

const initConfig = async (): Promise<void> => {
  const config = await loadConfig();
  setConfig(config);
};

export default initConfig;

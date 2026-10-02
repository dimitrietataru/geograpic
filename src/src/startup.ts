import initConfig from './config/setup';
import initTranslations from './translations';

const startup = async (): Promise<void> => {
  await initTranslations();
  await initConfig();
};

export default startup;

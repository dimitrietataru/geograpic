import initTranslations from '../../translations';
import initConfig from './init-config';

const startup = async (): Promise<void> => {
  await initTranslations();
  await initConfig();
};

export default startup;

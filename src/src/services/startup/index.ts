import { initTranslations } from '../../translations';

const startup = async (): Promise<void> => {
  await initTranslations();
};

export default startup;

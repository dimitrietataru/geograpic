import { useTranslation } from 'react-i18next';

export const useAppTranslations = () => {
  return useTranslation();
};

export const useMenuTranslations = () => {
  const [t] = useTranslation('menu');
  return [t];
};

export const useTableTranslations = () => {
  const [t] = useTranslation('table');
  return [t];
};

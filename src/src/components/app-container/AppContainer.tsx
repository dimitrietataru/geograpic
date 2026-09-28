import { Box } from '@mui/material';
import AppMenu from '../menu';
import type { IAppContainerProps } from './types';

function AppContainer(props: IAppContainerProps) {
  const { children } = props;

  return (
    <Box className="test" sx={{ display: 'flex' }}>
      <AppMenu />
      {children}
    </Box>
  );
}

export default AppContainer;

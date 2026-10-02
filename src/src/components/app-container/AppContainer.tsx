import { Box } from '@mui/material';
import AppMenu from '../app-menu';
import type { IAppContainerProps } from './types';

function AppContainer(props: IAppContainerProps) {
  const { children } = props;

  return (
    <Box className="app" sx={{ height: '100%', width: '100%', display: 'flex', overflow: 'hidden' }}>
      <AppMenu />
      <Box component="main" sx={{ flex: 1, overflow: 'hidden', p: 2 }}>
        {children}
      </Box>
    </Box>
  );
}

export default AppContainer;

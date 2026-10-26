import { Box } from '@mui/material';
import AppMenu from '../app-menu-v2';
import type { AppContainerProps } from './types';

function AppContainer(props: AppContainerProps) {
  const { children } = props;

  return (
    <Box className="app" sx={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <AppMenu />
      <Box component="main" sx={{ height: '100%', width: '100%', boxSizing: 'border-box', overflow: 'auto', p: 2 }}>
        {children}
      </Box>
    </Box>
  );
}

export default AppContainer;

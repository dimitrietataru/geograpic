import { Box } from '@mui/material';
import type { AppTabPanelProps } from './types';

function AppTabPanel(props: AppTabPanelProps) {
  const { children, value, index, sx, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`app-tab-panel-${index}`}
      aria-labelledby={`app-tab-${index}`}
      sx={sx}
      {...other}
    >
      {value === index && <Box sx={{ height: '100%', minHeight: 0, boxSizing: 'border-box', p: 2 }}>{children}</Box>}
    </Box>
  );
}

export default AppTabPanel;

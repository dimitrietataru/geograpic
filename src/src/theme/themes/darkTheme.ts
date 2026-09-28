import type { ThemeOptions } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: blue[400],
    },
    action: {
      selected: grey[800],
      hover: grey[700],
    },
  },
};

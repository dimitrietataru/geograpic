import type { ThemeOptions } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { darken } from '@mui/material/styles';

const BACKGROUND_DEFAULT = '#121212';
const BACKGROUND_PAPER = '#1e1e1e';

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: blue[400],
    },
    background: {
      default: BACKGROUND_DEFAULT,
      paper: BACKGROUND_PAPER,
    },
    action: {
      selected: grey[800],
      hover: grey[700],
    },
    dataGrid: {
      rowEven: darken(grey[900], 0.2),
      rowOdd: darken(grey[900], 0.4),
    },
  },
};

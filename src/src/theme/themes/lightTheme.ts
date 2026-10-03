import type { ThemeOptions } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

const BACKGROUND_DEFAULT = '#f8f8f8';
const BACKGROUND_PAPER = '#fff';

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: blue[600],
    },
    background: {
      default: BACKGROUND_DEFAULT,
      paper: BACKGROUND_PAPER,
    },
    dataGrid: {
      rowEven: grey[50],
      rowOdd: grey[100],
    },
  },
};

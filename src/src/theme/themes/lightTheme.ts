import type { ThemeOptions } from '@mui/material';
import { blue, green, grey, orange, pink, purple, teal } from '@mui/material/colors';

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
    data: {
      population: {
        B: grey[800],
        M: grey[700],
        K: grey[600],
      },
      area: {
        unit: grey[700],
      },
    },
    map: {
      continent: {
        af: {
          fillColor: green[300],
          strokeColor: green[800],
        },
        as: {
          fillColor: orange[300],
          strokeColor: orange[800],
        },
        eu: {
          fillColor: blue[300],
          strokeColor: blue[800],
        },
        oc: {
          fillColor: teal[300],
          strokeColor: teal[800],
        },
        na: {
          fillColor: purple[300],
          strokeColor: purple[800],
        },
        sa: {
          fillColor: pink[300],
          strokeColor: pink[800],
        },
      },
    },
  },
};

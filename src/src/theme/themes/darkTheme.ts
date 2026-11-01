import type { ThemeOptions } from '@mui/material';
import { blue, green, grey, orange, pink, purple, teal } from '@mui/material/colors';
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
    data: {
      population: {
        B: grey[300],
        M: grey[400],
        K: grey[500],
      },
      area: {
        unit: grey[400],
      },
    },
    map: {
      continent: {
        af: {
          fillColor: green[200],
          strokeColor: green[900],
        },
        as: {
          fillColor: orange[200],
          strokeColor: orange[900],
        },
        eu: {
          fillColor: blue[200],
          strokeColor: blue[900],
        },
        oc: {
          fillColor: teal[200],
          strokeColor: teal[900],
        },
        na: {
          fillColor: purple[200],
          strokeColor: purple[900],
        },
        sa: {
          fillColor: pink[200],
          strokeColor: pink[900],
        },
      },
    },
  },
};

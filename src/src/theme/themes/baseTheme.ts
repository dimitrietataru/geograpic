import type { ThemeOptions } from '@mui/material';

export const baseTheme: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
        },
      },
    },
  },
};

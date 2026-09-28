import type { ThemeOptions } from '@mui/material';

export const baseTheme: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          height: 48,
          px: 2,
        },
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

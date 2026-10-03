import type { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    dataGrid: {
      rowEven: string;
      rowOdd: string;
    };
  }

  interface PaletteOptions {
    dataGrid?: {
      rowEven?: string;
      rowOdd?: string;
    };
  }
}

export const baseTheme: ThemeOptions = {
  spacing: 8,
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

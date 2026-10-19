import type { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    dataGrid: {
      rowEven: string;
      rowOdd: string;
    };
    data: {
      population: {
        B: string;
        M: string;
        K: string;
      };
      area: {
        unit: string;
      };
    };
  }

  interface PaletteOptions {
    dataGrid?: {
      rowEven?: string;
      rowOdd?: string;
    };
    data: {
      population: {
        B: string;
        M: string;
        K: string;
      };
      area: {
        unit: string;
      };
    };
  }

  interface TypographyVariants {
    tableText1: React.CSSProperties;
    tableText2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    tableText1: React.CSSProperties;
    tableText2: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tableText1: true;
    tableText2: true;
  }
}

export const baseTheme: ThemeOptions = {
  spacing: 8,
  typography: {
    fontFamily: '"Montserrat", "sans-serif"',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 700 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    h6: { fontSize: '1.125rem', fontWeight: 600 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.25 },
    subtitle1: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.75 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.5 },
    caption: { fontSize: '0.75rem', fontWeight: 400 },
    overline: { fontSize: '0.75rem', fontWeight: 600 },
    tableText1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    tableText2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.25,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          fontFamily: theme.typography.fontFamily,
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.5,
        }),
      },
    },
  },
};

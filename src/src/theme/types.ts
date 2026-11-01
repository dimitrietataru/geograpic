import type { Theme } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';

export interface AppThemeContextProps {
  mode: ThemeMode;
  theme: Theme;
  toggleTheme: () => void;
}

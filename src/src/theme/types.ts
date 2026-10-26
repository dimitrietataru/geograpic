export type ThemeMode = 'light' | 'dark';

export interface AppThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

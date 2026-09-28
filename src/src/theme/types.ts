export type ThemeMode = 'light' | 'dark';

export interface IAppThemeContext {
  mode: ThemeMode;
  toggleTheme: () => void;
}

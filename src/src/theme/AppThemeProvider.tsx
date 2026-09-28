import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import { AppThemeContext } from './AppThemeContext';
import { baseTheme } from './themes/baseTheme';
import { darkTheme } from './themes/darkTheme';
import { lightTheme } from './themes/lightTheme';
import type { ThemeMode } from './types';

const createAppTheme = (mode: ThemeMode) =>
  createTheme({
    ...baseTheme,
    ...(mode === 'light' ? lightTheme : darkTheme),
  });

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const localTheme = localStorage.getItem('themeMode');
    return localTheme === 'dark' ? 'dark' : 'light';
  });

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const themeContext = useMemo(
    () => ({
      mode: mode,
      toggleTheme: () => {
        setMode(current => {
          const next = current === 'dark' ? 'light' : 'dark';
          localStorage.setItem('themeMode', next);

          return next;
        });
      },
    }),
    [mode],
  );

  return (
    <AppThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export default AppThemeProvider;

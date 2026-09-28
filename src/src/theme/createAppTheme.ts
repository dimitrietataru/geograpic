import { createTheme } from '@mui/material';
import { baseTheme as base } from './themes/baseTheme';
import { darkTheme as dark } from './themes/darkTheme';
import { lightTheme as light } from './themes/lightTheme';

export const createAppTheme = (mode: ThemeMode) =>
  createTheme({
    ...base,
    ...(mode === 'light' ? light : dark),
  });

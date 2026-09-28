import { createContext } from 'react';
import type { IAppThemeContext } from './types';

export const AppThemeContext = createContext<IAppThemeContext | undefined>(undefined);

import type { BoxProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CopyableColumnProps extends BoxProps {
  value: string;
  children?: ReactNode;
}

import type { SxProps, Theme } from '@mui/material/styles';

export interface IAppTabPanelProps {
  index: number;
  value: number;

  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

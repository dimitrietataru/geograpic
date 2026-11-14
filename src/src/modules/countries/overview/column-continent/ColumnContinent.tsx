import { Box, Tooltip, Typography } from '@mui/material';
import type { ColumnContinentProps } from './types';

function ColumnContinent({ continent }: ColumnContinentProps) {
  return (
    <Tooltip placement="left" arrow describeChild title={continent?.name}>
      <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Typography variant="tableText1">{continent?.code ?? '-'}</Typography>
      </Box>
    </Tooltip>
  );
}

export default ColumnContinent;

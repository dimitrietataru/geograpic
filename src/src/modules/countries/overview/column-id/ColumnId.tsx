import { Box, Typography } from '@mui/material';
import type { ColumnIdProps } from './types';

function ColumnId({ id }: ColumnIdProps) {
  return (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {id}
      </Typography>
    </Box>
  );
}

export default ColumnId;

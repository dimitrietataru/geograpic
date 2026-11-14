import { Box, Typography } from '@mui/material';
import CopyableColumn from '../../../../components/app-table-columns/copyable-column';
import type { ColumnGoogleIdProps } from './types';

function ColumnGoogleId({ googleId }: ColumnGoogleIdProps) {
  return (
    <CopyableColumn value={googleId}>
      <Box sx={{ height: '100%', minWidth: 0, display: 'flex', alignItems: 'center' }}>
        <Typography variant="tableText2" noWrap sx={{ color: 'text.secondary' }}>
          {googleId}
        </Typography>
      </Box>
    </CopyableColumn>
  );
}

export default ColumnGoogleId;

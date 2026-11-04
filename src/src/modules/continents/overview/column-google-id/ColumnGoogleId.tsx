import { Box, Typography } from '@mui/material';
import CopyableColumn from '../../../../components/app-table-columns/copyable-column';
import type { ColumnGoogleIdProps } from './types';

function ColumnGoogleId({ googleId }: ColumnGoogleIdProps) {
  return (
    <CopyableColumn value={googleId}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Typography variant="tableText1">{googleId}</Typography>
      </Box>
    </CopyableColumn>
  );
}

export default ColumnGoogleId;

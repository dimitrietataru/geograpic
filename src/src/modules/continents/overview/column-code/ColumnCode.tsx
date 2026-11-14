import { Box, Typography } from '@mui/material';
import CopyableColumn from '../../../../components/app-table-columns/copyable-column';
import type { ColumnCodeProps } from './types';

function ColumnCode({ code }: ColumnCodeProps) {
  return (
    <CopyableColumn value={code}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Typography variant="tableText1">{code}</Typography>
      </Box>
    </CopyableColumn>
  );
}

export default ColumnCode;

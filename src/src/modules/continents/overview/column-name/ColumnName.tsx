import { Box, Tooltip, Typography } from '@mui/material';
import CopyableColumn from '../../../../components/app-table-columns/copyable-column';
import type { ColumnNameProps } from './types';

function ColumnName({ name }: ColumnNameProps) {
  return (
    <CopyableColumn value={name}>
      <Tooltip placement="left" arrow describeChild title={name}>
        <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Typography variant="tableText1">{name}</Typography>
        </Box>
      </Tooltip>
    </CopyableColumn>
  );
}

export default ColumnName;

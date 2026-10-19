import { Box, Divider, Tooltip, Typography } from '@mui/material';
import type { IColumnCodeProps } from './types';

function ColumnCode(props: IColumnCodeProps) {
  return (
    <Tooltip placement="left" arrow describeChild title={`${props.codeA2} | ${props.codeA3}`}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '2rem', textAlign: 'right', flexShrink: 0 }}>
          <Typography variant="tableText1">{props.codeA2}</Typography>
        </Box>

        <Divider orientation="vertical" flexItem={false} sx={{ height: '1rem', alignSelf: 'center', mx: 1 }} />

        <Box sx={{ width: '2.5rem', textAlign: 'left', flexShrink: 0 }}>
          <Typography variant="tableText2" sx={{ color: 'text.secondary' }}>
            {props.codeA3}
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}

export default ColumnCode;

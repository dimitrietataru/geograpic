import { Box, Divider, Tooltip, Typography } from '@mui/material';
import type { ColumnCoordinatesProps } from './types';

function ColumnCoordinates(props: ColumnCoordinatesProps) {
  return (
    <Tooltip placement="left" arrow describeChild title={`${props.lat} | ${props.lng}`}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '3rem', textAlign: 'right', flexShrink: 0 }}>
          <Typography variant="tableText1">{props.lat}</Typography>
        </Box>

        <Divider orientation="vertical" flexItem={false} sx={{ height: '1rem', alignSelf: 'center', mx: 1 }} />

        <Box sx={{ width: '3.5rem', textAlign: 'left', flexShrink: 0 }}>
          <Typography variant="tableText2" sx={{ color: 'text.secondary' }}>
            {props.lng}
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}

export default ColumnCoordinates;

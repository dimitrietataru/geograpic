import { Box, Tooltip, Typography } from '@mui/material';
import type { ColumnAreaProps } from './types';

function ColumnArea(props: ColumnAreaProps) {
  const localeValue = props.area.toLocaleString('fr-FR');

  return (
    <Tooltip placement="left" arrow describeChild title={`${localeValue} km²`}>
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', gap: 0.2 }}>
        <Typography variant="tableText1">{localeValue}</Typography>
        <Box sx={{ height: '100%', ml: 0.2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="tableText2" sx={[({ palette }) => ({ color: palette.data.area.unit })]}>
            km²
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  );
}

export default ColumnArea;

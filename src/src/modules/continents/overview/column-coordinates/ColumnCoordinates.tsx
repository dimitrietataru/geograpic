import { Box, Divider, Tooltip, Typography } from '@mui/material';
import round from 'lodash/round';
import CopyableColumn from '../../../../components/app-table-columns/copyable-column';
import { getCoordinateLabels } from '../../../../utils/coordinates';
import type { ColumnCoordinatesProps } from './types';

function ColumnCoordinates({ lat, lng }: ColumnCoordinatesProps) {
  const labels = getCoordinateLabels(round(lat, 2), round(lng, 2));

  return (
    <CopyableColumn value={`${lat},${lng}`}>
      <Tooltip placement="left" arrow describeChild title={`${lat}, ${lng}`}>
        <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '4rem', textAlign: 'right', flexShrink: 0 }}>
            <Typography variant="tableText1">{labels.lat}</Typography>
          </Box>

          <Divider orientation="vertical" flexItem={false} sx={{ height: '1rem', alignSelf: 'center', mx: 1 }} />

          <Box sx={{ width: '4rem', textAlign: 'left', flexShrink: 0 }}>
            <Typography variant="tableText1" sx={{ color: 'text.secondary' }}>
              {labels.lng}
            </Typography>
          </Box>
        </Box>
      </Tooltip>
    </CopyableColumn>
  );
}

export default ColumnCoordinates;

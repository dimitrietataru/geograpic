import { Box, Chip } from '@mui/material';
import { AdvancedMarker, CollisionBehavior } from '@vis.gl/react-google-maps';
import { getContinentFillColor, getContinentStrokeColor } from '../../../mappers/geo/map-colors-mapper';
import type { ContinentMapPinPros } from './types';

function ContinentMapPin(props: ContinentMapPinPros) {
  return (
    <AdvancedMarker
      title={props.name}
      position={props.position}
      collisionBehavior={CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY}
      onClick={props.onClick}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
        <Chip
          label={props.name}
          color="primary"
          size="medium"
          variant="filled"
          sx={{
            typography: 'mapPin1',
            boxShadow: 1,
            border: 1.5,
            borderColor: theme => getContinentStrokeColor(theme, props.code),
            backgroundColor: theme => getContinentFillColor(theme, props.code),
          }}
        />
        <Box
          sx={{
            width: 0,
            height: 0,
            mt: '-1px',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '8px solid',
            borderTopColor: theme => getContinentStrokeColor(theme, props.code),
          }}
        />
      </Box>
    </AdvancedMarker>
  );
}

export default ContinentMapPin;

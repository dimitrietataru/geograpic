import { Box, Chip } from '@mui/material';
import { AdvancedMarker, CollisionBehavior } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { getContinentFillColor, getContinentStrokeColor } from '../../../mappers/geo/map-colors-mapper';
import type { CountryMapPinProps } from './types';

function CountryMapPin(props: CountryMapPinProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AdvancedMarker
      position={props.position}
      collisionBehavior={CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY}
      zIndex={isHovered ? 1000 : props.priority}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
        <Chip
          label={
            <>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  verticalAlign: 'bottom',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  maxWidth: isHovered ? 0 : 40,
                  transition: theme => (isHovered ? 'none' : theme.transitions.create('max-width')),
                }}
              >
                {props.code}
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  verticalAlign: 'bottom',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  maxWidth: isHovered ? 200 : 0,
                  transition: theme => (isHovered ? theme.transitions.create('max-width') : 'none'),
                }}
              >
                {props.name}
              </Box>
            </>
          }
          icon={<span className={`fi fis fi-${props.code.toLowerCase()}`} />}
          color="primary"
          size="small"
          variant="filled"
          sx={{
            typography: 'mapPin2',
            boxShadow: 1,
            border: 1,
            borderColor: theme => getContinentStrokeColor(theme, props.continentCode),
            backgroundColor: theme => getContinentFillColor(theme, props.continentCode),
            '& .MuiChip-icon': {
              border: 1,
              borderColor: 'primary.contrastText',
              borderRadius: '50%',
            },
          }}
        />
        <Box
          sx={{
            width: 0,
            height: 0,
            mt: '-1px',
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: '6px solid',
            borderTopColor: theme => getContinentStrokeColor(theme, props.continentCode),
          }}
        />
      </Box>
    </AdvancedMarker>
  );
}

export default CountryMapPin;

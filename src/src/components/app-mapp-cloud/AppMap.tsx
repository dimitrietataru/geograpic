import { Box } from '@mui/material';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { getGoogleMapsApiKey, getGoogleMapsMapId } from '../../config';
import { useAppTheme } from '../../theme/hooks/useAppTheme';
import type { AppMapProps } from './types';

function AppMap(props: AppMapProps) {
  const apiKey = getGoogleMapsApiKey();
  const { mode } = useAppTheme();

  return (
    <>
      {apiKey !== undefined && apiKey.length !== 0 && (
        <APIProvider apiKey={apiKey}>
          <Map
            mapId={getGoogleMapsMapId()}
            style={{ width: '100%', height: '100%', flex: 1 }}
            colorScheme={mode === 'dark' ? 'DARK' : 'LIGHT'}
            gestureHandling="greedy"
            disableDefaultUI
            {...props}
          />
        </APIProvider>
      )}
      {(apiKey === undefined || apiKey.length === 0) && (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>Map is not available or API key is missing..</Box>
      )}
    </>
  );
}

export default AppMap;

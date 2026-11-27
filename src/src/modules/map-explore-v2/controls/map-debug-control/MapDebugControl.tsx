import { FormControlLabel, Paper, Switch } from '@mui/material';
import { MapControl } from '@vis.gl/react-google-maps';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import { useMapTranslations } from '../../../../translations/useAppTranslations';
import type { MapDebugControlProps } from './types';

function MapDebugControl({ position }: MapDebugControlProps) {
  const [t] = useMapTranslations();
  const { filters, setFilters } = useExploreFilters();

  const onChange = (_event: React.ChangeEvent<HTMLInputElement>, debug: boolean): void => {
    setFilters({ ...filters, debug }, { replace: true });
  };

  return (
    <MapControl position={position}>
      <Paper sx={{ m: 1.25, px: 1.5, boxShadow: 2 }}>
        <FormControlLabel
          control={<Switch checked={filters.debug} onChange={onChange} size="small" />}
          label={t('map.debug')}
        />
      </Paper>
    </MapControl>
  );
}

export default MapDebugControl;

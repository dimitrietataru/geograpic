import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { MapControl } from '@vis.gl/react-google-maps';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import { useMapTranslations } from '../../../../translations/useAppTranslations';
import type { MapStyle } from '../../../../types/geo/MapStyle';
import type { MapStyleControlProps } from './types';

function MapStyleControl({ position }: MapStyleControlProps) {
  const [t] = useMapTranslations();
  const { filters, setFilters } = useExploreFilters();

  const onStyleChange = (_event: React.MouseEvent<HTMLElement>, mapStyle: MapStyle | null): void => {
    if (mapStyle === null) {
      return;
    }

    if (mapStyle === 'Default') {
      setFilters({ mapStyle });
    }

    if (mapStyle === 'Administrative') {
      setFilters({ mapStyle, mapType: 'World' });
    }
  };

  return (
    <MapControl position={position}>
      <ToggleButtonGroup
        value={filters.mapStyle}
        onChange={onStyleChange}
        exclusive
        size="small"
        sx={{ m: 1.25, bgcolor: 'background.paper', boxShadow: 2 }}
      >
        <Tooltip title={t('map.style.default')} placement="top">
          <ToggleButton value="Default" aria-label={t('map.style.default')}>
            <GoogleIcon />
          </ToggleButton>
        </Tooltip>
        <Tooltip title={t('map.style.administrative')} placement="top">
          <ToggleButton value="Administrative" aria-label={t('map.style.administrative')}>
            <FlagOutlinedIcon />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
    </MapControl>
  );
}

export default MapStyleControl;

import { ControlPosition } from '@vis.gl/react-google-maps';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import MapCursorPositionControl from '../../controls/map-cursor-position-control';
import MapDebugControl from '../../controls/map-debug-control';
import LayerContinent from './layer-continent';
import LayerCountry from './layer-country';
import LayerCountryDebug from './layer-country/LayerCountryDebug';
import LayerWorld from './layer-world';

function AdministrativeLayer() {
  const { filters } = useExploreFilters();

  return (
    <>
      {filters.mapType === 'World' && <LayerWorld />}
      {filters.mapType === 'Continent' && <LayerContinent />}
      {filters.mapType === 'Country' && <LayerCountry />}

      <MapDebugControl position={ControlPosition.RIGHT_BOTTOM} />
      {filters.debug && <MapCursorPositionControl position={ControlPosition.BOTTOM_LEFT} />}
      {filters.debug && filters.mapType === 'Country' && <LayerCountryDebug />}
    </>
  );
}

export default AdministrativeLayer;

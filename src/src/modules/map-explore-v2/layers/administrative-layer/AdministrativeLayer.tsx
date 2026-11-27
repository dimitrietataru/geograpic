import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import LayerContinent from './layer-continent';
import LayerCountry from './layer-country';
import LayerWorld from './layer-world';

function AdministrativeLayer() {
  const { filters } = useExploreFilters();

  return (
    <>
      {filters.mapType === 'World' && <LayerWorld />}
      {filters.mapType === 'Continent' && <LayerContinent />}
      {filters.mapType === 'Country' && <LayerCountry />}
    </>
  );
}

export default AdministrativeLayer;

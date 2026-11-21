import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import LayerContinent from './layer-continent';
import LayerWorld from './layer-world';

function AdministrativeLayer() {
  const { filters } = useExploreFilters();

  return (
    <>
      {filters.mapType === 'World' && <LayerWorld />}
      {filters.mapType === 'Continent' && <LayerContinent />}
    </>
  );
}

export default AdministrativeLayer;

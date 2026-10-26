import { colors } from '@mui/material';
import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import useWorldGeoJson from '../../../../hooks/geo/useWorldGeoJson';
import { toBoundary } from '../../../../mappers/geo/boundaries-mapper';
import { toCenter } from '../../../../mappers/geo/center-mapper';

function LayerWorld() {
  const map = useMap();
  const layer = useWorldGeoJson();
  const { setFilters } = useExploreFilters();

  useEffect(() => {
    if (!map || !layer) {
      return;
    }

    const features = map.data.addGeoJson(layer);

    map.data.setStyle((feature: google.maps.Data.Feature) => {
      const continentCode = String(feature.getProperty('continent') ?? 'Unknown ISO Code');
      const fillColor = continentCode === 'EU' ? colors.red[500] : colors.green[500];

      return {
        fillColor: fillColor,
        fillOpacity: 0.8,
      };
    });

    const onClick = map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
      // const code = event.feature.getProperty('continent') ?? 'EU';
      const continentCode = 'EU';
      const continentBoundary = toBoundary(continentCode);
      const continentCenter = toCenter(continentCode);

      map.setOptions({
        minZoom: 3,
        maxZoom: 10,
        restriction: { latLngBounds: continentBoundary, strictBounds: true },
      });

      map.moveCamera({ center: continentCenter });
      setFilters({ mapType: 'Continent', selectedContinent: continentCode });
    });

    return () => {
      features.forEach(f => map.data.remove(f));
      onClick.remove();
    };
  }, [map, layer, setFilters]);

  return null;
}

export default LayerWorld;

import { colors } from '@mui/material';
import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useExploreFilters } from '../../../../hooks/filters/useExploreFilters';
import useContinentGeoJson from '../../../../hooks/geo/useContinentGeoJson';

function LayerEurope() {
  const map = useMap();
  const layer = useContinentGeoJson('EU');
  const { setFilters } = useExploreFilters();

  useEffect(() => {
    if (!map || !layer) {
      return;
    }

    const features = map.data.addGeoJson(layer);

    map.data.setStyle((feature: google.maps.Data.Feature) => {
      const continentCode = String(feature.getProperty('codeiso2') ?? 'Unknown ISO Code');
      const fillColor = continentCode === 'EU' ? colors.blue[500] : colors.red[500];

      return {
        fillColor: fillColor,
        fillOpacity: 0.8,
      };
    });

    const onClick = map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
      const continentCode = String(event.feature.getProperty('continent') ?? 'Unknown ISO Code');
      const countryCode = String(event.feature.getProperty('codeiso2') ?? 'Unknown ISO Code');

      setFilters({ mapType: 'Country', selectedContinent: continentCode, selectedCountry: countryCode });
    });

    return () => {
      features.forEach(f => map.data.remove(f));
      onClick.remove();
    };
  }, [map, layer, setFilters]);

  return null;
}

export default LayerEurope;

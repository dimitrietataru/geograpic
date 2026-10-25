import { useMap } from '@vis.gl/react-google-maps';
import useEuropeGeoJson from '../../../../hooks/geo/useContinentEuropeGeoJson';
import type { ILayerEuropeProps } from './types';
import { useEffect } from 'react';
import { colors } from '@mui/material';

function LayerEurope(props: ILayerEuropeProps) {
  const map = useMap();
  const layer = useEuropeGeoJson();

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
      const continentCode = event.feature.getProperty('continent') ?? 'Unknown ISO Code';
      const countryCode = event.feature.getProperty('codeiso2') ?? 'Unknown ISO Code';

      const clickProps = {
        continentCode: String(continentCode),
        countryCode: String(countryCode),
      };

      props.onClick(clickProps);
    });

    return () => {
      features.forEach(f => map.data.remove(f));
      onClick.remove();
    };
  }, [map, layer, props]);

  return null;
}

export default LayerEurope;

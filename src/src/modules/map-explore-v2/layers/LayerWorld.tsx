import { Chip, Tooltip } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import { AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useExploreFilters } from '../../../hooks/filters/useExploreFilters';

const countryPoints: Record<string, google.maps.LatLngLiteral> = {
  ChIJw3aJlSb_sUARlLEEqJJP74Q: { lat: 46.0, lng: 25.0 },
  // Add your other country Place IDs and coordinates
};

function LayerWorld() {
  const map = useMap();
  const { setFilters } = useExploreFilters();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!map) {
      return;
    }

    // const features = map.data.addGeoJson(layer);
    // const stylingFunction = (feature: google.maps.Data.Feature) => {
    //   const continentCode = String(feature.getProperty('code'));
    //   const fillColor = getContinentFillColor(theme, continentCode);
    //   const strokeColor = getContinentStrokeColor(theme, continentCode);

    //   const zoom = map.getZoom() ?? 3;
    //   const fillOpacity = getContinentFillOpacity(zoom);
    //   const strokeWeight = getContinentStrokeWeight(zoom);

    //   return {
    //     fillColor: fillColor,
    //     fillOpacity: fillOpacity,
    //     strokeColor: strokeColor,
    //     strokeWeight: strokeWeight,
    //   };
    // };

    // map.data.setStyle(stylingFunction);

    // const onClick = map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
    //   const continentCode = String(event.feature.getProperty('code'));
    //   setFilters({ mapType: 'Continent', selectedContinent: continentCode });
    // });

    // const onZoomChange = map.addListener('zoom_changed', () => {
    //   map.data.setStyle(stylingFunction);
    // });

    const featureLayer = map.getFeatureLayer('COUNTRY');
    featureLayer.style = (options: google.maps.FeatureStyleFunctionOptions) => {
      const place = options.feature as google.maps.PlaceFeature;
      console.log('PLACE: ', place.placeId);

      if (place.placeId === 'ChIJw3aJlSb_sUARlLEEqJJP74Q') {
        return {
          fillColor: red[500],
          fillOpacity: 0.8,
          strokeColor: red[900],
          strokeWeight: 0.6,
        };
      }

      return null;
    };

    return () => {
      featureLayer.style = null;
    };

    // return () => {
    //   features.forEach(f => map.data.remove(f));
    //   onClick.remove();
    //   onZoomChange.remove();
    // };
  }, [map]);

  return (
    <>
      {Object.entries(countryPoints).map(([placeId, position]) => {
        const isHoveredCountry = isHovered === placeId;
        return (
          <AdvancedMarker
            key={placeId}
            position={position}
            anchorTop="-50%"
            // title={placeId}
            onClick={() => setFilters({ mapType: 'Continent', selectedContinent: 'EU' })}
            onMouseEnter={() => setIsHovered(placeId)}
            onMouseLeave={() => setIsHovered(null)}
            zIndex={isHoveredCountry ? 1000 : 1}
          >
            <Tooltip title="Romania" placement="top">
              <Chip
                label="RO"
                color="primary"
                size="small"
                variant="outlined"
                sx={{
                  fontWeight: 400,
                  fontSize: 12,
                  boxShadow: 2,
                  cursor: 'pointer',
                  //   border: '6px solid blue.900',
                  borderColor: blue[900],
                }}
              />
            </Tooltip>
          </AdvancedMarker>
        );
      })}
    </>
  );
}

export default LayerWorld;

import { AdvancedMarker, AdvancedMarkerAnchorPoint, useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useExploreFilters } from '../../../../../hooks/filters/useExploreFilters';
import { getContinentStrokeColor } from '../../../../../mappers/geo/map-colors-mapper';
import { useAppSelector } from '../../../../../store';
import { getContinentByCodeSelector } from '../../../../../store/selectors/continent-selector';
import { getCountryByCodeSelector } from '../../../../../store/selectors/country-selector';
import { useAppTheme } from '../../../../../theme/hooks/useAppTheme';
import { Box } from '@mui/material';

function LayerCountryDebug() {
  const map = useMap();
  const { filters } = useExploreFilters();
  const { theme } = useAppTheme();

  const continent = useAppSelector(getContinentByCodeSelector(filters.selectedContinent));
  const country = useAppSelector(getCountryByCodeSelector(filters.selectedCountry));

  useEffect(() => {
    if (!map || !continent || !country) {
      return;
    }

    const fractions = [0, 0.25, 0.5, 0.75, 1];
    const latitudes = fractions.map(f => country.boundaryS + (country.boundaryN - country.boundaryS) * f);
    const longitudes = fractions.map(f => country.boundaryW + (country.boundaryE - country.boundaryW) * f);
    const lineOptions: google.maps.PolylineOptions = {
      map,
      geodesic: false,
      clickable: false,
      strokeColor: getContinentStrokeColor(theme, continent.code),
      strokeOpacity: 1,
      strokeWeight: 2,
    };

    const lines = [
      ...latitudes.map(
        lat =>
          new google.maps.Polyline({
            ...lineOptions,
            path: [-180, -90, 0, 90, 180].map(lng => ({ lat, lng })),
          }),
      ),
      ...longitudes.map(
        lng =>
          new google.maps.Polyline({
            ...lineOptions,
            path: [
              { lat: -85, lng },
              { lat: 85, lng },
            ],
          }),
      ),
    ];

    return () => {
      lines.forEach(line => line.setMap(null));
    };
  }, [map, theme, continent, country]);

  if (!continent || !country) {
    return null;
  }

  return (
    <AdvancedMarker
      position={{ lat: country.centerLat, lng: country.centerLng }}
      anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
      clickable={false}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          border: 2,
          borderColor: 'common.white',
          backgroundColor: getContinentStrokeColor(theme, continent.code),
        }}
      />
    </AdvancedMarker>
  );
}

export default LayerCountryDebug;

import { Chip, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';
import { AdvancedMarker, CollisionBehavior, useMap } from '@vis.gl/react-google-maps';
import { useEffect, useMemo, useState } from 'react';
import { useExploreFilters } from '../../../hooks/filters/useExploreFilters';
import {
  getContinentFillColor,
  getContinentFillOpacity,
  getContinentStrokeColor,
  getContinentStrokeWeight,
} from '../../../mappers/geo/map-colors-mapper';
import { useAppSelector } from '../../../store';
import { getContinentsSelector } from '../../../store/selectors/continent-selector';
import {
  getDefinedCountriesSelector,
  getLargestCountriesByContinentSelector,
} from '../../../store/selectors/country-selector';
import { useAppTheme } from '../../../theme/hooks/useAppTheme';

function LayerWorld() {
  const map = useMap();
  const { setFilters } = useExploreFilters();
  const { theme } = useAppTheme();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const continents = useAppSelector(getContinentsSelector);
  const definedCountries = useAppSelector(getDefinedCountriesSelector);
  const largestCountries = useAppSelector(getLargestCountriesByContinentSelector);

  const continentCodesById = useMemo(() => new Map(continents.map(c => [c.id, c.code])), [continents]);
  const continentCodesByPlaceId = useMemo(
    () => new Map(definedCountries.map(c => [c.googleId, continentCodesById.get(c.continentId)])),
    [definedCountries, continentCodesById],
  );

  useEffect(() => {
    if (!map) {
      return;
    }

    const featureLayer = map.getFeatureLayer('COUNTRY');
    const styleFeatureLayer = () => {
      const zoom = map.getZoom() ?? 3;
      const fillOpacity = getContinentFillOpacity(zoom);
      const strokeWeight = getContinentStrokeWeight(zoom);

      featureLayer.style = (options: google.maps.FeatureStyleFunctionOptions) => {
        const place = options.feature as google.maps.PlaceFeature;
        const continentCode = continentCodesByPlaceId.get(place.placeId);

        if (!continentCode) {
          return null;
        }

        return {
          fillColor: getContinentFillColor(theme, continentCode),
          fillOpacity: fillOpacity,
          strokeColor: getContinentStrokeColor(theme, continentCode),
          strokeWeight: strokeWeight,
        };
      };
    };

    styleFeatureLayer();

    const onZoomChange = map.addListener('zoom_changed', styleFeatureLayer);

    return () => {
      featureLayer.style = null;
      onZoomChange.remove();
    };
  }, [map, theme, continentCodesByPlaceId]);

  return (
    <>
      {largestCountries.map((country, index) => {
        const isHoveredCountry = isHovered === country.googleId;
        // largestCountries is sorted by area, descending: larger countries get a higher priority.
        const priority = largestCountries.length - index;
        return (
          <AdvancedMarker
            key={country.id}
            position={{ lat: country.centerLat, lng: country.centerLng }}
            // anchorTop="-50%"
            title={country.googleId}
            onClick={() =>
              setFilters({
                mapStyle: 'Administrative',
                mapType: 'Continent',
                selectedContinent: continentCodesById.get(country.continentId),
              })
            }
            onMouseEnter={() => setIsHovered(country.googleId)}
            onMouseLeave={() => setIsHovered(null)}
            collisionBehavior={CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY}
            zIndex={isHoveredCountry ? 1000 : priority}
          >
            <Tooltip title={country.name} placement="top">
              <Chip
                label={country.code}
                color="primary"
                size="small"
                variant="filled"
                sx={{
                  fontWeight: 400,
                  fontSize: 8,
                  boxShadow: 2,
                  cursor: 'pointer',
                  borderColor: blue[900],
                  transform: 'translateY(50%)',
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

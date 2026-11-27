import { useMap } from '@vis.gl/react-google-maps';
import { useEffect, useMemo } from 'react';
import CountryMapPin from '../../../../../components/app-map-pins/country-map-pin';
import { MapZoom } from '../../../../../constants/geo/map-zoom';
import { useExploreFilters } from '../../../../../hooks/filters/useExploreFilters';
import {
  getContinentFillColor,
  getContinentFillOpacity,
  getContinentStrokeColor,
  getContinentStrokeWeight,
} from '../../../../../mappers/geo/map-colors-mapper';
import { useAppArgsSelector, useAppSelector } from '../../../../../store';
import { getContinentByCodeSelector } from '../../../../../store/selectors/continent-selector';
import { getCountriesByContinentIdSelector } from '../../../../../store/selectors/country-selector';
import { useAppTheme } from '../../../../../theme/hooks/useAppTheme';
import type { Continent } from '../../../../../types/continent';
import type { Country } from '../../../../../types/country';

function LayerContinentCountries({ continent }: { continent: Continent }) {
  const map = useMap();
  const { setFilters } = useExploreFilters();
  const { theme } = useAppTheme();

  const countries = useAppArgsSelector(getCountriesByContinentIdSelector, continent.id);

  const countriesByPlaceId = useMemo(() => new Map(countries.map(c => [c.googleId, c])), [countries]);
  const countriesByPriority = useMemo(() => [...countries].sort((a, b) => b.area - a.area), [countries]);

  useEffect(() => {
    if (!map) {
      return;
    }

    const featureLayer = map.getFeatureLayer('COUNTRY');
    const styleFeatureLayer = () => {
      const zoom = map.getZoom() ?? MapZoom.default;
      const fillOpacity = getContinentFillOpacity(zoom);
      const strokeWeight = getContinentStrokeWeight(zoom);

      featureLayer.style = (options: google.maps.FeatureStyleFunctionOptions) => {
        const place = options.feature as google.maps.PlaceFeature;
        const countryCode = countriesByPlaceId.get(place.placeId);

        if (!countryCode) {
          return null;
        }

        return {
          fillColor: getContinentFillColor(theme, continent.code),
          fillOpacity: fillOpacity,
          strokeColor: getContinentStrokeColor(theme, continent.code),
          strokeWeight: strokeWeight,
        };
      };
    };

    styleFeatureLayer();

    const onZoomChange = map.addListener('zoom_changed', styleFeatureLayer);
    const onCountryClick = featureLayer.addListener('click', (event: google.maps.FeatureMouseEvent) => {
      const place = event.features[0] as google.maps.PlaceFeature;
      const country = countriesByPlaceId.get(place.placeId);
      if (!country) {
        return;
      }

      setFilters({
        mapStyle: 'Administrative',
        mapType: 'Country',
        selectedContinent: continent.code,
        selectedCountry: country.code,
      });
    });

    return () => {
      featureLayer.style = null;
      onZoomChange.remove();
      onCountryClick.remove();
    };
  }, [map, theme, setFilters, continent, countriesByPlaceId]);

  const onCountryClick = (country: Country) => {
    setFilters({
      mapStyle: 'Administrative',
      mapType: 'Country',
      selectedContinent: continent.code,
      selectedCountry: country.code,
    });
  };

  return (
    <>
      {countriesByPriority.map((country, index) => (
        <CountryMapPin
          key={country.id}
          id={country.id}
          code={country.code}
          name={country.name}
          continentCode={continent.code}
          priority={countriesByPriority.length - index}
          placeId={country.googleId}
          position={{ lat: country.centerLat, lng: country.centerLng }}
          onClick={() => onCountryClick(country)}
        />
      ))}
    </>
  );
}

function LayerContinent() {
  const { filters } = useExploreFilters();
  const continent = useAppSelector(getContinentByCodeSelector(filters.selectedContinent));

  return <>{continent && <LayerContinentCountries continent={continent} />}</>;
}

export default LayerContinent;

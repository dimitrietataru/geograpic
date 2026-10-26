import ExploreIcon from '@mui/icons-material/Explore';
import FlagIcon from '@mui/icons-material/Flag';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useExploreFilters } from '../../../hooks/filters/useExploreFilters';
import { useAppSelector } from '../../../store';
import { getContinentByCodeSelector } from '../../../store/selectors/continent-selector';
import { getCountryByCodeSelector } from '../../../store/selectors/country-selector';
import { useMapTranslations } from '../../../translations/useAppTranslations';

function MapBreadcrumbs() {
  const [t] = useMapTranslations();
  const { filters, setFilters } = useExploreFilters();
  const continent = useAppSelector(getContinentByCodeSelector(filters.selectedContinent));
  const country = useAppSelector(getCountryByCodeSelector(filters.selectedCountry));

  const handleGlobalClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setFilters({
      mapType: 'World',
      selectedContinent: undefined,
      selectedCountry: undefined,
    });
  };

  const handleContinentClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (!filters.selectedContinent) {
      return;
    }

    setFilters({
      mapType: 'Continent',
      selectedContinent: filters.selectedContinent,
      selectedCountry: undefined,
    });
  };

  //   const handleCountryClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //     event.preventDefault();

  //     if (!filters.selectedContinent || !filters.selectedCountry) {
  //       return;
  //     }

  //     setFilters({
  //       mapType: 'Country',
  //       selectedContinent: filters.selectedContinent,
  //       selectedCountry: filters.selectedCountry,
  //     });
  //   };

  return (
    <Breadcrumbs aria-label="map navigation">
      {filters.mapType === 'World' && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
          <ExploreIcon />
          <Typography color="text.primary" aria-current="page">
            {t('map.navigation.global')}
          </Typography>
        </Box>
      )}
      {filters.mapType !== 'World' && (
        <Link href="#" underline="hover" onClick={handleGlobalClick}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
            <ExploreIcon />
            <Typography color="text.primary" aria-current="page">
              {t('map.navigation.global')}
            </Typography>
          </Box>
        </Link>
      )}

      {filters.mapType === 'Continent' && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
          <PublicIcon />
          <Typography color="text.primary" aria-current="page">
            {continent?.name ?? t('map.navigation.continent')}
          </Typography>
        </Box>
      )}

      {filters.mapType === 'Country' && (
        <Link href="#" underline="hover" onClick={handleContinentClick}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
            <PublicIcon />
            <Typography color="text.primary" aria-current="page">
              {continent?.name ?? t('map.navigation.continent')}
            </Typography>
          </Box>
        </Link>
      )}

      {filters.mapType === 'Country' && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
          <FlagIcon />
          <Typography color="text.primary" aria-current="page">
            {country?.name ?? t('map.navigation.country')}
          </Typography>
        </Box>
      )}
    </Breadcrumbs>
  );
}

export default MapBreadcrumbs;

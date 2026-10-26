import ExploreIcon from '@mui/icons-material/Explore';
import FlagIcon from '@mui/icons-material/Flag';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useExploreFilters } from '../../../hooks/filters/useExploreFilters';
import { useAppSelector } from '../../../store';
import { getContinentByCodeSelector } from '../../../store/selectors/continent-selector';
import { getCountryByCodeSelector } from '../../../store/selectors/country-selector';

function MapBreadcrumbs() {
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
            Global
          </Typography>
        </Box>
      )}
      {filters.mapType !== 'World' && (
        <Link href="#" underline="hover" onClick={handleGlobalClick}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
            <ExploreIcon />
            <Typography color="text.primary" aria-current="page">
              Global
            </Typography>
          </Box>
        </Link>
      )}

      {filters.mapType === 'Continent' && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
          <PublicIcon />
          <Typography color="text.primary" aria-current="page">
            {continent?.name}
          </Typography>
        </Box>
      )}

      {filters.mapType === 'Country' && (
        <Link href="#" underline="hover" onClick={handleContinentClick}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
            <PublicIcon />
            <Typography color="text.primary" aria-current="page">
              {continent?.name}
            </Typography>
          </Box>
        </Link>
      )}

      {filters.mapType === 'Country' && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
          <FlagIcon />
          <Typography color="text.primary" aria-current="page">
            {country?.name ?? 'Country'}
          </Typography>
        </Box>
      )}
    </Breadcrumbs>
  );
}

export default MapBreadcrumbs;

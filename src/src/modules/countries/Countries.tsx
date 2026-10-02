import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useCountryFilters } from '../../hooks/filters/useCountryFilters';
import { useAppDispatch } from '../../store';
import { fetchAllContinents } from '../../store/thunks/continent-thunks';
import { fetchCountries } from '../../store/thunks/country-thunks';
import Overview from './overview';

function Countries() {
  const { filters } = useCountryFilters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllContinents());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCountries(filters));
  }, [dispatch, filters]);

  return (
    <Box sx={{ height: '100%', width: '100%', minHeight: 0, minWidth: 0, display: 'flex', gap: 2 }}>
      <Box sx={{ width: '15%', flexShrink: 0 }}>TO DO</Box>
      <Box sx={{ minHeight: 0, minWidth: 0, flex: 1 }}>
        <Overview />
      </Box>
    </Box>
  );
}

export default Countries;

import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useContinentFilters } from '../../hooks/filters/useContinentFilters';
import { useAppDispatch } from '../../store';
import { fetchContinents } from '../../store/thunks/continent-thunks';
import Overview from './components/overview/Overview';

function Continents() {
  const { filters } = useContinentFilters();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContinents(filters));
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

export default Continents;

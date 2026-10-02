import { Box } from '@mui/material';
import { useEffect } from 'react';
import { getContinentsSelector } from '../../infrastructure/store/selectors/continent-selector';
import { useAppDispatch, useAppSelector } from '../../infrastructure/store/store';
import { fetchContinents } from '../../infrastructure/store/thunks/continent-thunks';
import type { IContinentQueryRequest } from '../../types/continent';

function Continents() {
  const dispatch = useAppDispatch();
  const continents = useAppSelector(getContinentsSelector);

  useEffect(() => {
    dispatch(fetchContinents({} as IContinentQueryRequest));
  }, [dispatch]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: '1' }}>Continents ({continents.length})</Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: '1' }}>
        {continents.map(() => (
          <Box>Row</Box>
        ))}
      </Box>
    </>
  );
}

export default Continents;

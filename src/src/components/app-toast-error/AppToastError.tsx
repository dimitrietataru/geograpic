import { Alert, Slide, Snackbar, type SlideProps, type SnackbarCloseReason } from '@mui/material';
import type { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { getContinentErrorSelector } from '../../store/selectors/continent-selector';
import { getCountryErrorSelector } from '../../store/selectors/country-selector';
import { setError as setContinentError } from '../../store/slices/continent-slice';
import { setError as setCountryError } from '../../store/slices/country-slice';

function AppToastError() {
  const dispatch = useAppDispatch();
  const continentError = useAppSelector(getContinentErrorSelector);
  const countryError = useAppSelector(getCountryErrorSelector);

  const error = continentError ?? countryError;

  const handleClose = (_event: SyntheticEvent | Event | null, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    if (continentError) {
      dispatch(setContinentError(null));
      return;
    }

    if (countryError) {
      dispatch(setCountryError(null));
      return;
    }
  };

  return (
    <Snackbar
      key={error}
      open={!!error}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      slots={{ transition: Slide }}
      slotProps={{ transition: { direction: 'left' } as SlideProps }}
    >
      <Alert
        severity="error"
        variant="filled"
        onClick={() => handleClose(null)}
        sx={{ width: '100%', cursor: 'pointer' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
}

export default AppToastError;

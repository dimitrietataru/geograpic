import { Box, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import AppTabPanel from '../../components/app-tab-panel';
import { useAppDispatch } from '../../store';
import { fetchAllContinents } from '../../store/thunks/continent-thunks';
import { fetchAllCountries } from '../../store/thunks/country-thunks';
import MapCountries from './map-countries';

function tabProps(index: number) {
  return {
    id: `app-tab-${index}`,
    'aria-controls': `app-tab-panel-${index}`,
  };
}

function MapExplore() {
  const [tab, setTab] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllContinents());
    dispatch(fetchAllCountries());
  }, [dispatch]);

  const onTabChange = (_event: unknown, tabValue: number) => {
    setTab(tabValue);
  };

  return (
    <Box sx={{ height: '100%', width: '100%', minHeight: 0, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%' }}>
        <Tabs value={tab} onChange={onTabChange} aria-label="map-explore">
          <Tab label="Continents" {...tabProps(0)} />
          <Tab label="Countries" {...tabProps(1)} />
        </Tabs>
      </Box>
      <AppTabPanel value={tab} index={0}>
        Continents
      </AppTabPanel>
      <AppTabPanel value={tab} index={1} sx={{ flex: 1, minHeight: 0, minWidth: 0 }}>
        <Box sx={[{ width: '100%', height: '100%', minHeight: 0 }]}>
          <MapCountries />
        </Box>
      </AppTabPanel>
    </Box>
  );
}

export default MapExplore;

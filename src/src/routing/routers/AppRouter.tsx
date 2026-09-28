import { BrowserRouter, Route, Routes } from 'react-router';
import AppContainer from '../../components/app-container/AppContainer';
import Cities from '../../modules/cities';
import Continents from '../../modules/continents';
import Countries from '../../modules/countries';
import Dashboard from '../../modules/dashboard';
import { Routes as AppRoutes } from '../routes';

function AppRouter() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path={AppRoutes.Dashboard} element={<Dashboard />} />
          <Route path={AppRoutes.Continents} element={<Continents />} />
          <Route path={AppRoutes.Countries} element={<Countries />} />
          <Route path={AppRoutes.Cities} element={<Cities />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default AppRouter;

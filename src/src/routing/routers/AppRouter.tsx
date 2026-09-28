import { BrowserRouter, Route, Routes } from 'react-router';
import AppContainer from '../../components/app-container/AppContainer';
import Dashboard from '../../modules/dashboard';

function AppRouter() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default AppRouter;

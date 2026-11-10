import { Provider } from 'react-redux';
import AppToastError from './components/app-toast-error';
import AppRouter from './routing/routers/AppRouter';
import store from './store';
import AppThemeProvider from './theme';

function App() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AppRouter />
        <AppToastError />
      </AppThemeProvider>
    </Provider>
  );
}

export default App;

import { Provider } from 'react-redux';
import AppRouter from './routing/routers/AppRouter';
import store from './store';
import AppThemeProvider from './theme';

function App() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </Provider>
  );
}

export default App;

import { Provider } from 'react-redux';
import store from './infrastructure/store/store.ts';
import AppRouter from './routing/routers/AppRouter';
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

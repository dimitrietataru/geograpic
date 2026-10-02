import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './infrastructure/store/store.ts';
import startup from './services/startup/index.ts';

const main = async (): Promise<void> => {
  await startup();

  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
};

void main();

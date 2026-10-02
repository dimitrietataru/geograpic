import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import startup from './services/startup/index.ts';

const main = async (): Promise<void> => {
  await startup();

  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

void main();

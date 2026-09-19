import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initTranslations } from './translations/index.ts';

const main = async (): Promise<void> => {
  await initTranslations();

  const root = createRoot(document.getElementById('root') as HTMLElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

void main();

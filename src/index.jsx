import { createRoot } from 'react-dom/client';
import App from '@/app/App.jsx';
import { StrictMode } from 'react';
import { HashRouter } from 'react-router';

const root = createRoot(document.body);
root.render(
  <StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </StrictMode>
);
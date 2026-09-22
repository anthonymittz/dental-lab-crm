import App from '@/app/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router';

const root = ReactDOM.createRoot(document.body);

root.render(
  <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </React.StrictMode>
);

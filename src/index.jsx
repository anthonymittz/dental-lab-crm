import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router';
// import App from '@/app/App.jsx';

const root = ReactDOM.createRoot(document.body);
root.render(
  <React.StrictMode>
  <HashRouter>
    {/* <App /> */}
    <div className="h-screen centered">App</div>
  </HashRouter>
  </React.StrictMode>
);
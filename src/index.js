import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './Styles/GlobalStylesheet';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <GlobalStyles />
      <App />
    </HashRouter>
  </React.StrictMode>
);

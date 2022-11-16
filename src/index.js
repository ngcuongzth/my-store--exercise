import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalProvider from './GlobalContext';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);



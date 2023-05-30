import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/dark-theme.css';
import './css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

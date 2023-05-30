import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import App from './App';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/dark-theme.css';
import './css/all.min.css';

ReactGA.initialize('G-JJ45TLL9SR');
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

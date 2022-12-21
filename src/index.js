import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import App from './App';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/all.min.css';

ReactGA.initialize('UA-133013455-2');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
); 

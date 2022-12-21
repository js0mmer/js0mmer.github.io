import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/all.min.css';

ReactGA.initialize('UA-133013455-2');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/all.min.css';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

const AppRouter = () => (
  <Router>
    <div className="app">
      <div className="transition"></div>
      <Route path="/" exact component={Home} />
      <Route path="/work-experience" component={WorkExperience} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
);

ReactGA.initialize('UA-133013455-2');
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

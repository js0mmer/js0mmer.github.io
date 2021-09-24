import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Error404 from './components/404';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/all.min.css';

const AppRouter = () => (
  <Router>
    <div className="app">
      <div className="transition"></div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

ReactGA.initialize('UA-133013455-2');
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

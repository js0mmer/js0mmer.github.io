import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Error404 from './components/404';
import './css/bootstrap.min.css';
import './css/main.css';
import './css/all.min.css';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
    document.querySelector('.transition').classList.add('out');
  }, [location]);

  return (
    <>
      <div className="transition"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

ReactGA.initialize('UA-133013455-2');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

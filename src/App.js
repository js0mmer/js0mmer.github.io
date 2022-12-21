import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeContext } from './theme-context';
import me from './images/me.jpg';

// 1 = fixed
const PARALLAX_AMOUNT = 4;

function App() {
  // google analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // background parallax
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);

      document.querySelector('body').style.backgroundPositionY = scrollTop / PARALLAX_AMOUNT + 'px';
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // dark theme
  const darkPref = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'true' : window.matchMedia("(prefers-color-scheme: dark)").matches; // use stored pref or system pref by default
  const [darkMode, setDarkMode] = useState(darkPref);

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }

    localStorage.setItem('theme', darkMode ? 'true' : 'false');
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ theme: darkMode, toggleTheme: () => setDarkMode(!darkMode) }}>
      <Nav />
      <div id="about" className="full home">
        <div className="container wrapper">
          <div className="card col-md-7">
            <img className="profile-picture center" src={me} alt="Me" />
            <div className="container">
              <h1 className="center">Jacob Sommer</h1>
              <h2 className="center">Student / Software Developer</h2>
              <p className="center">Hi, I'm Jacob! I'm a second-year at UC Irvine pursuing a BS in Computer Science. I've had a passion for technology ever since I was a child, first learning how to code at 11 years old by developing mods for Minecraft. Since then, I've learned many different programming languages and technologies through the hobby projects and school projects I've worked on over the past 9 years. Aside from coding, my other hobbies include photography, playing video games, building computers, and recently, playing the guitar. I am always eager to learn!</p>
              <div className="col-sm icons center">
                {/* eslint-disable-next-line */}
                <a className="fa-stack fa-2x" href="https://github.com/js0mmer" target="_blank" aria-label="github">
                  <span className="fab fa-github fa-stack-1x"></span>
                </a>
                {/* eslint-disable-next-line */}
                <a className="fa-stack fa-2x" href="https://www.linkedin.com/in/js0mmer/" target="_blank" aria-label="linkedin">
                  <span className="fab fa-linkedin fa-stack-1x"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="fa fa-chevron-down fa-2x" aria-hidden="true" onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth'})}></span>
      </div>
      <Projects />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
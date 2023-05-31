import React, { MouseEvent, useContext, useEffect, useState } from 'react';
import ThemeContext from '../theme-context';

interface LinkProps {
  href: string;
  children?: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  const { setExpanded } = useContext(NavContext);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)!.scrollIntoView({ behavior: 'smooth' });
    setExpanded(false);
  };
  
  return (
    <li className="nav-item">
      {href.startsWith('#') ?
        <a className="nav-link" href={href} onClick={handleClick}>{children}</a>
      :
        <a className="nav-link" href={href} target="_blank" rel="noreferrer">{children}</a>
      }
    </li>
  );
}

const NavContext = React.createContext<{ expanded: boolean, setExpanded: (expanded: boolean) => any }>({ expanded: false, setExpanded: () => {} });

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const [opaque, setOpaque] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setOpaque(document.documentElement.scrollTop > 0);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = (e: MouseEvent) => {
    e.preventDefault();
    setExpanded(expanded => !expanded);
  };

  const scrollTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <NavContext.Provider value={{ expanded: expanded, setExpanded: (expanded) => setExpanded(expanded) }}>
      <nav className={"navbar navbar-expand-lg" + (expanded ? ' navbar-expanded' : '') + (opaque ? ' navbar-opaque' : '')}>
        <div className="container">
          <a className="navbar-brand" onClick={scrollTop} href="/">
            <img src={theme === 'light' ? './favicon.png' : './favicon-white.png' } width="30" height="30" className="d-inline-block align-top" alt="home" />
          </a>
          <button className="nav-toggle" onClick={toggleNav} aria-label="menu">
            <span className="icon"></span>
          </button>
          <div className="pull-right collapse navbar-collapse d-flex flex-row-reverse">
            <ul className="navbar-nav">
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#photos">Photos</Link>
              <Link href="Resume.pdf">Resume</Link>
              <li className="nav-item theme-toggle">
                <span className={'fa fa-lg ' + (theme === 'light' ? 'fa-sun' : 'fa-moon')} onClick={toggleTheme}></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavContext.Provider>
  );
}

export default Nav;
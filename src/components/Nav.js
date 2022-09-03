import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const TRANSITION_TIME = 300; // ms

export function Link({active, to, className, title, children}) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    if (active) { // if clicking the tab linking to the current page
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      document.querySelector('.navbar').classList.remove('navbar-expanded');
      document.querySelector('body').style.overflowY = '';
      return;
    } 

    document.querySelector('.transition').classList.remove('out');

    setTimeout(() => {
      navigate(to);

      if (title) {
        document.title = title + ' | Jacob Sommer';
      }
    }, TRANSITION_TIME);
  }
  
  return <a href={to} className={className} onClick={handleClick}>{children}</a>;
}

const NAV_LINKS = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/projects",
    title: "Projects"
  },
  {
    href: "/Resume.pdf",
    title: "Resume",
    external: true
  },
  {
    href: "/contact",
    title: "Contact"
  }
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  componentDidMount() {
    if (this.props.active != null) {
      document.querySelector('.navbar-nav').children[this.props.active].className = 'nav-item active';
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      document.querySelector('.navbar').classList.add('navbar-white');
    } else {
      document.querySelector('.navbar').classList.remove('navbar-white');
    }
  }

  toggleNav(e) {
    e.preventDefault();
    document.querySelector('.navbar').classList.toggle('navbar-expanded');
    document.querySelector('body').style.overflowY = document.querySelector('.navbar').classList.contains('.navbar-expanded') ? 'hidden' : '';
  }

  isActive(link) {
    return this.props.active && link === NAV_LINKS[this.props.active];
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./favicon.png" width="30" height="30" className="d-inline-block align-top" alt="JS" />
          </Link>
          <button className="nav-toggle" onClick={this.toggleNav}>
            <span className="icon"></span>
          </button>
          <div className="pull-right collapse navbar-collapse d-flex flex-row-reverse">
            <ul className="navbar-nav">
              {NAV_LINKS.map(link => 
                <li key={link.href} className={'nav-item' + (this.isActive(link) ? ' active' : '')}>
                  {link.external ? 
                    <a active={this.isActive(link)} className="nav-link" href={link.href} target="_blank" rel="noreferrer">{link.title}</a>
                  : 
                    <Link active={this.isActive(link)} className="nav-link" to={link.href} title={link.title}>{link.title}</Link>
                  }
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
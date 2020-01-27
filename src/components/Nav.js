import React, { Component } from 'react';

export function Link(props) {
  function handleClick(e) {
    e.preventDefault();
    if (props.props && props.id === props.props.active) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      document.querySelector('.navbar').classList.remove('navbar-expanded');
      document.querySelector('body').style.overflowY = '';
      return;
    } else if (props.to.startsWith('/#') && (!props.props || props.props.active === 0)) {
      document.querySelector(props.to.substring(1)).scrollIntoView({ behavior: 'smooth', block: window.innerWidth <= 800 ? 'start' : 'center' });
      document.querySelector('.navbar').classList.remove('navbar-expanded');
      document.querySelector('body').style.overflowY = '';
      return;
    }
    
    document.querySelector('.transition').classList.remove('out');

    if (props.props) {
      props.props.transition(props.to);
    } else {
      props.transition(props.to);
    }
  }
  
  return <a href={props.props && props.props.active && props.id === props.props.active ? '#' : props.to} className={props.className} onClick={handleClick}>{props.children}</a>;
}

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.navbarNav = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    if (this.props.active != null) {
      this.navbarNav.current.children[this.props.active].className = 'nav-item active';
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 0) {
      this.navbar.current.classList.add('navbar-white');
    } else {
      this.navbar.current.classList.remove('navbar-white');
    }
  }

  toggleNav(e) {
    e.preventDefault();
    document.querySelector('.navbar').classList.toggle('navbar-expanded');
    document.querySelector('body').style.overflowY = document.querySelector('.navbar').classList.contains('.navbar-expanded') ? 'hidden' : '';
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg" ref={this.navbar}>
        <div className="container">
          <Link props={this.props} id={0} className="navbar-brand" to="/">
            <img src="./favicon.png" width="30" height="30" className="d-inline-block align-top" alt="JS" />
          </Link>
          <button className="nav-toggle" onClick={this.toggleNav}>
            <span className="icon"></span>
          </button>
          <div className="pull-right collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav" ref={this.navbarNav}>
              <li className="nav-item">
                <Link props={this.props} id={0} className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link props={this.props} id={1} className="nav-link" to="/#about">About</Link>
              </li>
              <li className="nav-item">
                <Link props={this.props} id={2} className="nav-link" to="work-experience">Work Experience</Link>
              </li>
              <li className="nav-item">
                <Link props={this.props} id={3} className="nav-link" to="projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link props={this.props} id={4} className="nav-link" to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
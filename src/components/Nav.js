import React, { Component } from 'react';

export function closeNav() {
  document.querySelector('body').classList.remove('menu-is-active');
  document.querySelector('.menu').classList.remove('active');
  document.querySelectorAll('.menu ul li').forEach((element, i) => {
    element.classList.remove('animated')
    element.classList.remove('slideInLeft')
  });
}

export function NavToggle(props) {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('menu-is-active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelectorAll('.menu ul li').forEach((element, i) => setTimeout(() => {
      element.classList.toggle('animated')
      element.classList.toggle('slideInLeft')
    }, 75 * i));
  }

  return (
    <button className="nav-toggle" onClick={handleClick}>
      <span className="icon"></span>
    </button>
  );
}

export function Link(props) {
  function handleClick(e) {
    e.preventDefault();
    if (props.props && props.id === props.props.active) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      return;
    } else if (props.to.startsWith('/#') && props.props.active === 0) {
      document.querySelector(props.to.substring(1)).scrollIntoView({ behavior: 'smooth', block: window.innerWidth <= 800 ? 'start' : 'center' });
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
    this.navbarNav = React.createRef();
  }

  componentDidMount() {
    if (this.props.active != null)
      this.navbarNav.current.children[this.props.active].className='nav-item active';
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-fixed">
        <div className="container">
          <Link props={this.props} id={0} className="navbar-brand" to="/">
            <img src="./favicon.png" width="30" height="30" class="d-inline-block align-top" alt="" />
            {/* JS */}
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="pull-right collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
            <ul className="navbar-nav" ref={this.navbarNav}>
              <li className="nav-item">
                <Link props={this.props} id={0} className="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link props={this.props} id={1} className="nav-link" to="/#about">About</Link>
              </li>
              <li class="nav-item">
                <Link props={this.props} id={2} className="nav-link" to="work-experience">Work Experience</Link>
              </li>
              <li class="nav-item">
                <Link props={this.props} id={3} className="nav-link" to="projects">Projects</Link>
              </li>
              <li class="nav-item">
                <Link props={this.props} id={4} className="nav-link" to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link, AnchorLink } from './Nav';

const btn = {
  margin: '35px auto'
}

function NavToggle() {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector('.nav-toggle').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.construction').classList.toggle('blur');
  }

  return (
    <button className="nav-toggle" onClick={handleClick}>
      <span className="icon"></span>
    </button>
  );
}

function closeNav() {
  document.querySelector('.nav-toggle').classList.toggle('open');
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.construction').classList.toggle('blur');
}

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false }
  }

  componentDidMount() {
    document.title = 'Work Experience | Jacob Sommer';
    document.querySelector('.transition .icon').style.opacity = 0;
    document.querySelector('.transition').style.top = 'auto';
    document.querySelector('.transition').style.bottom = '-50px';
    document.querySelector('.transition').style.height = 0;
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <NavToggle />
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" transition={this.transition}>Home</Link>
            </li>
            <li>
              <Link to="/?about" transition={this.transition}>About Me</Link>
            </li>
            <li>
              <a href="Resume.pdf" target="_blank">Resume</a>
            </li>
            <li>
              <AnchorLink closeNav={closeNav}>Work Experience</AnchorLink>
            </li>
            <li>
              <Link to="projects" transition={this.transition}>Projects</Link>
            </li>
            <li>
              <Link to="/?contact" transition={this.transition}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="construction flex-center">
          <h1>Under Construction</h1>
          <div className="gears">
            <img src="gears.svg" />
          </div>
          <Link to="/" className="home-btn button btn-red" style={btn} transition={this.transition}>Return to Home</Link>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
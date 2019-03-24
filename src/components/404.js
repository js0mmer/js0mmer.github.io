import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from './Nav';

function NavToggle() {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector('.nav-toggle').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.banner-404').classList.toggle('blur');
  }

  return (
    <button className="nav-toggle" onClick={handleClick}>
      <span className="icon"></span>
    </button>
  );
}

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false }
  }

  componentDidMount() {
    document.title = "404 | Jacob Sommer";

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
              <Link to="work-experience" transition={this.transition}>Work Experience</Link>
            </li>
            <li>
              <Link to="projects" transition={this.transition}>Projects</Link>
            </li>
            <li>
              <Link to="/?contact" transition={this.transition}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div class="jumbotron banner-404">
          <div>
            <h1>Error 404<br />Page Not Found</h1>
            <Link to="/" className="home-btn button btn-red" transition={this.transition}>Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
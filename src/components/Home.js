import React, { Component } from 'react';
import Nav from './Nav';
import me from '../images/me.jpg';

class Home extends Component {
  componentDidMount() {
    document.title = 'Jacob Sommer';
  }

  render() {
    return (
      <div>
        <Nav active={0} transition={this.transition} />
        <div className="jumbotron full home">
          <div className="container wrapper">
            <div className="card col-md-7">
              <img className="profile-picture center" src={me} alt="Me" />
              <div className="container">
                <h4 className="center">Jacob Sommer</h4>
                <p className="center subheading">Student / Full-Stack Developer</p>
                <p className="center">Hi, I'm Jacob. I'm a full-stack developer from the San Francisco Bay Area with 9 years of coding experience. Outside of coding, I enjoy photography, PC gaming, and watching YouTube videos. Currently, I am a second-year at UC Irvine pursuing a BS in Computer Science.</p>
                <div className="col-sm icons center">
                  {/* eslint-disable-next-line */}
                  <a className="fa-stack fa-2x" href="mailto:jacob.sommer@comcast.net" target="_blank">
                    <span className="fa fa-circle fa-stack-2x"></span>
                    <span className="fa fa-envelope fa-stack-1x"></span>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a className="fa-stack fa-2x" href="https://github.com/js0mmer" target="_blank">
                    <span className="fa fa-circle fa-stack-2x"></span>
                    <span className="fab fa-github fa-stack-1x"></span>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a className="fa-stack fa-2x" href="https://www.linkedin.com/in/js0mmer/" target="_blank">
                    <span className="fa fa-circle fa-stack-2x"></span>
                    <span className="fab fa-linkedin fa-stack-1x"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

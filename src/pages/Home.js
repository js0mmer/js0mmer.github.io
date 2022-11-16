import React, { Component } from 'react';
import Nav from '../components/Nav';
import me from '../images/me.jpg';

class Home extends Component {
  componentDidMount() {
    document.title = 'Jacob Sommer';
  }

  render() {
    return (
      <>
        <Nav active={0} />
        <div className="jumbotron full home">
          <div className="container wrapper">
            <div className="card col-md-7">
              <img className="profile-picture center" src={me} alt="Me" />
              <div className="container">
                <h4 className="center">Jacob Sommer</h4>
                <p className="center subheading">Student / Full-Stack Developer</p>
                <p className="center">Hi, I'm Jacob! I'm a second-year at UC Irvine pursuing a BS in Computer Science. I've had a passion for technology ever since I was a child, first learning how to code at 11 years old by developing mods for Minecraft. Since then, I've learned many different programming languages and technologies through the hobby projects and school projects I've worked on over the past 9 years. Aside from coding, my other hobbies include photography, playing video games, building computers, and recently, playing the guitar. I am always eager to learn!</p>
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
      </>
    );
  }
}

export default Home;

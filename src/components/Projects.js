import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';
import { NavToggle, Link, AnchorLink } from './Nav';
import Parallax from './Parallax';
import Footer from './Footer';
import scratch from '../images/scratch.jpg';
import projComp from '../images/project-compound.jpg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Projects | Jacob Sommer';
    window.scrollTo(0, 0);
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
        <NavToggle white={true} />
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
              <AnchorLink>Projects</AnchorLink>
            </li>
            <li>
              <Link to="/?contact" transition={this.transition}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Parallax className="jumbotron banner projects-bg">
          <h1>Projects</h1>
        </Parallax>
        <main className="container">
          <section id="projects" className="col-md-12">
            <article className="row">
              <div className="col-md-5">
                <img className="red-border" src={scratch} alt="Scratch" />
              </div>
              <div className="col-md-7">
                <h3>Scratch Project</h3>
                <h5>CSE (Computer Science/Software Engineering)</h5>
                <h5>August 29th - September 8th, 2017</h5>
                <p>The objective of this project was to create a bug-free game that had level progression. My role in this project was a developer. My group and I created a game where two players had to compete to finish a maze. The mazes became more difficult as the game progressed and each one was completed. The two players gained points by collecting "gems" and finishing the mazes quickly. The winner is the player with the highest score after completing all of the mazes. We developed our brainstorming skills by coming up with ideas and using a flow chart to map them. We I also developed our logging and documentation skills by keeping a daily log of what happened each day and adding comments to our code explaining what each piece does. During this project, we had to overcome some limitations of Scratch. Scratch only allows one user at a time to be working on the same project. We solved this issue by creating copies of the game uses Scratch’s remix feature and working on different aspects and features of our game. We each coded in only certain sprites. At the end of the day, we assembled all of the code in our sprites together uses Scratch’s backpack feature. This allowed us to be more efficient as everyone in the group could contribute code to the game simultaneously. You can find the daily log and documentation <a className="link" href="Scratch_Project.pdf" target="_blank">here</a>.</p>
              </div>
            </article>
            <article className="row">
              <div className="col-md-7">
                <h3>Hangman Project</h3>
                <h5>CSE (Computer Science/Software Engineering)</h5>
                <h5>January 24th - February 2nd, 2018</h5>
                <p>The objective of this project was to create a themed hangman game that was played in the terminal. My role in this project was a developer. My partner and I created a Spongebob-themed hangman game. All of the words were spongebob related and we included some ASCII art to make the game more aesthetic. We developed our problem-solving skills by finding ways around issues we had when coding our game. During this project we had to overcome limitations of Cloud 9, the main one being that it is a non-GUI environment. Everything had to be played in the terminal but we were still able to show some images using ASCII art. You can download the project <a className="link" href="https://repl.it/@js0mmer/Hangman.zip" download="Hangman.zip">here</a>. It is made for Python 2.7.</p>
              </div>
              <div className="col-md-5">
                <div className="embed-responsive embed-responsive-4by3 red-border">
                  <iframe title="Hangman" className="embed-responsive-item" height="500px" width="100%" src="https://repl.it/@js0mmer/Hangman?lite=true" scrolling="no" allowtransparency="true" allowFullScreen={true} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
                </div>
              </div>
            </article>
            <article className="row">
              <div className="col-md-5">
                <img className="red-border" src={projComp} alt="Project Compound" />
              </div>
              <div className="col-md-7">
                <h3>Project Compound</h3>
                <h5>POE (Principles of Engineering)</h5>
                <h5>August 30th - September 7th, 2018</h5>
                <p>The objective of this project was to create a compound machine that performed a basic task. My role was building a 2nd class lever and helping out on documentation. My group created a machine that pours dog food into a bowl. The input was provided by spinning a wheel which acted like a crank for a simple gear train. The axle of the output gear in the gear train drove another wheel which had a string wrapped around it. This caused the wheel to pull the string when it was spun. The string ran over a pulley and connected to the far end of our lever, next to the cup of dog food. When the string was pulled, it rotated the lever 180 degrees and dumped the dog food into a bowl placed below the dropping point. During the project we ran into issues early on. We found that our small driver gear required a lot of rotations. Our solution was to replace it with a larger gear which ended up requiring us to rebuild the entire gear train because there wasn’t enough space between the bottom of the machine and the 2nd gear. You can view the full project documentation <a className="link" href="https://drive.google.com/open?id=1XUbSIuFKQyM65QWXNIqzLKFKb0IdVRaF8hsZDxw60-I" target="_blank" rel="noopener noreferrer">here</a> for more information.</p>
              </div>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Projects;
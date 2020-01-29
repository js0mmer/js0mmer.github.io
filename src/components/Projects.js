import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import scratch from './projects/scratch.json';
import hangman from './projects/hangman.json';
import projectCompound from './projects/project-compound.json';
import aerodynamicDesign from './projects/aerodynamic-design.json';
import magpie from './projects/magpie.json';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // TODO: View project
  }

  render() {
    return (
      <article className="card" onClick={this.onClick}>
        <img className="card-img-top" src={'/images/' + this.props.id + '.' + this.props.src.imgType} alt={this.props.src.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.src.title}</h5>
          <p className="card-text">{this.props.src.description}</p>
        </div>
      </article>
    );
  }
}

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
    document.querySelector('.transition').classList.add('out');
    document.querySelector('body').classList.remove('menu-is-active');
    
    this.setupCards();
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  setupCards() {
    // TODO: setup cards so they are in order chronilogically on both desktop and mobile
    // do enlarging and shrinking animation by changing width & height with transitions
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <Nav active={3} transition={this.transition} />
        <Header>Projects</Header>
        <section id="projects" className="container">
          {/* <div className="row">
            <div className="col-lg-6">
              <ProjectCard id="scratch" src={scratch} />
              <ProjectCard id="hangman" src={hangman} />
              <ProjectCard id="project-compound" src={projectCompound} />
            </div>
            <div className="col-lg-6">
              <ProjectCard id="aerodynamic-design" src={aerodynamicDesign} />
              <ProjectCard id="magpie" src={magpie} />
            </div>
          </div> */}
          <article className="row">
            <div className="col-md-5">
              <img className="red-border" src="/images/scratch.jpg" alt="Scratch" />
            </div>
            <div className="col-md-7">
              <h3>Scratch Project</h3>
              <h5>CSE (Computer Science/Software Engineering)</h5>
              <h5>August 29th - September 8th, 2017</h5>
              <p>The objective of this project was to create a bug-free game that had level progression. My role in this project was a developer. My group and I created a game where two players had to compete to finish a maze. The mazes became more difficult as the game progressed and each one was completed. The two players gained points by collecting "gems" and finishing the mazes quickly. The winner is the player with the highest score after completing all of the mazes. We developed our brainstorming skills by coming up with ideas and using a flow chart to map them. We I also developed our logging and documentation skills by keeping a daily log of what happened each day and adding comments to our code explaining what each piece does. During this project, we had to overcome some limitations of Scratch. Scratch only allows one user at a time to be working on the same project. We solved this issue by creating copies of the game uses Scratch’s remix feature and working on different aspects and features of our game. We each coded in only certain sprites. At the end of the day, we assembled all of the code in our sprites together uses Scratch’s backpack feature. This allowed us to be more efficient as everyone in the group could contribute code to the game simultaneously. You can find the <a className="link" href="Scratch_Project.pdf" target="_blank">daily log and documentation</a>.</p>
            </div>
          </article>
          <article className="row">
            <div className="col-md-7">
              <h3>Hangman Project</h3>
              <h5>CSE (Computer Science/Software Engineering)</h5>
              <h5>January 24th - February 2nd, 2018</h5>
              <p>The objective of this project was to create a themed hangman game that was played in the terminal. My role in this project was a developer. My partner and I created a Spongebob-themed hangman game. All of the words were spongebob related and we included some ASCII art to make the game more aesthetic. We developed our problem-solving skills by finding ways around issues we had when coding our game. During this project we had to overcome limitations of Cloud 9, the main one being that it is a non-GUI environment. Everything had to be played in the terminal but we were still able to show some images using ASCII art. You can <a className="link" href="https://repl.it/@js0mmer/Hangman.zip" download="Hangman.zip">download the project</a> and take a look at it yourself. It is made for Python 2.7.</p>
            </div>
            <div className="col-md-5">
              <div className="embed-responsive embed-responsive-4by3 red-border">
                <iframe title="Hangman" className="embed-responsive-item" height="500px" width="100%" src="https://repl.it/@js0mmer/Hangman?lite=true" scrolling="no" allowtransparency="true" allowFullScreen={true} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
              </div>
            </div>
          </article>
          <article className="row">
            <div className="col-md-5">
              <img className="red-border" src="/images/project-compound.jpg" alt="Project Compound" />
            </div>
            <div className="col-md-7">
              <h3>Project Compound</h3>
              <h5>POE (Principles of Engineering)</h5>
              <h5>August 30th - September 7th, 2018</h5>
              <p>The objective of this project was to create a compound machine that performed a basic task. My role was building a 2nd class lever and helping out on documentation. My group created a machine that pours dog food into a bowl. The input was provided by spinning a wheel which acted like a crank for a simple gear train. The axle of the output gear in the gear train drove another wheel which had a string wrapped around it. This caused the wheel to pull the string when it was spun. The string ran over a pulley and connected to the far end of our lever, next to the cup of dog food. When the string was pulled, it rotated the lever 180 degrees and dumped the dog food into a bowl placed below the dropping point. During the project we ran into issues early on. We found that our small driver gear required a lot of rotations. Our solution was to replace it with a larger gear which ended up requiring us to rebuild the entire gear train because there wasn’t enough space between the bottom of the machine and the 2nd gear. You can view the full project <a className="link" href="https://drive.google.com/open?id=1XUbSIuFKQyM65QWXNIqzLKFKb0IdVRaF8hsZDxw60-I" target="_blank" rel="noopener noreferrer">documentation</a> for more information.</p>
            </div>
          </article>
          <article className="row">
            <div className="col-md-7">
              <h3>Aerodynamic Design</h3>
              <h5>POE (Principles of Engineering)</h5>
              <h5>January 8th - January 28th, 2019</h5>
              <p>The objective of this project was to design paper prototypes of projectiles to understand which designs produce projectiles that fly the furthest. Each of the members in my group, including myself, was responsible for designing two projectiles and creating prototypes using only paper products and tape. The projectiles were fitted onto a PVC pipe and launched with a pressure of 75 psi. My first design was a simple design with a long paper body, a short cone, and four curved fins at the end of it. This design was not very successful, it flew a measly 7 yards. However, after analyzing what went wrong and observing other people’s launches, I was able to design a rocket that performed much better. My second design flew 122 yards. I found that a tight fit around the PVC pipe was necessary to keep the air from escaping. I also found that smaller fins were better because they were a lot sturdier and did not flop and skew the flight path. I ended up using 3 fins instead of 4 since I learned that would decrease the amount of drag. Additionally, I learned that it is necessary to keep the projectile’s centroid, center of mass, at its center of geometry. On my first design, it was too far back so it flipped and fell straight down. On my second design, I used the combination of 3 smaller fins and a layered cone, made out of card stock, to bring more mass to the front of the projectile and push the centroid forward. This way the projectile would not flip over and instead, it would fly in a nice arc. You can view the full project <a href="https://docs.google.com/document/d/1FTdER9cB3btk29j8Muf68F-MoZCXfV6ldJkELkzjiAs/edit?usp=sharing" className="link" target="_blank" rel="noopener noreferrer">documentation</a> for more information.</p>
            </div>
            <div className="col-md-5">
              <img className="red-border" src="/images/aerodynamic-design.jpg" alt="Aerodynamic Project" />
            </div>
          </article>
          <article className="row">
            <div className="col-md-5">
              <img className="red-border" src="/images/magpie.jpg" alt="Magpie" />
            </div>
            <div className="col-md-7">
              <h3>Magpie</h3>
              <h5>CSA (AP Computer Science Applications)</h5>
              <h5>November 4th - November 12th, 2019</h5>
              <p>For this project, the objective was to create a functional chatbot that was as realistic as you could make it. It also had to be unique from the rest of the class in some way and be focused on a certain topic or have a certain personality. My group of three created a chatbot that mimics the speech pattern of Yoda from Star Wars. Yoda has a very unique speech pattern and we thought it would be entertaining to try and mimic that. We had a given set of requirements that we had to carry over from our template chatbot we had been developing the past few days. These included simple questions such as “How many brothers do you have?” if the user mentions their siblings. In addition we had to add many more phrases that could be recognized and appropriate reactions by recognizing certain terms in the input. To extend further on the project, I decided to incorporate the natural language processing library wit.ai. Wit.ai is able to take an input and identify the intent of it as well as other traits by training it. For this chatbot, I trained wit.ai to be able to recognize compliments. I train the bot by manually entering phrases such as “you are nice”, “you are kind”, and “how thoughtful of you” so that eventually the bot was able to recognize different phrases that were also compliments. I did this for a variety of different intents such as compliments and insults. The Java code makes a GET request to the API when no other response in the code fits and the JSON object returned tells the code the intent of the user’s input. From there, a fitting response is chosen using a switch statement. You can view the <a href="https://docs.google.com/document/d/1HeAVF-roVqSm-oUJYFKFya0-TEg_9Qk6Y3QBJNZg6l0/edit?usp=sharing" className="link" target="_blank" rel="noopener noreferrer">documentation</a> and the <a className="link" href="https://github.com/js0mmer/magpie" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more information.</p>
            </div>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Projects;
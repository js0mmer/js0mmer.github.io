import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Typist from 'react-typist';
import { Redirect } from 'react-router-dom';
import Nav, { Link } from './Nav';
import Parallax from './Parallax';
import Footer from './Footer';
import me from '../images/me.jpg';
import Particles from 'react-particles-js';
import particlesConfig from '../particlesjs-config.json';
import '../css/animate.min.css';

function Typing(props) {
  if (props.firstLaunch) {
    return (
      <h5>
        <Typist cursor={
          {
            show: true,
            blink: true,
            element: '',
            hideWhenDone: true,
            hideWhenDoneDelay: 100,
          }
        } stdTypingDelay={0}>
          <Typist.Delay ms={550} />
          <span>Student | </span>
          <Typist.Delay ms={500} />
          Software Developer
        </Typist>
      </h5>
    );
  } else {
    return <h5 style={props.style}>Student | Software Developer</h5>
  }
}

function SendBtn() {
  function handleClick() {
    if (document.querySelector('input[type=text]').value.length > 0 &&
      document.querySelector('textarea').value.length > 0 &&
      document.querySelector('input[type=email]').value.length > 0 &&
      document.querySelector('input[type=email]').value.includes("@") &&
      document.querySelector('input[type=email]').value.split("@")[1].length > 0)
      document.querySelector('.send-btn').classList.add('sending');
  }

  return <button type="submit" className="send-btn button btn-red" onClick={handleClick}>Send <span className="fa fa-paper-plane"></span></button>;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { redirect: false, firstLaunch: true }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Jacob Sommer';
    window.addEventListener('scroll', this.handleScroll);

    if (window.location.href.includes('#')) {
      document.getElementById(window.location.href.split('#')[1]).scrollIntoView({ behavior: 'smooth', block: window.innerWidth <= 800 ? 'start' : 'center' });
    } else window.scrollTo(0, 0);

    if (sessionStorage.getItem('firstLaunch') != null) {
      this.setState({ firstLaunch: false });
    } else {
      sessionStorage.setItem('firstLaunch', 'true');
    }

    this.arrow = document.querySelector('.fa-chevron-down');
    this.arrow.style.opacity = document.documentElement.scrollTop > 0 ? 0 : 1;

    if (this.state.firstLaunch) {
      this.profilePic = document.querySelector('.profile-picture');
      this.aboutH1 = document.querySelector('#about h1');
      this.contactH1 = document.querySelector('#contact h1');
      this.form = document.querySelector('form');
    }

    document.querySelector('.transition').classList.add('out');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var scrollTop = document.documentElement.scrollTop;
    this.arrow.style.opacity = scrollTop > 0 ? 0 : 1;

    if (this.state.firstLaunch) {
      var scrollBottom = scrollTop + window.innerHeight;

      if (scrollBottom >= this.profilePic.offsetTop) this.profilePic.classList.add('animated', 'zoomIn');
      if (scrollBottom >= this.aboutH1.offsetTop) this.aboutH1.classList.add('animated', 'fadeInDown');
      if (scrollBottom >= this.contactH1.offsetTop) this.contactH1.classList.add('animated', 'fadeInDown');
      if (scrollBottom >= this.form.offsetTop) this.form.classList.add('animated', 'fadeInLeft');
      if (scrollBottom >= document.querySelector('#about-me-p p').offsetTop) document.querySelectorAll('#about-me-p p').forEach(el => el.classList.add('animated', 'fadeIn'));
    }
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <Nav active={0} transition={this.transition} />
        <Parallax className="home">
          <div className="row">
            <div className="col-xl-6">
              <div className="text">
                <h1>Jacob Sommer</h1>
                <Typing firstLaunch={this.state.firstLaunch} />
              </div>
            </div>
            <div className="col-xl-6 particles">
              <Particles height="50vh" width="30vw" params={particlesConfig} />
            </div>
          </div>
          <Link to="/#about" className="fa fa-chevron-down" />
        </Parallax>
        <section id="about" className="container">
          <div className="col-md-12">
            <div className="row">
              <img className="profile-picture center" src={me} alt="Me" />
            </div>
            <div className="row">
              <div id="about-me-p">
                <h1 className="center">About Me</h1>
                <p>Hello, I am Jacob, a student with a passion for technology. I plan to be a Software Developer. Currently, I am currently a senior in high school and I have been taking as many computer science related electives at my school as I can. I am eager to learn more about computers. I am interested in majoring in Computer Science in college. I am also a member of Dublin High School’s Engineering and Design Academy.</p>
                <p>I have been coding for seven years. I am a full-stack developer and I know several different coding languages. I have experience with graphics design, animation, and video editing. Four years ago I built my own computer and three years ago I built a computer for my brother. I am a Principal’s Honor Roll student with a 4.19 cumulative GPA. Last year I took AP Computer Science Applications and sophomore year I took Honors Principles of Engineering.</p>
                <p>I am always exploring different languages and frameworks and working on new projects individually. Some of the languages I know include Java, JavaScript, React, Express.js, SQL, Python, and C#. I also have experience developing games with Unity and I have experience with web development. Freshman year I took the Computer Science/Software Engineering class at my school and I completed several projects in that course where I collaborated with other people to code a game or program. Additionally I developed games and programs and gave presentations in groups in my AP Computer Science Applications class last year. I also volunteered to coordinate a git workflow and manage all merges for a class-wide project in AP CSA. Last year, a couple of friends and I started a club called Augmented Video Games Club where we explore the possibilities of creating augmented reality games using real robots and RC vehicles.</p>
                <p>Coding is one of my favorite activities. I am constantly exploring new languages and working on personal projects in my free time. Feel free to explore the rest of my website and/or contact me if you have any offers or requests. Thank you for visiting my portfolio.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="small-banner workexp-bg">
          <h2>Work Experience</h2>
          <Link to="work-experience" className="view-btn button btn-black" transition={this.transition}>Click to View</Link>
        </div>
        <div className="small-banner projects-bg">
          <h2>Projects</h2>
          <Link to="projects" className="view-btn button btn-black" transition={this.transition}>Click to View</Link>
        </div>
        <section id="contact" className="container flex-center">
          <h1>Contact</h1>
          <form className="flex-center" action="https://formspree.io/jacob.sommer@comcast.net" method="POST">
            <div>
              <input type="text" name="Name" placeholder="Your name" required />
              <span className="underline"></span>
            </div>
            <div>
              <input type="email" name="Mail" placeholder="Your email" required />
              <span className="underline"></span>
            </div>
            <div>
              <textarea name="Message" placeholder="Your message" required></textarea>
              <span className="underline"></span>
            </div>
            <SendBtn />
          </form>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
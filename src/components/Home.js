import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Typist from 'react-typist';
import { Redirect } from 'react-router-dom';
import { NavToggle, Link, AnchorLink } from './Nav';
import Parallax from './Parallax';
import Footer from './Footer';
import me from '../images/me.jpg';
import '../css/animate.min.css';

function BannerText(props) {
  if (props.firstLaunch) {
    return (
      <h1>
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
          <span>Hi. </span>
          <Typist.Delay ms={500} />
          I'm Jacob.
        </Typist>
      </h1>
    );
  } else {
    return <h1>Hi. I'm Jacob.</h1>
  }
}

function SendBtn() {
  function handleClick() {
    if (document.querySelector('input[type=text]').value.length > 0 &&
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
    this.handleScroll = this.handleScroll.bind(this);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false, firstLaunch: true }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Jacob Sommer';
    window.addEventListener('scroll', this.handleScroll);

    if (window.location.href.includes('?')) document.getElementById(window.location.href.split('?')[1]).scrollIntoView({ behavior: 'smooth', block: window.innerWidth <= 800 ? 'start' : 'center' });

    if (sessionStorage.getItem('alreadyLaunched') != null) {
      this.setState({ firstLaunch: false });
    } else {
      sessionStorage.setItem('alreadyLaunched', 'true');
      this.setState({ firstLaunch: true });
    }

    this.arrow = document.querySelector('.fa-chevron-down');
    this.arrow.style.opacity = document.documentElement.scrollTop > 0 ? 0 : 1;

    if (this.state.firstLaunch) {
      this.profilePic = document.querySelector('.profile-picture');
      this.aboutH1 = document.querySelector('#about h1');
      this.contactH1 = document.querySelector('#contact h1');
      this.form = document.querySelector('form');
    }

    document.querySelector('.transition').style.top = 'auto';
    document.querySelector('.transition').style.bottom = '-50px';
    document.querySelector('.transition').style.height = 0;
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
    }
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
              <AnchorLink>Hom<span className="no-space">e</span></AnchorLink>
            </li>
            <li>
              <AnchorLink to="#about">About M<span className="no-space">e</span></AnchorLink>
            </li>
            <li>
              <a href="Resume.pdf" target="_blank">Resum<span className="no-space">e</span></a>
            </li>
            <li>
              <Link to="work-experience" transition={this.transition}>Work Experienc<span className="no-space">e</span></Link>
            </li>
            <li>
              <Link to="projects" transition={this.transition}>Project<span className="no-space">s</span></Link>
            </li>
            <li>
              <AnchorLink to="#contact">Contac<span className="no-space">t</span></AnchorLink>
            </li>
          </ul>
        </nav>
        <Parallax className="jumbotron banner home-bg">
          <BannerText firstLaunch={this.state.firstLaunch} />
          <AnchorLink to="#about" className="fas fa-chevron-down"></AnchorLink>
        </Parallax>
        <section id="about" className="container">
          <div className="col-md-12">
            <div className="row">
              <img className="profile-picture center" src={me} alt="Me" />
            </div>
            <div className="row">
              <h1 className="center">About Me</h1>
              <div id="about-me-p">
                <p>Hello, I am Jacob, a student with a passion for technology. I plan to be a Software Developer. I am currently a junior in high school and I have been taking as many computer science related electives at my school as I can and plan to take more. I am eager to learn more about computers. I am interested in majoring in Computer Science in college. I am also a part of Dublin High School’s Engineering and Design Academy.</p>
                <p>I have been coding for nearly six years. I am a full-stack developer. I know several different coding languages. I have experience with graphics design, animation, and video editing. I built my own computer two years ago and I built a computer for my brother last year. I am a Principal’s Honor Roll student with a 4.33 GPA. I am currently taking AP Computer Science Applications.</p>
                <p>I am always exploring different languages and frameworks and working on new projects individually. Some of the languages I know include Java, JavaScript, SQL, Python, and C#. I also have experience developing games with Unity. I have created a few websites. Freshman year I took the Computer Science/Software Engineering class at my school and I completed several projects in that course where I collaborated with other people to code a game or program. This year, a couple of friends and I started a club called Augmented Video Games Club where we plan to explore the possibilities of creating augmented reality games using real robots and RC vehicles.</p>
                <p>Coding is one of my favorite activities. I am constantly exploring new languages and working on personal projects in my free time. Feel free to explore the rest of my website and/or contact me if you have any offers or requests. Thank you for visiting my portfolio.</p>
              </div>
            </div>
          </div>
        </section>
        <Parallax className="small-banner workexp-bg" offsetY={550}>
          <h2>Work Experience</h2>
          <Link to="work-experience" className="view-btn button btn-white" transition={this.transition}>Click to View</Link>
        </Parallax>
        <Parallax className="small-banner projects-bg" offsetY={1000}>
          <h2>Projects</h2>
          <Link to="projects" className="view-btn button btn-white" transition={this.transition}>Click to View</Link>
        </Parallax>
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
              <textarea name="Message" placeholder="Your message"></textarea>
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
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Typist from 'react-typist';
import { Redirect } from 'react-router-dom';
import Nav, { Link } from './Nav';
import Parallax from './Parallax';
import Footer from './Footer';
import me from '../images/me.jpg';
import Particles from 'react-particles-js';
import '../css/animate.min.css';

function Typing(props) {
  if (props.firstLaunch) {
    return (
      <h5 style={props.style}>
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
    document.querySelector('.transition').style.top = 'auto';
    document.querySelector('.transition').style.bottom = '-50px';
    document.querySelector('.transition').style.height = 0;
    document.querySelector('body').classList.remove('menu-is-active');
    window.addEventListener('scroll', this.handleScroll);

    if (window.location.href.includes('#')) {
      document.getElementById(window.location.href.split('#')[1]).scrollIntoView({ behavior: 'smooth', block: window.innerWidth <= 800 ? 'start' : 'center' });
    } else window.scrollTo(0, 0);

    if (sessionStorage.getItem('alreadyLaunched') != null) {
      this.setState({ firstLaunch: false });
    } else {
      sessionStorage.setItem('alreadyLaunched', 'true');
      this.setState({ firstLaunch: true });
    }

    // this.arrow = document.querySelector('.fa-chevron-down');
    // this.arrow.style.opacity = document.documentElement.scrollTop > 0 ? 0 : 1;

    if (this.state.firstLaunch) {
      this.profilePic = document.querySelector('.profile-picture');
      this.aboutH1 = document.querySelector('#about h1');
      this.contactH1 = document.querySelector('#contact h1');
      this.form = document.querySelector('form');
    }

    document.querySelector('.transition').style.top = 'auto';
    document.querySelector('.transition').style.bottom = '-50px';
    document.querySelector('.transition').style.height = 0;
    document.querySelector('body').classList.remove('menu-is-active');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var scrollTop = document.documentElement.scrollTop;
    // this.arrow.style.opacity = scrollTop > 0 ? 0 : 1;

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
        <Nav active={0} transition={this.transition} />
        <Parallax className="home">
          <div class="row">
            <div className="col-md-6">
              <div className="text">
                <h1>Jacob Sommer</h1>
                <Typing />
              </div>
            </div>
            <div className="col-md-6">
              <Particles height="50vh"
                width="30vw" params={{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#212529"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#212529","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
          </div>
        </Parallax>
        <section id="about" className="container">
          <div className="col-md-12">
            <div className="row">
              <img className="profile-picture center" src={me} alt="Me" />
            </div>
            <div className="row">
              <div id="about-me-p">
                <h1 className="center">About Me</h1>
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
        <Parallax className="small-banner projects-bg" offsetY={800}>
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

// navActiveBar($('.nav'), (tab, width, tempMarginLeft) => {
//   tab.mouseover(() => { // when tab is hovered over
//     $('.active').css({width: width + '%', marginLeft: tempMarginLeft + '%'}); // adjust active bar
//   });
// });

// function getPercentage(min, max) {
//   return min / max * 100;
// }

// function navActiveBar(menu, callback) {
//   var marginLeft = [];
//   menu.children('li').each(function(index) { // Loop through nav children (li)
//     // Dynamic width/margin calculation
//     var width = getPercentage($(this).width() + parseInt($(this).css('marginLeft')), menu.width());
//     var tempMarginLeft = 0;
//     // don't modify first element's positioning
//     if (index != 0) tempMarginLeft = marginLeft.reduce((a, b) => a + b, 0); // set temp margin of active bar to sum of widths of previous tabs
//     callback($(this), width, tempMarginLeft); // callback
//     marginLeft.push(width); // store width in array to use for positioning underlines on following tabs
//   });
// }

export default Home;
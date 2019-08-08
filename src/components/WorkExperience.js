import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';
import { NavToggle, Link, AnchorLink } from './Nav';
import Parallax from './Parallax';
import Footer from './Footer';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Work Experience | Jacob Sommer';
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
        <NavToggle />
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" transition={this.transition}>Hom<span className="no-space">e</span></Link>
            </li>
            <li>
              <Link to="/?about" transition={this.transition}>About M<span className="no-space">e</span></Link>
            </li>
            <li>
              <a href="Resume.pdf" target="_blank">Resum<span className="no-space">e</span></a>
            </li>
            <li>
              <AnchorLink>Work Experienc<span className="no-space">e</span></AnchorLink>
            </li>
            <li>
              <Link to="projects" transition={this.transition}>Project<span className="no-space">s</span></Link>
            </li>
            <li>
              <Link to="/?contact" transition={this.transition}>Contac<span className="no-space">t</span></Link>
            </li>
          </ul>
        </nav>
        <Parallax className="jumbotron banner workexp-bg">
          <h1>Work Experience</h1>
        </Parallax>
          <section id="work-experience" className="container">
            <div class="col-md-12">
              <p>Dublin High’s Engineering and Design Academy has provided me with many opportunities and experiences that I’m thankful for. A lot of these opportunities have been field trips and guest speakers. One of my favorite field trips I took was a field trip to the NASA Ames Research Center. The main focus of this tour was the wind tunnels. There are a lot of wind tunnels there, of all speeds and sizes. They have not only the largest wind tunnel but also the fastest wind tunnels. I learned that wind tunnels are an important asset for testing the aerodynamics of aircraft. Some of the smaller, faster wind tunnels are used to test model aircraft while their largest one can fit a whole full-sized airplane. These wind tunnels are used to see how air flows over aircraft. The scales of a lot of these wind tunnels were huge. Overall, it was very fascinating to get to see what goes on in one of NASA’s research centers. It is not something you get to do every day and it was a very memorable trip.</p>
              <p>One memorable guest speaker was Dr. Maher Salloum. He talked about the two different careers he has had. In his first career, he worked on developing Magnetic Nanoparticle Hyperthermia as a way to kill cancer cells. This was really interesting because it was something I had never heard of in my life. In his second career, he worked with data compression. Being someone who is interested in Computer Science, his work with data compression interested me. I learned about the two approaches for data compression. The first one is lossless. With lossless data compression, data is fully recoverable after decompression, however, it has a low compression ratio of about 4-10. The most common example of this type of compression is zip files on Windows. The second approach for data compression is lossy. Lossy data compression has large ratios of about 10-1000, however, losses can occur in data after decompression. An example of this type of compression is wavelets, which are often used to compress images we send over social media without us even knowing. His talk was really inspiring because he showed us how you do not have to stay in just one field of engineering. Often times, you end up having multiple careers.</p>
            </div>
          </section>
        <Parallax className="small-banner resume-bg" offsetY={850}>
          <h2>Resume</h2>
          <a href="Resume.pdf" className="view-btn button btn-white" target="_blank">Click to View</a>
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default WorkExperience;
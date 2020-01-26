import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
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
    document.querySelector('.transition').classList.add('out');
    document.querySelector('body').classList.remove('menu-is-active');
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <Nav active={2} transition={this.transition} />
        <Header>Work Experience</Header>
        <section id="work-experience" className="container">
          <div class="col-md-12">
            <p>Dublin High’s Engineering and Design Academy has provided me with many opportunities and experiences that I’m thankful for. A lot of these opportunities have been field trips and guest speakers. One of my favorite field trips I took was a field trip to the NASA Ames Research Center. The main focus of this tour was the wind tunnels. There are a lot of wind tunnels there, of all speeds and sizes. They have not only the largest wind tunnel but also the fastest wind tunnels. I learned that wind tunnels are an important asset for testing the aerodynamics of aircraft. Some of the smaller, faster wind tunnels are used to test model aircraft while their largest one can fit a whole full-sized airplane. These wind tunnels are used to see how air flows over aircraft. The scales of a lot of these wind tunnels were huge. Overall, it was very fascinating to get to see what goes on in one of NASA’s research centers. It is not something you get to do every day and it was a very memorable trip.</p>
            <p>Another memorable field trip was a trip to the National Ignition Facility at the Lawrence Livermore National Laboratory. The scale of facility was massive and it was very intriguing to be able to tour it. My tour guide, Al, taught us how the hundred lasers were beams of light passing through the layers of various types of glasses and being magnified. Each one managed to make its way into a chamber through a path with reflections and be directed at a sample. It is fascinating to think about the possibilities of the facility and how large amounts of energy can be produced cleanly through fusion.</p>
            <p>One memorable guest speaker was Dr. Maher Salloum. He talked about the two different careers he has had. In his first career, he worked on developing Magnetic Nanoparticle Hyperthermia as a way to kill cancer cells. This was really interesting because it was something I had never heard of in my life. In his second career, he worked with data compression. Being someone who is interested in Computer Science, his work with data compression interested me. I learned about the two approaches for data compression. The first one is lossless. With lossless data compression, data is fully recoverable after decompression, however, it has a low compression ratio of about 4-10. The most common example of this type of compression is zip files on Windows. The second approach for data compression is lossy. Lossy data compression has large ratios of about 10-1000, however, losses can occur in data after decompression. An example of this type of compression is wavelets, which are often used to compress images we send over social media without us even knowing. His talk was really inspiring because he showed us how you do not have to stay in just one field of engineering. Often times, you end up having multiple careers. Another inspiring talk was from co-founder of the Uber AI Labs, Jason Yosinksi. His work with artificial intelligence and machine learning is inspiring to those who are interested in Computer Science as it is a look into the future. Jason’s talk helped provide a deeper understanding of how artificial intelligence works at the basic level. In the example of image recognition, software is written to be able to recognize patterns such as edges, certain colors, stripes, outlines, and others. Certain objects are able to be recognized by recognizing a complex series of patterns that make up the object.</p>
          </div>
        </section>
        <div className="small-banner resume-bg" offsetY={700}>
          <h2>Resume</h2>
          <a href="Resume.pdf" className="view-btn button btn-black" target="_blank">Click to View</a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WorkExperience;
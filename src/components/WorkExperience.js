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
          <div className="col-md-12">
            <p>Dublin High’s Engineering and Design Academy has provided me with many opportunities and experiences that I’m thankful for. A lot of these opportunities have been field trips and guest speakers. The first field trip I took, over the summer after freshman year, was to NASA Ames Research Center and to this day it was my favorite. My peers and I toured NASA’s various wind tunnels and saw how they study the aerodynamics of aircrafts. It was the opportunity of a lifetime to explore one of NASA’s research centers and to stand in the largest wind tunnel in the world. In my sophomore year, I took a field trip to Stanford and UC Davis. They were the first two colleges I had ever visited. It was a great experience not only to tour Stanford, one of the most prestigious colleges in the country, and UC Davis, a college I was planning to apply to but also to hear from our student tour guides. I heard all about their story of applying to colleges and their decision process. It gave me hope to know that my Stanford tour guide thought they never had any chance of getting in. My tour guide at UC Davis also gave a great lesson about choosing colleges and talked about how he chose Davis over Berkeley because he enjoyed the atmosphere and campus life more. There is much more than ranking that goes into deciding which college is the right fit for you. Another trip I took my sophomore year was to the Patriot Jet Team foundation. It was cool to see all of the different planes they had and learn about them. My favorite part though was getting to try out the flight simulations that they use for training. In my junior year, I got to tour the National Ignition Facility at the Lawrence Livermore National Laboratory. The facility was massive and it was awe-inspiring to see the amount of engineering that went into fusion research. It was a glimpse at the future of energy production. Unfortunately, the COVID-19 pandemic prevented me from going on any more field trips. This year, however, I did get to tour Livermore Aviation virtually. I heard from many different speakers on the virtual tour, pilots, sheriffs who were utilizing drones for an air squadron, and the CEO of a start-up. The most intriguing and inspiring presentation was from Bill Bruner, CEO of the start up New Frontier Aerospace. He described how he was working to develop reusable rocket drones that would be able to rapidly deliver cargo and more specifically transport organs and medical supplies. The speedly delivery would help save many lives and it was inspiring to hear what Bill was doing to improve society.</p>
            <p>One memorable guest speaker was Dr. Maher Salloum. He talked about the two different careers he has had. In his first career, he worked on developing Magnetic Nanoparticle Hyperthermia as a way to kill cancer cells. This was really interesting because it was something I had never heard of in my life. In his second career, he worked with data compression. Being someone who is interested in Computer Science, his work with data compression interested me. I learned about the two approaches for data compression. The first one is lossless. With lossless data compression, data is fully recoverable after decompression, however, it has a low compression ratio of about 4-10. The most common example of this type of compression is zip files on Windows. The second approach for data compression is lossy. Lossy data compression has large ratios of about 10-1000, however, losses can occur in data after decompression. An example of this type of compression is wavelets, which are often used to compress images we send over social media without us even knowing. His talk was really inspiring because he showed us how you do not have to stay in just one field of engineering. Often, you end up having multiple careers. Another inspiring talk was from co-founder of the Uber AI Labs, Jason Yosinksi. His work with artificial intelligence and machine learning is inspiring to those who are interested in Computer Science as it is a look into the future. Jason’s talk helped provide a deeper understanding of how artificial intelligence works at the basic level. In the example of image recognition, software is written to be able to recognize patterns such as edges, certain colors, stripes, outlines, and others. Certain objects are able to be recognized by recognizing a complex series of patterns that make up the object.</p>
            <p>Another experience offered by the engineering academy was the mentor program. The mentor program gave me the opportunity to talk to many engineers and learn about their career paths. My biggest takeaway and the one thing I found in common with everyone I talked with is that dealing with people was the least favorite part of their jobs. As you become more senior in a company though, you only work with more and more people as you shift from a hands-on job to a management job. People skills  were always something I viewed as a weakness of mine. Through the mentor program, however, I was able to develop my people skills by meeting and conversing with so many mentors. Overall, the mentor program and the academy helped me develop soft skills</p>
          </div>
        </section>
        <div className="small-banner resume-bg">
          <h2>Resume</h2>
          <a href="Resume.pdf" className="view-btn button btn-black" target="_blank">Click to View</a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WorkExperience;
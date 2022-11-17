import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import playpicImg from '../images/playpic.png';
import hangmanImg from '../images/hangman.png';
import startrackerImg from '../images/startracker.jpg';

function Project({ title, date, img, content, links }) {
  return (
    <article className="card project container">
      <div className="row">
        <div className="col-xl-6">
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{content}</p>
          {links ? /* eslint-disable-next-line */
            <p>{links.map(link => <a key={link.href} className={`${link.icon} fa-lg`} href={link.href} target="_blank" aria-label={link.label}></a>)}</p>
          : null }
        </div>
        <div className="col-xl-6">
          <img src={img} alt={title} />
        </div>
      </div>
    </article>
  );
}

class Projects extends Component {
  componentDidMount() {
    document.title = 'Projects | Jacob Sommer';
  }

  render() {
    return (
      <>
        <div className="project-transition"></div>
        <Nav active={1} />
        <Header>Projects</Header>
        <main id="projects" className="container">
          <Project
            title="PlayPic"
            date="February 2022"
            img={playpicImg}
            content="A website that creates a Spotify playlist that matches the mood of the image you upload."
            links={[
              {
                "icon": "fas fa-external-link-alt",
                "href": "https://devpost.com/software/hackuci-jwe3al",
                "label": "devpost"
              }
            ]}
          />
          <Project
            title="Hangman"
            date="January 2021"
            img={hangmanImg}
            content="An online multiplayer game of hangman. Written using React + Socket.IO."
            links={[
              {
                "icon": "fas fa-external-link-alt",
                "href": "https://github.com/js0mmer/hangman",
                "label": "github repository"
              }
            ]}
          />
          <Project
            title="Star Tracker"
            date="October - November 2019"
            img={startrackerImg}
            content="A barn door star tracker enabling you to take longer exposures of the night sky and capture deep sky objects with a DSLR. Runs on a Raspberry Pi connected to a WiFi network, controlled from the Blynk app."
            links={[
              {
                "icon": "fas fa-external-link-alt",
                "href": "https://github.com/js0mmer/startracker",
                "label": "github repository"
              }
            ]}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default Projects;
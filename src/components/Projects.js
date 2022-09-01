import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import hangman from './projects/hangman.json';
import startracker from './projects/startracker.json';
import playpic from './projects/playpic.json';

const PROJECTS = [
  {
    id: 'playpic',
    src: playpic
  },
  {
    id: 'hangman',
    src: hangman
  },
  {
    id: 'startracker',
    src: startracker
  },
]

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
  }

  componentDidMount() {
    this.content.current.innerHTML = this.props.src.content || '';
  }

  render() {
    return (
      <div className="card project container">
        <div className="row">
          <div className="col-xl-6">
            <h4>{this.props.src.title}</h4>
            <p className="subheading">{this.props.src.date}</p>
            <p ref={this.content} />
            {this.props.src.links ? /* eslint-disable-next-line */
              <p>{this.props.src.links.map(item => <a key={this.props.id} className={`${item.icon} fa-lg`} href={item.href} target="_blank"></a>)}</p>
            : null }
          </div>
          <div className="col-xl-6">
            <img src={`/images/${this.props.id}.${this.props.src.imgType}`} alt={this.props.src.title} />
          </div>
        </div>
      </div>
    );
  }
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
        <section id="projects" className="container">
          <div className="cards">
            {PROJECTS.map(project => <ProjectCard key={project.id} id={project.id} src={project.src} />)}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Projects;
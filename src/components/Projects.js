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
import eduGameDesign from './projects/edu-game-design.json';
import magpie from './projects/magpie.json';
import startracker from './projects/startracker.json';

const PROJECTS = [
  {
    id: 'scratch',
    src: scratch
  },
  {
    id: 'hangman',
    src: hangman
  },
  {
    id: 'project-compound',
    src: projectCompound
  },
  {
    id: 'aerodynamic-design',
    src: aerodynamicDesign
  },
  {
    id: 'edu-game-design',
    src: eduGameDesign
  },
  {
    id: 'magpie',
    src: magpie
  },
  {
    id: 'startracker',
    src: startracker
  }
]

class ProjectPanel extends Component {
  constructor(props) {
    super(props);
    this.content = React.createRef();
  }

  componentDidMount() {
    this.content.current.innerHTML = this.props.src.content;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <img className="red-border" src={'/images/' + this.props.id + '.' + this.props.src.imgType} alt={this.props.src.title} />
        </div>
        <div className="col-md-7">
          <h3>{this.props.src.title}</h3>
          {this.props.src.class ? <h5>{this.props.src.class}</h5> : null}
          <h5>{this.props.src.date}</h5>
          <p ref={this.content}></p>
        </div>
      </div>
    );
  }
}

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (!this.props.src.link) {
      e.preventDefault();
      this.props.open(this.props.id, this.props.src);
    }
  }

  render() {
    return (
      <a className="card animated zoomIn" href={this.props.src.link ? this.props.src.link : 'projects/' + this.props.id} target={this.props.src.link ? 'blank' : null} onClick={this.onClick}>
        <img className="card-img-top" src={'/images/' + this.props.id + '.' + this.props.src.imgType} alt={this.props.src.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.src.title}</h5>
          <p className="card-text">{this.props.src.description}</p>
        </div>
      </a>
    );
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.openProject = this.openProject.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = { redirect: false, col1: [], col2: [], projectId: false, projectSrc: false, scrollTop: 0, innerWidth: window.innerWidth }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Projects | Jacob Sommer';
    window.scrollTo(0, 0);
    document.querySelector('.transition').classList.add('out');

    window.addEventListener('resize', this.handleResize);

    this.setupCards();

    // if url specifies a project i.e. /projects/hangman
    var id = this.props.match.params.id;
    if (id) {
      var src = null;
      for (var i = 0; i < PROJECTS.length; i++) {
        if (PROJECTS[i].id === id) {
          src = PROJECTS[i].src;
          break;
        }
      }

      if (!src || src.link) {
        this.props.history.push('/projects');
        return;
      }

      this.openProject(id, src);
    }

    setTimeout(() => {
      document.querySelectorAll('.card').forEach(el => el.classList.remove('animated'));
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  handleResize() {
    var innerWidth = window.innerWidth;
    if (innerWidth < 992 && this.state.innerWidth >= 992) {
      this.setupCards();
    } else if (innerWidth >= 992 && this.state.innerWidth < 992) {
      this.setupCards();
    }
    this.setState({ innerWidth });
  }

  setupCards() {
    var col1 = [];
    var col2 = [];
    if (window.innerWidth < 992) {
      for (var i = 0; i < PROJECTS.length; i++) {
        col1.push(<ProjectCard key={i} id={PROJECTS[i].id} src={PROJECTS[i].src} open={this.openProject} />);
      }
    } else {
      for (var j = 0; j < PROJECTS.length; j++) {
        if (j % 2 === 0) {
          col1.push(<ProjectCard key={j} id={PROJECTS[j].id} src={PROJECTS[j].src} open={this.openProject} />);
        } else {
          col2.push(<ProjectCard key={j} id={PROJECTS[j].id} src={PROJECTS[j].src} open={this.openProject} />);
        }
      }
    }

    this.setState({ col1, col2 });
  }

  openProject(projectId, projectSrc) {
    this.props.history.push('/projects/' + projectId);
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = projectSrc.title + ' | Projects | Jacob Sommer';

    var scrollTop = document.documentElement.scrollTop;
    document.querySelector('.project-transition').classList.add('open');

    setTimeout(() => {
      this.setState({ projectId, projectSrc, scrollTop })
      setTimeout(() => {
        document.querySelector('h1').scrollIntoView();
        document.querySelector('.project-transition').classList.remove('open');
      }, 1);
    }, 200);
  }

  closeProject(e) {
    e.preventDefault();

    this.props.history.push('/projects');
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Projects | Jacob Sommer';

    document.querySelector('.project-transition').classList.add('open');

    setTimeout(() => {
      this.setState({ projectId: false, projectSrc: false });
      setTimeout(() => {
        window.scrollTo(0, this.state.scrollTop);
        document.querySelector('.project-transition').classList.remove('open');
      }, 1);
    }, 200);
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <div className="project-transition"></div>
        <Nav active={3} transition={this.transition} closeProject={this.closeProject} projectId={this.state.projectId} />
        <Header>Projects</Header>
        <section id="projects" className="container">
          <div className="cards row" style={this.state.projectId ? { display: 'none'} : {}}>
            <div id="col-1" className="col-lg-6">
              {this.state.col1.map(item => item)}
            </div>
            <div id="col-2" className="col-lg-6">
              {this.state.col2.map(item => item)}
            </div>
          </div>
          {this.state.projectId ? 
            <div>
              <ProjectPanel id={this.state.projectId} src={this.state.projectSrc} />
              <div className="flex-center">
                {/* eslint-disable-next-line */}
                <a className="animated-arrow" href="#" onClick={this.closeProject}>
                  <span className="arrow">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text">
                      Back to Projects
                    </span>
                  </span>
                </a>
              </div>
            </div>
            : null
          }
        </section>
        <Footer />
      </div>
    );
  }
}

export default Projects;
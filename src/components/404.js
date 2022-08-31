import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Nav, { Link } from './Nav';

class Error404 extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false, firstLaunch: true }
  }

  componentDidMount() {
    document.title = '404 | Jacob Sommer';
    document.querySelector('.transition').classList.add('out');
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  render() {
    if (this.state.redirect) return <Navigate to={this.state.redirect} />;

    return (
      <div>
        <Nav active={3} transition={this.transition} />
        <div className="jumbotron full contact">
          <div className="container wrapper">
            <div class="card col-md-7">
              <div className="container">
                <h4>Whoops!</h4>
                <p className="subheading">We couldn't find that page</p>
                <Link className="animated-arrow" to="/" transition={this.transition}>
                  <span className="arrow">
                    <span className="shaft"></span>
                  </span>
                  <span className="main">
                    <span className="text">
                      Back to Home
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;
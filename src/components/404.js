import React, { Component } from 'react';
import Nav, { Link } from './Nav';

class Error404 extends Component {
  componentDidMount() {
    document.title = '404 | Jacob Sommer';
    document.querySelector('.transition').classList.add('out');
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="jumbotron full contact">
          <div className="container wrapper">
            <div class="card col-md-7">
              <div className="container">
                <h4>Whoops!</h4>
                <p className="subheading">We couldn't find that page</p>
                <Link className="animated-arrow" to="/" title="Home">
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
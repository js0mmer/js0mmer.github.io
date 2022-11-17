import { Component } from 'react';
import Nav, { Link } from '../components/Nav';

class Error404 extends Component {
  componentDidMount() {
    document.title = '404 | Jacob Sommer';
  }

  render() {
    return (
      <>
        <Nav />
        <div className="jumbotron full contact">
          <div className="container wrapper">
            <div class="card col-md-7">
              <div className="container">
                <h1>Whoops!</h1>
                <p>We couldn't find that page</p>
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
      </>
    );
  }
}

export default Error404;
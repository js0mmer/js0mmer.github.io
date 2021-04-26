import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm text">
            <p>Made with <span className="fa fa-heart fa-lg"></span> by Jacob</p>
          </div>
          <div className="col-sm icons">
            {/* eslint-disable-next-line */}
            <a className="fa-stack fa-lg" href="mailto:jacob.sommer@comcast.net" target="_blank">
              <span className="fa fa-circle fa-stack-2x"></span>
              <span className="slide-up-effect">
                <span className="fa fa-envelope fa-stack-1x"></span>
                <span className="fa fa-envelope fa-stack-1x"></span>
              </span>
            </a>
            {/* eslint-disable-next-line */}
            <a className="fa-stack fa-lg" href="https://github.com/js0mmer" target="_blank">
              <span className="fa fa-circle fa-stack-2x"></span>
              <span className="slide-up-effect">
                <span className="fab fa-github fa-stack-1x"></span>
                <span className="fab fa-github fa-stack-1x"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
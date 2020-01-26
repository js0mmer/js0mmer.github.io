import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Nav, { Link } from './Nav';
import Particles from 'react-particles-js';

class Error404 extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false }
  }

  componentDidMount() {
    document.title = 'Jacob Sommer | Page Not Found';
    document.querySelector('.transition').classList.add('out');
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <Nav transition={this.transition} />
        <div className="error-404 home">
          <div class="row">
            <div className="col-md-6">
              <div className="text">
                <h1>Page Not Found</h1>
                <h5><Link to="/" className="link" transition={this.transition}>&mdash; Return Home</Link></h5>
              </div>
            </div>
            <div className="col-md-6 particles">
              <Particles height="50vh"
                width="30vw" params={{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#212529"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#212529","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;
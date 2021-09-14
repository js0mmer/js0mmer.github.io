import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import '../css/animate.min.css';

function SendBtn() {
  function handleClick() {
    if (document.querySelector('input[type=text]').value.length > 0 &&
      document.querySelector('textarea').value.length > 0 &&
      document.querySelector('input[type=email]').value.length > 0 &&
      document.querySelector('input[type=email]').value.includes("@") &&
      document.querySelector('input[type=email]').value.split("@")[1].length > 0)
      document.querySelector('.send-btn').classList.add('sending');
  }

  return <button type="submit" className="send-btn button btn-red" onClick={handleClick}>Send <span className="fa fa-paper-plane"></span></button>;
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.transition = this.transition.bind(this);
    this.state = { redirect: false, firstLaunch: true }
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    document.title = 'Jacob Sommer | Contact';
    document.querySelector('.transition').classList.add('out');
  }

  transition(to) {
    setTimeout(() => { this.setState({ redirect: to }) }, 300);
  }

  render() {
    if (this.state.redirect) return <Redirect push to={this.state.redirect} />;

    return (
      <div>
        <Nav active={3} transition={this.transition} />
        <div className="jumbotron full contact">
          <div className="container wrapper">
            <div class="card col-md-7">
              <div className="container">
                <h4 className="center">Let's get in touch</h4>
                <div className="row">
                  <div className="col-md-6">
                    <p><a className="fa fa-envelope fa-lg" href="mailto:jacob.sommer@comcast.net" target="_blank"></a> jacob.sommer@comcast.net</p>
                    <p><a className="fab fa-github fa-lg" href="https://github.com/js0mmer" target="_blank"></a> js0mmer</p>
                  </div>
                  <div className="col-md-6">
                    <form className="flex-center" action="https://formspree.io/jacob.sommer@comcast.net" method="POST">
                      <div>
                        <input type="text" name="Name" placeholder="Your name" required />
                        <span className="underline"></span>
                      </div>
                      <div>
                        <input type="email" name="Mail" placeholder="Your email" required />
                        <span className="underline"></span>
                      </div>
                      <div>
                        <textarea name="Message" placeholder="Your message" required></textarea>
                        <span className="underline"></span>
                      </div>
                      <SendBtn />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
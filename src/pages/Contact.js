import { Component } from 'react';
import Nav from '../components/Nav';

function SendBtn() {
  function handleClick() {
    if (document.querySelector('input[type=text]').value.length > 0 &&
      document.querySelector('textarea').value.length > 0 &&
      document.querySelector('input[type=email]').value.length > 0 &&
      document.querySelector('input[type=email]').value.includes("@") &&
      document.querySelector('input[type=email]').value.split("@")[1].length > 0) {
        document.querySelector('.send-btn').classList.add('sending');
    }
  }

  return <button type="submit" className="send-btn button btn-red" onClick={handleClick}>Send <span className="fa fa-paper-plane"></span></button>;
}

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact | Jacob Sommer';
  }

  render() {
    return (
      <>
        <Nav active={3} />
        <div className="jumbotron full contact">
          <div className="container wrapper">
            <div className="card col-md-7">
              <div className="container">
                <h1 className="center">Let's get in touch</h1>
                <div className="row">
                  <div className="col-md-6">
                    { /* eslint-disable-next-line */ }
                    <p><a className="fa fa-envelope fa-lg" href="mailto:jacob.sommer@comcast.net" target="_blank" aria-label="email"></a> jacob.sommer@comcast.net</p>
                    { /* eslint-disable-next-line */ }
                    <p><a className="fab fa-github fa-lg" href="https://github.com/js0mmer" target="_blank" aria-label="github"></a> js0mmer</p>
                    { /* eslint-disable-next-line */ }
                    <p><a className="fab fa-linkedin fa-lg" href="https://www.linkedin.com/in/js0mmer" target="_blank" aria-label="linkedin"></a> js0mmer</p>
                  </div>
                  <div className="col-md-6">
                    <form className="flex-center" action="https://formspree.io/jacob.sommer@comcast.net" method="POST">
                      <div>
                        <label for="name" class="sr-only">Your name</label>
                        <input type="text" name="Name" placeholder="Your name" required />
                        <span className="underline"></span>
                      </div>
                      <div>
                        <label for="email" class="sr-only">Your email</label>
                        <input type="email" name="Mail" placeholder="Your email" required />
                        <span className="underline"></span>
                      </div>
                      <div>
                        <label for="message" class="sr-only">Your message</label>
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
      </>
    );
  }
}

export default Contact;
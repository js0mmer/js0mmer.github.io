const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm text">
            <p>
              Made with <span className="fa fa-heart fa-lg"></span> by Jacob
            </p>
          </div>
          <div className="col-sm icons">
            <a className="fa-stack fa-lg" href="https://github.com/js0mmer" target="_blank" aria-label="github">
              <span className="fa fa-circle fa-stack-2x"></span>
              <span className="slide-up-effect">
                <span className="fab fa-github fa-stack-1x"></span>
                <span className="fab fa-github fa-stack-1x"></span>
              </span>
            </a>
            <a
              className="fa-stack fa-lg"
              href="https://www.linkedin.com/in/js0mmer/"
              target="_blank"
              aria-label="linkedin"
            >
              <span className="fa fa-circle fa-stack-2x"></span>
              <span className="slide-up-effect">
                <span className="fab fa-linkedin fa-stack-1x"></span>
                <span className="fab fa-linkedin fa-stack-1x"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

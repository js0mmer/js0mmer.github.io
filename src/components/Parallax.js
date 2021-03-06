import React, { Component } from 'react';

var isMobile = () => window.innerWidth <= 800;

function parallax(props) {
  var scrollTop = document.documentElement.scrollTop;
  var offsetY = props.offsetY | 0;

  if (!isMobile()) {
    return { backgroundPositionY: `${-scrollTop / 2 + offsetY}px` };
  } else {
    return { backgroundPositionY: 0 };
  }
}

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = { style: {} };
  }

  componentDidMount() {
    this.setState({ style: parallax(this.props) });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ style: parallax(this.props) });
  }

  handleScroll() {
    this.setState({ style: parallax(this.props) });
  }

  render() {
    return <div className={this.props.className + ' parallax'} style={this.state.style}>{this.props.children}</div>;
  }
}

export default Parallax;
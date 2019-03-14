import React, { Component } from 'react';

var isMobile = () => window.innerWidth <= 800;

function parallax(props) {
  var scrollTop = document.documentElement.scrollTop;
  var offsetY = props.offsetY | 0;
  var enableOnMobile = props.enableOnMobile | true;

  if (isMobile() && enableOnMobile) {
    return { backgroundPositionY: `${scrollTop / 2}px` };
  } else if (!isMobile()) {
    return { backgroundPositionY: `${-scrollTop / 2 - offsetY}px` };
  } else {
    return { backgroundPositionY: 0 };
  }
}

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {style: {}};
  }

  componentDidMount() {
    this.setState({ style: parallax(this.props) });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ style: parallax(this.props) });
  }

  handleScroll() {
    this.setState({ style: parallax(this.props) });
  }

  render() {
    return <div className={this.props.className} style={this.state.style}>{this.props.children}</div>;
  }
}

export default Parallax;
import React, { Component } from 'react';

export function NavToggle(props) {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector('.nav-toggle').classList.toggle('open');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.banner').classList.toggle('blur');
  }

  return (
    <button className="nav-toggle" onClick={handleClick}>
      <span className={'icon' + (props.white ? ' white' : '')}></span>
    </button>
  );
}

export function closeNav() {
  document.querySelector('.nav-toggle').classList.remove('open');
  document.querySelector('.menu').classList.remove('active');
  document.querySelector('.banner').classList.remove('blur');
}

export class AnchorLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.to) document.querySelector(this.props.to).scrollIntoView({ behavior: 'smooth' });
    if (this.props.closeNav) this.props.closeNav();
    else closeNav();
  }

  render() {
    return <a href={this.props.to ? this.props.to : '#'} className={this.props.className} onClick={this.handleClick}>{this.props.children}</a>;
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    document.querySelector('.transition').style.top = '-50px';
    document.querySelector('.transition').style.bottom = 'auto';
    document.querySelector('.transition').style.height = 'calc(100vh + 100px)';

    this.props.transition(this.props.to);
  }

  render() {
    return <a href={this.props.to} className={this.props.className} style={this.props.style} onClick={this.handleClick}>{this.props.children}</a>;
  }
}
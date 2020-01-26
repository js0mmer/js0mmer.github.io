import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="jumbotron">
        <h1>{this.props.children}</h1>
      </header>
    );
  }
};
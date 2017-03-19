import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <img src={"/images/TsarsPalace.jpg"} />
        {this.props.children}
      </div>
    );
  }
}

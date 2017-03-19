import React, { Component } from 'react';

export default class Hand extends Component {
  clicked() {
    console.log("Test");

  }

  render() {
    return (
      <button onClick={this.clicked} className="btn btn-primary">Play</button>
    )
  };
}

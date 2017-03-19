import React, { Component } from 'react';
import Board from './board';
import Hand from './hand';

export default class App extends Component {
  render() {
    return (
      <div>
        <Board />
        <Hand />
      </div>
    );
  }
}

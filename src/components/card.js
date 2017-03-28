import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div>
        <img src={this.props.card.source} />
        <h5>Name: {this.props.card.name}</h5>
        <h5>Power: {this.props.card.power}</h5>
      </div>
    )
  }
}

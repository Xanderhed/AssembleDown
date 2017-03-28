import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';

class Hand extends Component {
  renderCards() {
    return this.props.cards.map((card) => {
        return (
          <li key={card.id}>
            <Card card={card} />
          </li>
        );
    });
  }

  render() {
    return (
      <ul>
        {this.renderCards()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { cards: state.cards }
};

export default connect(mapStateToProps, undefined)(Hand);

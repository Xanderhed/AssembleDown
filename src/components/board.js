import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {
  renderBases() {
    return this.props.bases.map((base) => {
      return (
        <li key={base.id}>
          <img src={base.source} />
          <h5>Name: {base.name}</h5>
          <h5>Breakpoint: {base.breakpoint}</h5>
          <h5>payout: {base.payout[0]}, {base.payout[1]}, {base.payout[2]}</h5>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderBases()}
      </ul>
    );
  };
}

function mapStateToProps(state) {
  return { bases: state.bases }
};

export default connect(mapStateToProps, undefined)(Board);

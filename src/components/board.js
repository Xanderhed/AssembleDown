import React, { Component } from 'react';
import { connect } from 'react-redux';

class Board extends Component {
  renderBases() {
    return this.props.bases.map((base) => {
      return (
        <li key={base.id}>
          <img src={base.source} />
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

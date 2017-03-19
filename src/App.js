import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <Board cardLists={this.props.state.cardLists} actions={this.props.actions} />
    );
  }
}

export default App;

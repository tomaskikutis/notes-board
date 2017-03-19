import React, { Component } from 'react';
import Boards from './Boards';
import './App.css';

class App extends Component {
  render() {
    return (
      <Boards boards={this.props.state.boards} actions={this.props.actions} />
    );
  }
}

export default App;

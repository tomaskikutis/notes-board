import React, { Component } from 'react';
import './AddBoard.css';

class AddBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardName: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addBoard(this.state.boardName, () => this.setState({boardName: ""}));
  }

  handleChange(event){
    this.setState({
      boardName: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.boardName} onChange={this.handleChange} placeholder="Add board" />
      </form>
    );
  }
}

export default AddBoard;
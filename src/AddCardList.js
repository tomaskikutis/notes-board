import React, { Component } from 'react';

class AddCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardListName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addCardList(this.state.cardListName, () => this.setState({cardListName: ''}));
  }

  handleChange(event){
    this.setState({
      cardListName: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.cardListName} onChange={this.handleChange} placeholder='Add a list' />
      </form>
    );
  }
}

export default AddCardList;
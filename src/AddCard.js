import React, { Component } from 'react';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addCard(this.state.cardContent, () => this.setState({cardContent: ''}));
  }

  handleChange(event){
    this.setState({
      cardContent: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.cardContent} onChange={this.handleChange} placeholder='Add a card' />
      </form>
    );
  }
}

export default AddCard;
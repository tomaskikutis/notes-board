import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
			editMode: false,
      cardContent: this.props.card.content
    };

    this.enableEditMode = this.changeEditMode.bind(this, true);
    this.disableEditMode = this.changeEditMode.bind(this, false);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }
  changeEditMode(enable){
    this.setState({
      cardContent: this.props.card.content,
      editMode: enable
    });
  }
  updateCard(){
    this.props.actions.changeCardContent(this.props.card.listId, this.props.card.id, this.state.cardContent, this.disableEditMode);
  }
  removeCard(){
    this.props.actions.removeCard(this.props.card.listId, this.props.card.id);
  }
  handleChange(event){
    this.setState({
      cardContent: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    this.updateCard();
  }
  render() {
    return (
      <div className='Card'>
        {
          this.state.editMode === true ? (
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.cardContent} onChange={this.handleChange} />
              <div>
                <button type="button" onClick={this.updateCard}>Save</button>
                <button type="button" onClick={this.disableEditMode}>Cancel</button>
                <button type="button" onClick={this.removeCard}>Remove card</button>
              </div>
            </form>
          ) : <div onClick={this.enableEditMode}>{this.props.card.content}</div>
        }
      </div>
    );
  }
}

export default Card;

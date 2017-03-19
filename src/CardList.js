import React, { Component } from 'react';
import Cards from './Cards';
import AddCard from './AddCard';
import './CardList.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.props.actions.addCard.bind(null, this.props.cardList.id);
  }
  render() {
    return (
      <div className='CardList'>
        <h2 className='CardList-name'>{this.props.cardList.name}</h2>
				<Cards cards={this.props.cardList.cards} dragulaCards={this.props.dragulaCards} />
				<AddCard addCard={this.addCard} />
      </div>
    );
  }
}

export default CardList;

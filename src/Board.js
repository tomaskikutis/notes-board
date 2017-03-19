import React, { Component } from 'react';
import Cards from './Cards';
import AddCard from './AddCard';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.props.actions.addCard.bind(null, this.props.board.id);
  }
  render() {
    return (
      <div className='Board'>
        <h2 className='Board-name'>{this.props.board.name}</h2>
				<Cards cards={this.props.board.cards} dragulaCards={this.props.dragulaCards} />
				<AddCard addCard={this.addCard} />
      </div>
    );
  }
}

export default Board;

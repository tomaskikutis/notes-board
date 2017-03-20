import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Dragula from 'react-dragula';

import CardList from './CardList';
import AddCardList from './AddCardList';

import '../node_modules/dragula/dist/dragula.min.css';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    var updateCardsOrder = this.updateCardsOrder.bind(this);
    this.dragulaCards = Dragula();
    this.dragulaCardList = Dragula({
      moves: (el, container, handle) => handle.classList.contains('CardList-name')
    });
    this.dragulaCards.on('drop', updateCardsOrder);
  }
  getSingleCardUpdateObject(cardElement){
    var listId = cardElement.parentElement.getAttribute('data-list-id');
    var result = {};
    result[listId] = {};

    return Array.from(cardElement.children)
        .map( (element, i) => Object.assign({}, {cardId: element.getAttribute('data-card-id')}, {order: i}) )
        .reduce( (acc, val) => {
          acc[listId][val.cardId] = val.order;
          return acc;
        }, result);
  }
  updateCardsOrder(el, target, source, sibling){
    var updateObj = Object.assign(
      {},
      this.getSingleCardUpdateObject(source),
      this.getSingleCardUpdateObject(target)
    );
    this.dragulaCards.cancel(true);
    this.props.actions.updateCardsOrder(updateObj);
  }
  render() {
    return (
      <div className='Board'>
        {
					this.props.cardLists.map( (cardList) => (
              <CardList
                key={cardList.id}
                cardList={cardList}
                actions={this.props.actions}
                dragulaCards={this.dragulaCards}
              />
            )
          )
				}
        <AddCardList addCardList={this.props.actions.addCardList} />
      </div>
    );
  }

  componentDidMount() {
    var container = ReactDom.findDOMNode(this);
    this.dragulaCardList.containers.push(container);
  }
}

export default Board;

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
    this.dragulaCards = Dragula();
    this.dragulaCardList = Dragula({
      moves: (el, container, handle) => handle.classList.contains('CardList-name')
    });
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

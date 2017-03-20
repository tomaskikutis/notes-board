import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Card from './Card';

import './Cards.css';

class Cards extends Component {
  render() {
    return (
      <div className='Cards'>
        {
					this.props.cards
            .sort((a,b) => a.order - b.order )
            .map( (card) => <Card actions={this.props.actions} key={card.id} card={card} /> )
				}
      </div>
    );
  }

  componentDidMount() {
    var container = ReactDom.findDOMNode(this);
    this.props.dragulaCards.containers.push(container);
  }
}

export default Cards;

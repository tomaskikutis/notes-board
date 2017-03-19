import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className='Card'>
        {this.props.card.content}
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CardList from './CardList';
import AddBoard from './AddBoard';
import Dragula from 'react-dragula';

import '../node_modules/dragula/dist/dragula.min.css';
import './Boards.css';

class Boards extends Component {
  constructor(props) {
    super(props);
    this.dragulaCards = Dragula();
    this.dragulaBoards = Dragula({
      moves: (el, container, handle) => handle.classList.contains('CardList-name')
    });
  }
  render() {
    return (
      <div className='Boards'>
        {
					this.props.boards.map( (board) => <CardList key={board.id} cardList={board} actions={this.props.actions} dragulaCards={this.dragulaCards} /> )
				}
        <AddBoard addBoard={this.props.actions.addBoard} />
      </div>
    );
  }

  componentDidMount() {
    var container = ReactDom.findDOMNode(this);
    this.dragulaBoards.containers.push(container);
  }
}

export default Boards;

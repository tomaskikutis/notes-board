import React, { Component } from 'react';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
			boards: [
				{
					id: 1,
					name: "Assigned",
					cards: [
						{
							id: 1,
							content: "card 1"
						},
						{
							id: 2,
							content: "card 2"
						}
					]
				},
				{
					id: 2,
					name: "In progress",
					cards: []
				},
				{
					id: 3,
					name: "Done",
					cards: []
				}
			]
    };

    this.actions = {
      addBoard: this.addBoard.bind(this),
			addCard: this.addCard.bind(this)
    };
  }

	getNewId(){
		return Math.random();
	}

	addCard(boardId, cardContent, callback){
		var newId = this.getNewId();
		this.setState({
			boards: this.state.boards.map( (board) => {
				if(board.id === boardId){
					return Object.assign({}, board, {
						cards: board.cards.concat({id: newId, content: cardContent})
					})
				}
				return board;
			})
		}, callback);
	}

	addBoard(name, callback){
		var newBoard = {
			id: this.getNewId(),
			name: name,
			cards: []
		};
		this.setState({
			boards: this.state.boards.concat(newBoard)
		}, callback);
	}
 
  render() {
    return <this.props.App state={this.state} actions={this.actions} />;
  }
}

export default Store;
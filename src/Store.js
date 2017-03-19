import React, { Component } from 'react';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
			cardLists: []
    };

    this.actions = {
      addCardList: this.addCardList.bind(this),
			addCard: this.addCard.bind(this)
    };
  }

	getNewId(){
		return Math.random();
	}

	addCard(cardListId, cardContent, callback){
		var newId = this.getNewId();
		this.setState({
			cardLists: this.state.cardLists.map( (cardList) => {
				if(cardList.id === cardListId){
					return Object.assign({}, cardList, {
						cards: cardList.cards.concat({id: newId, content: cardContent})
					})
				}
				return cardList;
			})
		}, callback);
	}

	addCardList(name, callback){
		var newCardList = {
			id: this.getNewId(),
			name: name,
			cards: []
		};
		this.setState({
			cardList: this.state.cardList.concat(newCardList)
		}, callback);
	}
 
  render() {
    return <this.props.App state={this.state} actions={this.actions} />;
  }
}

export default Store;
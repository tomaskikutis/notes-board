import React, { Component } from 'react';

const localStorageNamespace = 'app-state';

class Store extends Component {
  constructor(props) {
    super(props);

		this.setState = (function(realSetState){
			return (partialState, callback) => realSetState.call(this, partialState, this.persistState.bind(this, callback) )
		}.bind(this))(this.setState);

		this.setState = (
			(realSetState) => (partialState, callback) => realSetState.call(this, partialState, callback)
		)(this.setState);
		
		var savedState = localStorage.getItem(localStorageNamespace);
    this.state = savedState === null ? { cardLists:[] } : JSON.parse(savedState);

    this.actions = {
      addCardList: this.addCardList.bind(this),
			addCard: this.addCard.bind(this),
			changeCardContent: this.changeCardContent.bind(this),
			removeCard: this.removeCard.bind(this)
    };
  }

	persistState(callback){
		localStorage.setItem(localStorageNamespace, JSON.stringify(this.state));
		callback();
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
						cards: cardList.cards.concat({id: newId, listId: cardListId,content: cardContent})
					})
				}
				return cardList;
			})
		}, callback);
	}

	changeCardContent(cardListId, cardId, nextContent, callback){
		this.setState({
			cardLists: this.state.cardLists.map( (cardList) => {
				if(cardList.id === cardListId){
					return Object.assign({}, cardList, {
						cards: cardList.cards.map( (card) => {
							if(card.id === cardId){
								return Object.assign({}, card, {
									content: nextContent
								});
							}
							return card;
						})
					})
				}
				return cardList;
			})
		}, callback);
	}

	removeCard(cardListId, cardToDeleteId, callback){
		this.setState({
			cardLists: this.state.cardLists.map( (cardList) => {
				if(cardList.id === cardListId){
					return Object.assign({}, cardList, {
						cards: cardList.cards.filter((card)=> card.id !== cardToDeleteId)
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
			cardLists: this.state.cardLists.concat(newCardList)
		}, callback);
	}
 
  render() {
    return <this.props.App state={this.state} actions={this.actions} />;
  }
}

export default Store;
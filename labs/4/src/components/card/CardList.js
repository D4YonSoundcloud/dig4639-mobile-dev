import React, { Component } from "react";
import Card from "./index";
import CardData from "../../data.json";

let cards = CardData.cards;
let card = cards.splice();
console.log(card);

class CardList extends React.Component {

  state = {
    CardData: cards,
    hideCompleted: false
  };

  deleteCard = id => {
    console.log(this.state.CardData);
    let newCardData = this.state.CardData.filter(v => v.id !== id);
    this.setState({ CardData: newCardData});
  };

  render() {
    console.log(this.state.CardData);
    let cards = this.state.CardData;
    console.log(cards.id);
    return (
      <div>
        {this.state.hideCompleted
          ? cards.filter(v => !v.completed)
          : cards.map(card => (
              <Card
                key={card.id}
                title={card.title}
                completed={card.completed}
                content={card.content}
                deleteCard={card.deleteCard}
              ></Card>
            ))}
      </div>
    );
  }
}

export default CardList;

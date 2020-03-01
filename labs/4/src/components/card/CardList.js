import React, { Component } from "react";
import Card from "./index";
import CardData from "../../data.json";

class CardList extends React.Component {
  state = {
    CardData: CardData.cards
  };

  deleteCard = e => {
    console.log(this.state.CardData);
    let localCards = this.state.CardData;
    let cardCompleted = e.target.getAttribute("completed");
    console.log(cardCompleted);
    console.log(localCards[2].completed);
    let newCards = localCards.filter(card => {
      return card.completed !== cardCompleted;
    });
    console.log(newCards);
    this.setState({ CardData: newCards });
    console.log("worked");
  };

  render() {
    return (
      <div>
        {this.state.CardData.map(v => (
          <Card
            key={v.id}
            title={v.title}
            completed={v.completed}
            content={v.content}
            deleteCard={this.deleteCard}
          ></Card>
        ))}
      </div>
    );
  }
}

export default CardList;

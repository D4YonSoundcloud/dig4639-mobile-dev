import React, { Component } from "react";
import Card from "./index";
import CardData from "../../data.json";

class CardList extends React.Component {
  state = {
    CardData
  };

  deleteCard = e => {
    console.log(this.state.CardData);
    e.preventDefault();
    let localCards = this.state.CardData;
    let cardCompleted = e.target.getAttribute("completed");
    console.log(cardCompleted);
    console.log(localCards);
    let newCards = localCards.cards.filter(card => {
      return card.completed !== cardCompleted;
    });
    console.log(newCards);
    this.setState({ CardData: newCards });
    console.log("worked");
  };

  render() {
    return (
      <div>
        {this.state.CardData.cards.map(v => (
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

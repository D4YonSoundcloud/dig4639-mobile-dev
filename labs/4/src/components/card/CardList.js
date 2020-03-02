import React, { Component } from "react";
import Card from "./index";
import CardData from "../../data.json";

class CardList extends React.Component {
  state = {
    CardData,
    hideCompleted: false
  };

  deleteCard = id => {
    console.log(this.state.CardData);
    let CardData = this.state.CardData.cards;
    console.log(CardData);
    CardData = CardData.filter(v => v.id != id);
    console.log(CardData);
    this.setState({ CardData });
  };

  render() {
    return (
      <div>
        {this.state.hideCompleted
          ? this.state.CardData.cards.filter(v => !v.completed)
          : this.state.CardData.cards.map(v => (
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

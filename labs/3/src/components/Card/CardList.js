import React from "react";
import CardData from "../../data.json";
import Card from "./index";

export default function CardList() {
  return (
    <div>
      {CardData.cards.map(v => (
        <Card key={v.id} title={v.title} completed={v.completed} content={v.content}></Card>
      ))}
    </div>
  );
}

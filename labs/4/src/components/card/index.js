import React, { Component } from "react";
import "./index.css";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <button className="close" onClick={() => this.props.deleteCard(this.props.id)}>X</button>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import "./index.css";

export class Card extends Component {


  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p onClick={() => this.props.deleteCard(this.props.id)}>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
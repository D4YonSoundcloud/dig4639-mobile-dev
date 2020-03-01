import React, { Component } from "react";
import "./index.css";

export class Card extends Component {


  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        {this.props.content}
        <input
          type="checkbox"
          ref="cardCheckbox"
          className="close"
          onChange={this.props.deleteCard}
          value="x"
        />
      </div>
    );
  }
}

export default Card;
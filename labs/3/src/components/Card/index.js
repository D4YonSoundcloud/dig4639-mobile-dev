import React, { Component } from "react";
import "./index.css";

export class Card extends Component {
  markComplete = e => {
    this.props.completed = !this.props.completed;
  };
  
  render() {
    return (
      <div className="card">
        {this.props.content}
        <input
          type="checkbox"
          ref="cardCheckbox"
          onChange={e => markComplete(e)}
          className="close"
        />
      </div>
    );
  }
}

export default Card;

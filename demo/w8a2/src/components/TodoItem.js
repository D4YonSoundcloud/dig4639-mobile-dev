import React from "react";
import "../App.css";

export default function TodoItem(props) {
  return (
    <p className="card" onClick={() => props.removeTask(props.id)}>
      {props.content}
    </p>
  );
}

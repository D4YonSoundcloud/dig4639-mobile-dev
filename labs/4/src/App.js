import React, { Component } from "react";
import CardList from "./components/card/CardList";
import CardData from "./data.json";
import "./App.css";

class App extends React.Component {

  state = {
    CardData,
  }

  render() {
    return (
      <div className="App">
        <CardList CardData={this.state.CardData}></CardList>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import CardList from "./components/card/CardList";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <CardList></CardList>
      </div>
    );
  }
}

export default App;

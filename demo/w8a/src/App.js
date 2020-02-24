import React from "react";
import Todos from "./components/Todos";
import AddTask from "./components/AddTask";
import Sort from "./components/Sort";
import uuid from "uuid";
import "./App.css";

export class App extends Component {
  state = {
    todos: []
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todo.id) {
          todo.completed = !todo.completed;
        } else {
          return todo;
        }
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = content => {
    let id = uuid.v4();
    let completed = false;
    this.setState({ todos: [...this.state.todos, content, id, completed] });
  };

  render() {
    const [todos] = this.state;

    return (
      <div className="App">
        <AddTask addTodo={addTodo}></AddTask>
        <Sort></Sort>
        <Todos todos={todos} deleteTodo={deleteTodo} markComplete={markComplete}></Todos>
      </div>
    );
  }
}

export default App;

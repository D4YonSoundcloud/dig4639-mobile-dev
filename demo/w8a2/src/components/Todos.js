import React, { Fragment, Component } from "react";
import TodoItem from "./TodoItem";
import todoList1 from "../todoList.json";

class Todos extends React.Component {
  state = {
    todoList1,
    hideCompletedItems: false,
    id: 4
  };

  addTask = e => {
    console.log("add task");
    let todoList = todoList1;
    todoList.push({"id": this.state.id, "completed": true, "priority": this.refs.taskPriority.value, "content": this.refs.taskText.value});
    this.state.id++
    this.setState({todoList});
  }

  removeTask = e => {
      let todoList = this.state.todoList1;
      todoList = todoList.Filter((v) => v.id !== id);
      this.setState({todoList})
  }

  render() {
    const { todoList1, hideCompletedItems } = this.state;

    return (
      <Fragment>
        <input type="text" ref="taskText" />
        <input type="number" ref="taskPriority" />
        <input type="button" value="addTask" onClick={e => this.addTask(e)} />
        <input
          ref="hideCompletedItemsCheckbox"
          type="checkbox"
          id="hideCompletedItems"
          value="hidecompletedItems"
          onChange={e =>
            this.setState({ hideCompletedItems: !hideCompletedItems })
          }
        />
        <label For="hideCompletedItems">I have a bike</label>
        {(this.state.hideCompletedItems
          ? todoList1.filter(v => !v.completed)
          : todoList1
        ).map(v => (
          <TodoItem
            key={v.id}
            className="card"
            content={v.content}
            priority={v.priority}
            completed={v.completed}
          ></TodoItem>
        ))}
      </Fragment>
    );
  }
}
export default Todos;

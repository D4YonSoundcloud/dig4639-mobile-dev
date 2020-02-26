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
    todoList.push({
      id: this.state.id,
      completed: true,
      priority: this.refs.taskPriority.value,
      content: this.refs.taskText.value
    });
    this.state.id++;
    this.setState({ todoList });
  };

  removeTask = id => {
    let todoList = todoList1;
    console.log(todoList);
    todoList = todoList.filter((v) => v.id !== v.id);
    console.log('error');
    this.setState({todoList});
  };

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
          ? this.state.todoList1.filter(v => !v.completed)
          : this.state.todoList1
        ).map(v => (
          <TodoItem
            id={v.id}
            removeTask={id => this.removeTask(id)}
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

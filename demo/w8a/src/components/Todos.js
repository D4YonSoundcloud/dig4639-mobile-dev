import React, { Component } from 'react';
import Todo from './Todo'

export class Todos extends Component {
    render() {
        return (
           this.props.todos.map( todo => {
               <Todo todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}></Todo>
           })
        )
    }
}

export default Todos

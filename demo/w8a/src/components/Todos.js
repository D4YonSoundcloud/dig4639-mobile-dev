import React, { Component } from 'react';
import Todo from './Todo'

export class Todos extends Component {
    render() {
        return (
           this.props.todos.map( todo => {
               <Todo content={todo.content} key={todo.id} priority={todo.priority} completed={todo.completed}></Todo>
           })
        )
    }
}

export default Todos

import React, { Component } from 'react'

export class Todo extends Component {

    todoStyle = () => {
        return {
            padding: '10px',
            borderBottom: '2px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { content, id, completed} = this.props.todo;
        return (
            <div style={this.todoStyle()}>
                <span>{content}</span>
                <button type="checkbox" onChange={this.props.markComplete.bind(this,id)}></button>
                <button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}

export default Todo

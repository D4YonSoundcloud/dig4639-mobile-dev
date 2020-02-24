import React, { Component } from 'react'

export class Todo extends Component {
    render() {
        return (
            <div>
                <span>{this.props.content}</span>
                <button>X</button>
            </div>
        )
    }
}

export default Todo

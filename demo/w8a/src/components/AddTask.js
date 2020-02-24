import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value} className="addTask"/>
                    <button type="submit" className="btn">Add Task</button>
                </form>
            </div>
        )
    }
}

export default AddTask

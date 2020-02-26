import React from 'react'
import "../App.css";

export default function TodoItem(props) {
    return (
        <p className='card'>{props.content}</p>
    )
}

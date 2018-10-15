// form
// list

import React, { Component } from 'react'
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

export default class Todo extends React.Component {
    state = {
        items: [
            {
                id: 123,
                text: 'get candy',
                complete: false
            },
            {
                id: 123,
                text: 'get candy',
                complete: false
            }
        ]
    }

    addItem = (text) => {
        const newItem = { text, completed: false }
        this.setState({ items: this.state.items.concat([{ text: text }]) })
    }

    render() {
        return (
            <div>
                <TodoForm addItem={this.addItem} />
                <TodoList items={this.state.items} />
            </div>
        )
    }
}
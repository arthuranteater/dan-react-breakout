import React, { Component } from 'react'

export default class TodoForm extends React.Component {
    state = {
        text: ''
    }

    handleInput = event => {
        this.setState({ text: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("submit", this.state)
        this.props.addItem(this.state.text)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput}></input>
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}
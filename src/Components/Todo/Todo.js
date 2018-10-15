// form
// list

import React, { Component } from 'react'
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { connect } from "react-redux"

class Todo extends React.Component {
    // state = {
    //     items: [
    //         {
    //             id: 123,
    //             text: 'get candy',
    //             complete: false
    //         },
    //         {
    //             id: 123,
    //             text: 'get candy',
    //             complete: false
    //         }
    //     ]
    // }

    // addItem = (text) => {
    //     const newItem = { text, completed: false }
    //     this.setState({ items: this.state.items.concat([{ text: text }]) })
    // }

    render() {
        return (
            <div>
                {/* <TodoForm addItem={this.addItem} /> */}
                {/* <TodoList items={this.state.items} /> */}
                <TodoForm />
                <TodoList items={this.props.items} />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps)(Todo)
  


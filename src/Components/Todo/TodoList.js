import React from "react"


export default function TodoList(props) {
    return (
        <div>
            <ul>
                {props.items && props.items.map(item => {
                    return <li key={item.text}>{item.text}</li>
                })}
            </ul>
        </div>

    )
}
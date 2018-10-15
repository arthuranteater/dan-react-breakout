import { ADD_ITEM } from "./constants"


const initialState = {
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



export default function (state = initialState, action) {
    // action = type + payload
    if (action.type === ADD_ITEM) {
        return { items: state.items.concat([action.payload]) }
    }
}
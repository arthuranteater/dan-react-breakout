import { ADD_ITEM } from "./constants"

const addItem = function () {
    return {
        type: ADD_ITEM,
        payload: { text: text, completed: false }
    }

}


export default { addItem }
import {DECREMENT, INCREMENT} from "../constant";

const INIT_VALUE = 0

function countReducer(preState = INIT_VALUE, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            console.log("!")
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}

export default countReducer
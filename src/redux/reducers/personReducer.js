import {ADD_PERSON} from "../constant";

const INITSTATE = []

function personReducer(preState = INITSTATE, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}

export default personReducer
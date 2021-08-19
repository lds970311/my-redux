import {applyMiddleware, combineReducers, createStore} from 'redux'
import countReducer from "./reducers/countReducer";
import thunk from "redux-thunk"
import personReducer from "./reducers/personReducer";
//引入redux-devtools-extension
import {composeWithDevTools} from "redux-devtools-extension";

//汇总所有reducer
const allReducers = combineReducers({
    sum: countReducer,
    person: personReducer
})
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))


export default store
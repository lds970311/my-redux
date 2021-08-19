//为count组件生成creator对象
import {DECREMENT, INCREMENT} from "../constant";


function createIncrementAction(data) {
    return {
        type: INCREMENT,
        data: data
    }
}

function createDecrementAction(data) {
    return {
        type: DECREMENT,
        data
    }
}

//异步action，就是指action的值为函数 异步action中一般都会调用同步action
function createIncrementActionAsync(data, time) {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(createIncrementAction(data * 1))
        }, time)
    }
}

export {createIncrementAction, createDecrementAction, createIncrementActionAsync}
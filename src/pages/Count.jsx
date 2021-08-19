import React, {Component} from 'react';
import store from "../redux/store";
import {createDecrementAction, createIncrementAction, createIncrementActionAsync} from "../redux/actions/countAction";

class Count extends Component {
    state = {
        result: 0
    }

    componentDidMount() {

    }

    increment = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }
    //减法
    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        store.dispatch(createIncrementActionAsync(value, 500))
    }

    render() {
        return (
            <div>
                <h2>结果为: {store.getState()}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
                &nbsp;
            </div>
        );
    }
}

export default Count;
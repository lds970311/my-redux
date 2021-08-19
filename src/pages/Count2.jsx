import React, {Component} from 'react';


class Count2 extends Component {
    componentDidMount() {

    }

    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value)
    }
    //减法
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value)
    }
    //奇数再加
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value)
        }
    }
    //异步加
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value, 500)
    }


    render() {
        return (
            <div>
                <h2>结果为: {this.props.count}</h2>
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

export default Count2;
import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../redux/actions/personAction";

class PersonUI extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const person = {
            id: nanoid(),
            name,
            age
        }
        console.log(person);
        this.props.addPerson(person)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>我是Person组件,上方组件求和为{this.props.he}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <div>
                    {this.props.personList.map(item => {
                        return (
                            <ul key={item.id}>
                                <li>id:{item.id}</li>
                                <li>name:{item.name}</li>
                                <li>age:{item.age}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const Person = connect(state => {
    return {
        personList: state.person
    }
}, {
    addPerson: addPerson
})(PersonUI)

export default Person;
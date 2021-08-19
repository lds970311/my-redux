import Count2UI from "../pages/Count2";
import {createDecrementAction, createIncrementAction, createIncrementActionAsync} from "../redux/actions/countAction";

//用于连接UI组件和redux
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        count: state.sum
    }
};

function mapDispatchToProps(dispatch) {
    return {
        increment: function (val) {
            //通知redux执行加法
            console.log("increment", val)
            dispatch(createIncrementAction(val * 1))
        },
        decrement: function (val) {
            dispatch(createDecrementAction(val * 1))
        },
        incrementAsync: function (val, time) {
            dispatch(createIncrementActionAsync(val, time))
        }
    }
}

//Count2的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count2UI)

export default CountContainer;
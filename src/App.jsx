import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Count from "./pages/Count";
import CountContainer from "./containers/CountContainer";
import store from "./redux/store";
import Person from "./containers/Person";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" render={() => (
                    <Count/>
                )}/>
                <Route path="/count2" render={() => (
                    <CountContainer store={store}/>
                )}/>
                <Route path={"/person"} component={Person}/>
            </BrowserRouter>
        );
    }
}

export default App;
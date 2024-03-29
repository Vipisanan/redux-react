import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from "./store";
import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "./store";
import ConnectRedux from "./ConnectRedux";

class App extends React.Component {
    increment = () => {
        store.dispatch({type: COUNTER_INCREMENT});
        console.log(store.getState());
    };
    decrement = () => {
        store.dispatch({type: COUNTER_DECREMENT});
        console.log(store.getState());
    };

    push = () => {
        store.dispatch({type: 'push', value: Math.random()});
        console.log(store.getState());
    };

    pop = () => {
        store.dispatch({type: 'pop'});
        console.log(store.getState());
    };

    render() {
        return (
            <Provider store={store}>
                <div className="App" style={{backgroundColor:"ActiveCaption"}}>
                    <h1>hi redux</h1>
                    <ConnectRedux/>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.push}>Push</button>
                    <button onClick={this.pop}>Pop</button>
                </div>
            </Provider>

        );
    }
}

export default App;

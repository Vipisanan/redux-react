import * as redux from 'redux';
import {combineReducers} from "redux";

//ActionType
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';


//Reducer
const initialState = {count: 0};

const counterReducers = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            return {...state, count: state.count + 1};
        }
        case COUNTER_DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        default: {
            return {...state};
        }
    }
};

const testReducer = (state = [], action) => {
    switch (action.type) {
        case 'push': {
            const data = [...state];
            data.push(action.value);
            console.log(state , action.value);
            return [...data];
            break;
        }
        case 'pop': {
            const data = [...state];
            data.pop();
            return [...data];
            break;
        }
        default: {
            return [...state];
        }
    }
};


const rootReducer = (state = {}, action) => {
    return {
        counter: counterReducers(state.counter, action),
        tester: testReducer(state.tester, action)
    }
};

const store = redux.createStore(rootReducer);


export default store;

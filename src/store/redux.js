import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const data = []

const reducer = (state = data, action) => {
    if (action.type === 'GET_API') {
        return [...state, ...action.payload]
    }


    return state;
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
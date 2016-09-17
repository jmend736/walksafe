import * as c from './consts.js';

import { createStore, combineReducers } from 'redux';

const initialState = {
    test: ''
}

const mainReducer = (state=initialState, action) => {
    switch (action.type) {
        case c.TEST:
            return Object.assign({}, state, {test: action.test})
        default:
            return state;
    }
}

let combined = combineReducers({
    main: mainReducer
});

export default createStore(combined);

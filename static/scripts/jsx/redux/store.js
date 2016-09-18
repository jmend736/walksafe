import * as c from './consts.js';

import { createStore, combineReducers } from 'redux';

const initialState = {
    test: ''
}

const mainReducer = (state=initialState, action) => {
    switch (action.type) {
        case c.TEST:
            return Object.assign({}, state, {test: action.test});
        default:
            return state;
    }
}

const initialMapState = {
    map: null,
    heatmap: []
}

const mapReducer = (state=initialMapState, action) => {
    switch (action.type) {
        case c.UPDATE_MAP:
            return Object.assign({}, state, {map: action.map});
        case c.RESET_MAP:
            return Object.assign({}, initialState);
        case c.UPDATE_HEATMAP:
            return Object.assign({}, state, {heatmap: action.heatmap});
        default:
            return state;
    }
}

let combined = combineReducers({
    main: mainReducer,
    map: mapReducer
});

export default createStore(combined);

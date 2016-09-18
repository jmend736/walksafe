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

const initialDirForm = {
    origin: "",
    destination: "",
    travelMode: "WALKING",
    transitOptions: {},
    drivingOptions: {},
    waypoints: [],
    optimizeWaypoints: false,
    provideRouteAlternatives: true,
    avoidHighways: false,
    avoidTolls: true
}

const directionFormReducer = (state=initialDirForm, action) => {
    switch(action.type) {
        case c.FORM_CHANGE:
            let field = "";
            let value = "";
        switch(action.field) {
            case "Origin":
                field = "origin";
                value = action.value;
                break;
            case "Destination":
                field = "destination";
                value = action.value;
                break;
            case "Avoid Highways":
                field = "avoidHighways";
                value = action.value;
                break;
            case "Avoid Tolls":
                field = "avoidTolls";
                value = action.value;
                break;
        }
        return Object.assign({}, state, {[field]: value});
    default:
        return state;
    }
}

let combined = combineReducers({
    main: mainReducer,
    map: mapReducer,
    directionForm: directionFormReducer
});

export default createStore(combined);

import * as c from './consts.js';
import store from './store.js';

export const updateTest = (text) => {
    store.dispatch({
        type: c.TEST,
        test: text
    });
};

export const updateMap = (map) => {
    store.dispatch({
        type: c.UPDATE_MAP,
        map: map
    });
};

export const resetMap = () => {
    store.dispatch({
        type: c.RESET_MAP
    });
};

export const updateHeatmap = (heatmap) => {
    store.dispatch({
        type: c.UPDATE_HEATMAP,
        heatmap: heatmap
    })
}

import * as c from './consts.js';
import store from './store.js';

export const updateTest = (text) => {
    store.dispatch({
        type: c.TEST,
        test: text
    });
}

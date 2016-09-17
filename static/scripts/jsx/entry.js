import React from 'react';
import { render } from 'react-dom';

import Router from './router.js'
import store from './redux/store.js'

import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('main')
);

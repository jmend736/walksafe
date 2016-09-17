import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Base from './base.js';
import Index from './index.js';
import NoMatch from './nomatch.js';

const Routing = props => (
    <Router history={browserHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={Index}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
);

export default Routing;

import React from 'react';
import * as act from './redux/actions.js';

import { connect } from 'react-redux';

import Map from './map.js';
import MapChanges from './map/mapChanges.js';

import TopBar from './topbar.js';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        console.log(e.target.value);
        act.updateTest(e.target.value);
    }
    render() {
        return(
            <div className="mainview">
                <TopBar />
                <Map />
                <MapChanges />
            </div>
        );
    }
}

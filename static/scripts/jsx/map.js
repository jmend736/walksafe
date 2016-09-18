import React from 'react';

import GoogleMap from 'google-map-react';
import * as act from './redux/actions.js';
import { connect } from 'react-redux';

export default class MapView extends React.Component {
    constructor(props) {
        super(props);
        this.checking = this.checking.bind(this);
        this.renderMap = this.renderMap.bind(this);
        this.state = {
            checking: setInterval(this.checking, 30)
        };
    }
    componentWillDismount() {
        // Just confirms checking stops when leaving page
        if (this.state.checking != null){
            // Make sure Interval is cleared
            clearInterval(this.state.checking);
        }
    }
    renderMap(){
        var map = new google.maps.Map(
            document.getElementById('map'),
            {
                center: {lat: 37.782, lng: -122.447},
                zoom: 13
            });
        act.updateMap(map);
    }
    checking(){
        if (window.google != undefined) {

            // Stop checking
            clearInterval(this.state.checking);

            // Remove any value
            this.setState({checking: null});

            // Render map
            this.renderMap();
        }
    }
    render() {
        return(
            <div id="map" />
        );
    }
}

import React from 'react';

import GoogleMap from 'google-map-react';
import * as act from './redux/actions.js';

export default class extends React.Component {
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
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            });
        act.updateMap(map);
    }
    checking(){
        console.log("check");
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

            //<GoogleMap
                //bootstrapURLKeys={{
                    //key: "AIzaSyDfaYdCaudaOx1bpWyETAxzTMZ5IYL0TRI"
                //}}
                //defaultCenter={{lat: 59.938043, lng: 30.337157}}
                //defaultZoom={4}
                //minZoom={4}
                    ///>

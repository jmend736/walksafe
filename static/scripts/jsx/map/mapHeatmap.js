import React from 'react';

import { connect } from 'react-redux';

// Adds a heatmap to the map
class MapHeatmap extends React.Component {
    constructor(props){
        super(props);
        this.heatmapOptions = {
            radius: 10
        };
    }
    // Will update whenever there is a change
    // to either heatmap or map inthe store
    componentWillReceiveProps(nextProps) {
        // Make sure we have map and heatmap in store
        if (nextProps.map != null && nextProps.heatmapData != []) {
            // Create heatmap
            var heatmap = new google.maps.visualization.HeatmapLayer({
                data: nextProps.heatmapData.map(i => (
                    new google.maps.LatLng(i[0], i[1])
                ))
            });
            // Make bigger
            heatmap.setOptions(this.heatmapOptions);
            // Apply heatmap
            heatmap.setMap(nextProps.map);
        }
    }
    render(){
        return(
            null
        );
    }
}

export default connect(s=>({map: s.map.map, heatmapData: s.map.heatmap}))(MapHeatmap);

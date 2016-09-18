import React from 'react';
import * as act from '../redux/actions.js';

import Heatmap from './mapHeatmap.js';

var exampleHeatmapData =[
    [37.782, -122.447],
    [37.782, -122.445],
    [37.782, -122.443],
    [37.782, -122.441],
    [37.782, -122.439],
    [37.782, -122.437],
    [37.782, -122.435],
    [37.785, -122.447],
    [37.785, -122.445],
    [37.785, -122.443],
    [37.785, -122.441],
    [37.785, -122.439],
    [37.785, -122.437],
    [37.785, -122.435]
];

export default class MapHeatmap extends React.Component {
    constructor(props){
        super(props);
        this.setHeatmap = this.setHeatmap.bind(this);

        // TODO: Remove or change to better data
        this.setHeatmap(exampleHeatmapData);
    }
    setHeatmap(heatmapData) {
        act.updateHeatmap(heatmapData);
    }
    render(){
        return(
            <div>
                <Heatmap />
            </div>
        );
    }
}

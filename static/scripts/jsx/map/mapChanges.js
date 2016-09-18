import React from 'react';
import * as act from '../redux/actions.js';

import Heatmap from './mapHeatmap.js';
import axios from 'axios';

var exampleHeatmapData = [
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

        let heatmap = [];
        // TODO: Remove or change to better data
        axios.get("/data/data.json").then((resp) => {
            heatmap = resp.data.markers.map(i=>([parseFloat(i.lt), parseFloat(i.ln)])).filter(v=>(!(isNaN(v[0]) || isNaN(v[1]))));
            console.log(heatmap);
            this.setHeatmap(heatmap);
        })

        // For Crime Reports

        //axios.get("/data/data.json").then((resp) => {
            //console.log("ROFLROFL");
            //heatmap = resp.data.agencies.map(i=>([i.center.coordinates[1], i.center.coordinates[0]]));
            //this.setHeatmap(heatmap);
            //console.log(heatmap);
        //});
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

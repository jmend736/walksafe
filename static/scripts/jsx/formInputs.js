import React from 'react';



export const TextField = (props) => (
    <div className="directions--text">
        <p>{props.name}:</p>
        <input type="text" {...props}/>
    </div>
)

// TODO Fix this
export const TravelMode = (props) => (
    <div className="directions--travel">
        <Icon name="DRIVING" type="fa-car" onClick={props.onChange} selected={false}/>
        <Icon name="TRANSIT" type="fa-train" onClick={props.onChange} selected={false}/>
        <Icon name="WALKING" type="fa-male" onClick={props.onChange} selected={false}/>
        <Icon name="BICYCLING" type="fa-bicycle" onClick={props.onChange} selected={false}/>
    </div>
)

const Icon = (props) => (
    <button
        onClick={props.onClick}
        style={(props.selected) ? {backgroundColor: "#fff"} : {backgroundColor: "#aaa"}}
        name={props.name}>
        <i className={"fa " + props.type} aria-hidden="true"></i>
    </button>
)

export const AvoidThings = (props) => (
    <div className="directions--avoid">
        <div><input type="checkbox" onChange={props.onChange} name="Avoid Highways"></input>Avoid Highways</div>
        <div><input type="checkbox" onChange={props.onChange} name="Avoid Tolls"></input>Avoid Tolls</div>
    </div>
)

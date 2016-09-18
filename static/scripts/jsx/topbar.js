import React from 'react';

import { connect } from 'react-redux';


class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = {style:{top:"-200px"}, direction: "down"};
    }
    changeState(){
        if (this.state.style.top == "-200px") {
            this.setState({style: {top: "0px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}, direction: "up"});
        } else {
            this.setState({style: {top: "-200px"}, direction: "down"});
        }
    }
    render() {
        return(
            <div className="topbar__container" style={this.state.style} >
                <div className="topbar">
                    Hello World!
                </div>
                <div className="topbar__pull" onClick={this.changeState}>
                    <div className={"topbar__triangle "+this.state.direction} />
                </div>
            </div>
        );
    }
}

export default connect(s=>({main: s.main}))(TopBar);

import React from 'react';
import * as act from './redux/actions.js';

import { connect } from 'react-redux';

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
            <div>
                <h1>HELLO WORLDSSSS</h1>
                <ReduxTestConnected />
                <input type="text" onChange={this.onChange} />
            </div>
        );
    }
}

const ReduxTest = (props) => (
    <h3>
        {props.test}
    </h3>
)

const ReduxTestConnected = connect(s=>({test: s.main.test}))(ReduxTest);
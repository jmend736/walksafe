import React from 'react';

import { connect } from 'react-redux';

import * as forms from './formInputs.js';
import * as act from './redux/actions.js';

class Directions extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        if (event.target.value == "on") {
            act.formChange(event.target.name, event.target.checked);
        } else {
            act.formChange(event.target.name, event.target.value);
        }
    }
    onSubmit() {
        console.log(this.props.form);
    }
    render() {
        return(
            <div className="directions">
                <div>
                    <forms.TextField
                        name="Origin"
                        onChange={this.onChange}
                    />
                    <forms.TextField
                        name="Destination"
                        onChange={this.onChange}
                    />
                </div>
                <forms.AvoidThings onChange={this.onChange} />
                <input type="button" className="submitButton" value="Submit" onClick={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(s=>({form: s.directionForm}))(Directions);

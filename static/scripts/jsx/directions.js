import React from 'react';

import { connect } from 'react-redux';


class Directions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="directions">
                <form>
                    Origin:
                    <input type="text" />
                    Destination:
                    <input type="text" />
                </form>
            </div>
        );
    }
}

export default connect(s=>({main: s.main}))(Directions);

import React from 'react';
import { render } from 'react-dom';

class Entry extends React.Component {
    render() {
        return(
            <div>
                <h2>Hello world</h2>
                Hopefully it works
            </div>
        );
    }
}

render(
    <Entry />,
    document.getElementById('main')
);

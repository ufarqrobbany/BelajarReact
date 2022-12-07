import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: 'Ini adalah isi Body',
            subbody: 'Ini adalah isi subBody',
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.body}</p>
                <p>{this.state.subbody}</p>
            </div>
        );
    }
}

export default Body;
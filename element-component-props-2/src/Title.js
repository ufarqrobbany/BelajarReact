import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Ini Title',
            subtitle: 'Ini Subtitle',
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.subtitle}</h3>
            </div>
        );
    }
}

export default Title;
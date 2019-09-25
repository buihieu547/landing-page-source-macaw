import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        document.querySelectorAll('[data-loading]')[0].remove();
    }

    componentDidMount = () => {}

    render() {
        return (
            <></>
        )
    }
}

export default App
import React, { Component } from "react";
import { Introduction, Header, Footer, Pricing, Plan, Cooperation, Concentration } from './components';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobile: this.updateScreen() > 991 ? false : true
        }
    }

    updateScreen = () => {
        const w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        if (width > 991 && this.state && this.state.mobile) {
            this.setState(() => ({mobile: false}));
        }

        if (width < 992 && this.state && !this.state.mobile) {
            this.setState(() => ({mobile: true}));
        }

        return width;
    }
        
    componentDidMount = () => {
        window.addEventListener("resize", this.updateScreen);
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateScreen);
    }

    render() {
        return (
            <div>
            	<Header />
                <Introduction />
                <Plan mobile={this.state.mobile} />
                <Concentration mobile={this.state.mobile} />
                <Cooperation mobile={this.state.mobile} />
                <Pricing mobile={this.state.mobile} />
                <Footer />
            </div>
        );
    }
}

export default App;
import React, { Component } from "react";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sticky: false,
			menuActive: ''
		}
	}

	windowScroll = () => {
		const doc = document.documentElement,
			top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

		if (top > 300 && !this.state.sticky) {
			this.setState(() => ({
            	sticky: true
        	}));
		}

		if (top < 300 && this.state.sticky) {
			this.setState(() => ({
            	sticky: false
        	}));
		}
	}

	componentDidMount = () => {
        window.addEventListener("scroll", this.windowScroll);
        this.windowScroll();
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.windowScroll);
    }

	render() {
		const { sticky } = this.state;

	 	return (
	 		<div className={sticky ? 'is-sticky header' : 'header'}>
	 			<div className="container clearfix">
	 				<div className="logo float-left">
	 					<img alt="Logo" src={require('../../assets/images/logo.svg')} />
	 				</div>
	 				<label className="float-right mobile-toggle-menu" htmlFor="mobile-menu">
	 					<span></span>
	 					<span></span>
	 					<span></span>
	 				</label>
	 				<input type="checkbox" className="d-none" id="mobile-menu" />
	 				<ul className="main-menu">
	 					<li>
	 						<a href="https://macaw.nolt.io/widget">
	 							feature
	 						</a>
	 					</li>
	 					<li id="pricing_link">
	 						<a href="#pricing">
	 							pricing
	 						</a>
	 					</li>
	 					<li>
	 						<a href="https://workplace.macaw-app.com/signup">
	 							support
	 						</a>
	 					</li>
	 					<li>
	 						<a href="https://workplace.macaw-app.com/signup">
	 							sign up
	 						</a>
	 					</li>

	 				</ul>
	 			</div>
	 		</div>
	 	)
	}
}
export default Header;
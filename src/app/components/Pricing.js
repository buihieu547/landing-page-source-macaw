import React, { Component } from "react";
import ButtonLink from '../shared/Button';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Slider from "react-slick";
import { Waypoint } from 'react-waypoint';

let linkPrice;
const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    dots: true
};
const pro = [
    {
        id: 1,
        name: 'monthly',
        price: '6'
    },
    {
        id: 2,
        name: 'annaully',
        price: '5'
    }
];

class Pricing extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            packageId: 1
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    enter = () => {
        if (window.location.hash !== '#pricing') {
            window.history.pushState('','', '#pricing');
        }
        linkPrice.classList.add('active');
    }

    leave = () => {
        linkPrice.classList.remove('active');
    }

    componentDidMount = () => {
        linkPrice = document.getElementById('pricing_link');
    }

    render() {
        const { packageId } = this.state;
        const proHtml = pro.map((e) => (
            <DropdownItem key={e.id} onClick={() => {
                if (e.id !== packageId) {
                    this.setState(() => ({packageId: e.id}));
                }
            }}>
                {e.name}
            </DropdownItem>
        ));

        const pac = pro.filter(e => (e.id === packageId))[0];

        return (
            <Waypoint 
                onEnter={this.enter}
                onLeave={this.leave}
            >
                <section className="section pricing" id="pricing">
                    <div className="container">
                        <div className="title-gr">
                            <h2>
                                Pricing
                            </h2>
                            <p>
                                Macaw for Teams is a single workspace for your small- to medium-sized company or team.
                            </p>
                        </div>
                        { this.props.mobile ?  
                            <Slider {...settings}>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>basic</h2>
                                        <p>For a team with 2-5 members and get things done faster.</p>
                                    </div>
                                    <div className="price">
                                        <h2 className="number text-uppercase alone">
                                            free
                                        </h2>
                                    </div>
                                    <div className="box-gr-btn">
                                        <ButtonLink href="https://workplace.macaw-app.com/signup" className="btn-border-special">
                                            Start planning
                                        </ButtonLink>
                                    </div>
                                    <ul className="feature">
                                        <li>
                                            All features
                                        </li>
                                        <li>
                                            Max 5 members
                                        </li>
                                        <li>
                                            Maximum 50 uncompleted tasks
                                        </li>
                                        <li>
                                            Advance task management (5 labels)
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>pro</h2>
                                        <p>For a team with over 5 members and more features to manage daily tasks easier.</p>
                                    </div>
                                    <div className="price">
                                        <h2 className="number">
                                            ${pac.price}
                                        </h2>
                                        <p className="sub">
                                            per each user
                                        </p>
                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle caret>
                                                {pac.name}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                { proHtml }
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="box-gr-btn">
                                        <ButtonLink href="https://workplace.macaw-app.com/signup/freeTrial" className="btn-primary">
                                            Free trial 14 days
                                        </ButtonLink>
                                        <ButtonLink href="https://workplace.macaw-app.com/signup/freeTrial">
                                            Purchase now
                                        </ButtonLink>
                                    </div>
                                    <ul className="feature">
                                        <li>
                                            All features
                                        </li>
                                        <li>
                                            Max 10 members
                                        </li>
                                        <li>
                                            Maximum 100 uncompleted tasks
                                        </li>
                                        <li>
                                            Advance task management (over 3 labels)
                                        </li>
                                        <li>
                                            Advance experience (Themes)
                                        </li>
                                        <li>
                                            Priority support
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <h2>custom pro</h2>
                                        <p>More members? <br />  More uncompleted tasks</p>
                                    </div>
                                    <div className="price"></div>
                                    <div className="box-gr-btn">
                                        <ButtonLink href="mailto:support@macaw-app.com" className="btn-border-special">
                                            Contact Us
                                        </ButtonLink>
                                    </div>
                                </div>
                            </Slider>
                        : 
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="box">
                                        <div className="box-title">
                                            <h2>basic</h2>
                                            <p>For a team with 2-5 members and get things done faster.</p>
                                        </div>
                                        <div className="price">
                                            <h2 className="number text-uppercase alone">
                                                free
                                            </h2>
                                        </div>
                                        <div className="box-gr-btn">
                                            <ButtonLink href="https://workplace.macaw-app.com/signup" className="btn-border-special">
                                                Start planning
                                            </ButtonLink>
                                        </div>
                                        <ul className="feature">
                                            <li>
                                                All features
                                            </li>
                                            <li>
                                                Max 5 members
                                            </li>
                                            <li>
                                                Maximum 50 uncompleted tasks
                                            </li>
                                            <li>
                                                Advance task management (5 labels)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <div className="box-title">
                                            <h2>pro</h2>
                                            <p>For a team with over 5 members and more features to manage daily tasks easier.</p>
                                        </div>
                                        <div className="price">
                                            <h2 className="number">
                                                ${pac.price}
                                            </h2>
                                            <p className="sub">
                                                per each user
                                            </p>
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret>
                                                    {pac.name}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    { proHtml }
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className="box-gr-btn">
                                            <ButtonLink href="https://workplace.macaw-app.com/signup/freeTrial" className="btn-primary">
                                                Free trial 14 days
                                            </ButtonLink>
                                            <ButtonLink href="https://workplace.macaw-app.com/signup/freeTrial">
                                                Purchase now
                                            </ButtonLink>
                                        </div>
                                        <ul className="feature">
                                            <li>
                                                All features
                                            </li>
                                            <li>
                                                Max 10 members
                                            </li>
                                            <li>
                                                Maximum 100 uncompleted tasks
                                            </li>
                                            <li>
                                                Advance task management (over 3 labels)
                                            </li>
                                            <li>
                                                Advance experience (Themes)
                                            </li>
                                            <li>
                                                Priority support
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="box">
                                        <div className="box-title">
                                            <h2>custom pro</h2>
                                            <p>More members? <br />  More uncompleted tasks</p>
                                        </div>
                                        <div className="price"></div>
                                        <div className="box-gr-btn">
                                            <ButtonLink href="mailto:support@macaw-app.com" className="btn-border-special">
                                                Contact Us
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </Waypoint>
        );
    }
}

export default Pricing;
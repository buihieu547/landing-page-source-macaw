import React, { Component } from "react";
import Slider from "react-slick";
import { Waypoint } from 'react-waypoint';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { settings } from '../shared/config';

const tab = [
	{
		title: 'Removing all noise by entering Focus Mode.',
		key: 'video_1',
		id: 1,
		pane: (ref, onEnded, mobile) => (
			<video muted={true} controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/focus/section_1.mp4" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/focus/section_1.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	},
	{
		title: 'Focus on exactly 1 single task you’re working on - Work In Progress.',
		id: 2,
		key: 'video_2',
		pane: (ref, onEnded, mobile) => (
			<video muted={true} controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/focus/section_2.mp4" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/focus/section_2.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	},
	{
		title: 'Easily switching in case of priority changes.',
		id: 3,
		key: 'video_3',
		pane: (ref, onEnded, mobile) => (
			<video muted={true} controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/focus/section_3.mp4" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/focus/section_3.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	},
	{
		title: 'Finish a day with the best mood.',
		id: 4,
		key: 'video_4',
		pane: (ref, onEnded, mobile) => (
			<video muted={true} controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/focus/section_4.mp4" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/focus/section_4.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>		)
	}
];
let isEnter = false;
let isMobileBack = false;

class Concentration extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
    	this.state = {
      		activeTab: 1
    	};

    	this.video_1 = React.createRef();
    	this.video_2 = React.createRef();
    	this.video_3 = React.createRef();
    	this.video_4 = React.createRef();
	}

	handleVideo = (video) => {
		video.currentTime = 0;
		video.play();
	}

	componentDidMount = () => {
		isMobileBack = this.props.mobile;
	}

	componentDidUpdate = () => {
		if (isMobileBack && !this.props.mobile && isEnter) {
			const { activeTab } = this.state;
			this.handleVideo(this[tab[activeTab - 1].key].current);
		}

		isMobileBack = this.props.mobile;
	}

	onEnded = (id) => {
		if (id === tab.length) {
			this.toggle(tab[0]);
		} else {
			this.toggle(tab[id]);
		}	
	}

	toggle = (ob) => {
		const { activeTab } = this.state;

		this[tab[activeTab - 1].key].current.pause();

    	if (activeTab !== ob.id) {
      		this.setState({
        		activeTab: ob.id
      		});
    	}

    	this.handleVideo(this[ob.key].current);
  	}	

	enter = () => {
		if (window.location.hash !== '#focus-on-your-task') {
            window.history.pushState('','', '#focus-on-your-task');
        }

        if (!isEnter && !this.props.mobile) {
        	isEnter = true;
        	this.handleVideo(this.video_1.current);
        }
	}

	render() {
		const navLink = tab.map(e => (
			<NavItem key={e.id}>
		        <NavLink className={classnames({ active: this.state.activeTab === e.id })} onClick={()=> { this.toggle(e); }}
		            >
		            {e.title}
		        </NavLink>
		    </NavItem>
		));

		const tabPane = tab.map(e => (
			<TabPane tabId={e.id} key={e.id}>
				{e.pane(this[e.key], this.onEnded.bind(this, e.id), this.props.mobile)}       
			</TabPane>
		));

		const mobileVideo = tab.map(e => (
			<div key={e.id} className="video-item">
				{e.pane(this[e.key], () => {}, this.props.mobile)}
				<h2>
					{e.title}
				</h2>
			</div>
		));

	 	return (
	 		<Waypoint 
                onEnter={this.enter}
            >
		 		<section className="section features concentration" id="focus-on-your-task">
		 			<div className="container">
		 				<div className="title-gr">
                            <h2>
                                Focus on daily tasks
                            </h2>
                            <p>
                                Distraction-free workspace for smooth & effective execution
                            </p>
                        </div>
                        { this.props.mobile ?  
                        	<Slider {...settings}>
                        		{mobileVideo}
                        	</Slider>
                        :
                        	<div className="row">
								<div className="col-lg-8">
									<TabContent activeTab={this.state.activeTab}>
									    {tabPane}
									</TabContent>
								</div>
								<div className="col-lg-4">
	                        		<Nav tabs>
									    {navLink}
									</Nav>
								</div>
                        	</div>
                    	}
		 			</div>
		 		</section>
	 		</Waypoint>
	 	)
	}
}
export default Concentration;
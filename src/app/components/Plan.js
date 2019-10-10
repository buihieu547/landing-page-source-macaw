import React, { Component } from "react";
import Slider from "react-slick";
import { Waypoint } from 'react-waypoint';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { settings } from '../shared/config';

const tab = [
	{
		title: 'Pick tasks that you are assigned to do.',
		key: 'video_1',
		id: 1,
		pane: (ref, onEnded, mobile) => (
			<video controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/plan/section_1.mp4?raw=true" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/plan/section_1.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	},
	{
		title: 'Create new tasks directly for yourself.',
		id: 2,
		key: 'video_2',
		pane: (ref, onEnded, mobile) => (
			<video controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/plan/section_2.mp4?raw=true" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/plan/section_2.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	},
	{
		title: 'Filter all your team’s tasks by labels.',
		id: 3,
		key: 'video_3',
		pane: (ref, onEnded, mobile) => (
			<video controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/plan/section_3.mp4?raw=true" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/plan/section_3.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	},
	{
		title: 'Help your teammates doing a task.',
		id: 4,
		key: 'video_4',
		pane: (ref, onEnded, mobile) => (
			<video controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/plan/section_4.mp4?raw=true" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/plan/section_4.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>		)
	},
	{
		title: 'Prioritizing your today tasks by simple drag & drop.',
		id: 5,
		key: 'video_5',
		pane: (ref, onEnded, mobile) => (
			<video controls={false} autoPlay={!!mobile} loop={!!mobile} ref={ref} onEnded={onEnded}>
			  	<source src="https://macaw-app.com/static/plan/section_5.mp4?raw=true" type="video/mp4" />
			  	<source src="https://macaw-app.com/static/plan/section_5.webm" type="video/webm" />
			  	Your browser does not support HTML5 video.
			</video>
		)
	}
];
const isPlay = [0, 0, 0, 0, 0];
let isEnter = false;
let isMobileBack = false;

class Plan extends Component {
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
    	this.video_5 = React.createRef();
	}

	handleVideo = (video, tab, ok) => {
		const number = tab - 1;
		if (!isPlay[number] || ok) {
			isPlay[number] = 1;
			const playPromise = video.play();
			if (playPromise !== undefined) {
				playPromise.then(e => {
					isPlay[number] = 0;
					video.currentTime = 0;
				}).catch(e => {
					setTimeout(() => {
						this.handleVideo(video, tab, true);
					}, 2000);
				});
			}
		}
	}

	componentDidMount = () => {
		isMobileBack = this.props.mobile
	}

	componentDidUpdate = () => {
		if (isMobileBack && !this.props.mobile && isEnter) {
			const { activeTab } = this.state;
			this.handleVideo(this[tab[activeTab - 1].key].current, activeTab);
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

    	this.handleVideo(this[ob.key].current, ob.id);
  	}	

	enter = () => {
		if (window.location.hash !== '#plan-your-day') {
            window.history.pushState('','', '#plan-your-day');
        }

        if (!isEnter && !this.props.mobile) {
        	isEnter = true;
        	this.handleVideo(this.video_1.current, 1);
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
		 		<section className="section features plan" id="plan-your-day">
		 			<div className="container">
		 				<div className="title-gr">
                            <h2>
                                Plan a day
                            </h2>
                            <p>
                                5 minutes everyday to define What Matters Most
                            </p>
                        </div>
                        { this.props.mobile ?  
                        	<Slider {...settings}>
                        		{mobileVideo}
                        	</Slider>
                        :
                        	<div className="row">
                        		<div className="col-lg-4">
	                        		<Nav tabs>
									    {navLink}
									</Nav>
								</div>
								<div className="col-lg-8">
									<TabContent activeTab={this.state.activeTab}>
									    {tabPane}
									</TabContent>
								</div>
                        	</div>
                    	}
		 			</div>
		 		</section>
	 		</Waypoint>
	 	)
	}
}
export default Plan;
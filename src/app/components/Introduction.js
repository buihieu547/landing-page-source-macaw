import React from 'react';
import ButtonLink from '../shared/Button';

const Introduction = () => {
    return (
        <section className="section introduction">
 			<div className="container">
 				<div className="row">
 					<div className="col-lg-6">
 						<div className="content">
 							<h2>
 								Focus on <span>Getting Tasks Done</span> for Your Team. <span>Everyday.</span>
 							</h2>
 							<p>
 								Macaw is the easiest way that helps your team: Plan a day, focus on daily tasks, getting all done.
 							</p>
 							<ButtonLink href="https://workplace.macaw-app.com/signup" className="btn-primary">
 								Start planning
 							</ButtonLink>
 							<div className="mouse-scroll clearfix d-none d-lg-block d-xl-block">
 								<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>mouse-animated </title> <rect data-element="frame" x="0" y="0" width="64" height="64" rx="3" ry="3" stroke="none" fill="transparent"></rect> <g transform="translate(9.600000000000001 9.600000000000001) scale(0.7)" fill="#757575"><g className="nc-loop_mouse-64"><path fill="#757575" d="M38,64H26c-7.71973,0-14-6.28027-14-14V14c0-7.71973,6.28027-14,14-14h12c7.71973,0,14,6.28027,14,14v36 C52,57.71973,45.71973,64,38,64z M26,4c-5.51367,0-10,4.48584-10,10v36c0,5.51367,4.48633,10,10,10h12c5.51367,0,10-4.48633,10-10 V14c0-5.51416-4.48633-10-10-10H26z"></path> <path data-color="color-2" d="M32,26L32,26c-1.65686,0-3-1.34314-3-3V15c0-1.65685,1.34314-3,3-3H32c1.65685,0,3,1.34314,3,3 V23C35,24.65686,33.65686,26,32,26z" transform="translate(0 0.5962080000042915)"></path></g></g></svg>
 								<div className="text-part">
 									<p>
 										Scroll to learn more
 									</p>
 								</div>
 							</div>
 						</div>
 					</div>
 					<div className="col-lg-6 d-none d-lg-block d-xl-block">
 						<embed src={require('../../assets/images/introduction.svg')} />
 					</div>
 				</div>
 			</div>
 		</section>
    )
}
export default Introduction;
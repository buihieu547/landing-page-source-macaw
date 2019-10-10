import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
 			<div className="container">
 				<div className="row">
 					<div className="col-lg-6">
 						<div className="info">
 							<p>
 								<span>
 									Copyright 2018 Macaw. All right reserved. We appreciate you!
 								</span>
 							</p>
 							<p>
 								support@macaw.com | 1900 901 910 | Unsubcribes
 							</p>
 						</div>
 					</div>
 					<div className="col-lg-6">
 						<ul className="footer-social">
 							<li className="float-left">
 								<a href="https://www.facebook.com/macawapp/">
 									<img alt="Facebook" src={require('../../assets/images/facebook.svg')} />
 								</a>
 							</li>
 							<li className="float-left">
 								<a href="https://www.linkedin.com/company/macaw-collaborative-work-management/">
 									<img alt="Linkedin" src={require('../../assets/images/linkedin.svg')} />
 								</a>
 							</li>
 						</ul>
 					</div>
 				</div>
 			</div>
 		</div>
    )
}
export default Footer;
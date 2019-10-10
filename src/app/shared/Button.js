import React from 'react';

const ButtonLink = (props) => {
    return (
    	<a href={props.href} title={props.children} className={[...(props.className || '').split(' '), 'btn btn-href'].join(' ')}>
    		{ props.children }
    	</a>
    )
}
export default ButtonLink;
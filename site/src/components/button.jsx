import React from 'react';
import '../css/button.css';

const Button = (props) => {
	const centered = props.centered || '';
	const isDisabled = props.disabled ? true : false;

	return (
		<div style={{ width: '200px' }} className={centered ? 'centered' : ''}>
			{/* add animation on ID scroll */}
			<a href={props.link}>
				<button disabled={isDisabled}>{props.children}</button>
			</a>
		</div>
	);
};

export default Button;

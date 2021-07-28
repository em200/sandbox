import React from 'react';
import '../css/button.css';

const Button = (props) => {
	const centered = props.centered || '';
	const isDisabled = props.disabled ? true : false;

	return (
		<div style={{ width: '200px' }} className={centered ? 'centered' : ''}>
			<button disabled={isDisabled}>{props.children}</button>
		</div>
	);
};

export default Button;

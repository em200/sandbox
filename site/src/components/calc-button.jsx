import React from 'react';

const isOperator = (val) => {
	return !isNaN(val) || val === '.' || val === '=';
};

const CalcButton = (props) => {
	return (
		<div
			className={`button-wrapper ${
				isOperator(props.children) ? null : 'operator'
			}`}
			onClick={() => props.handleClick(props.children)}
		>
			{props.children}
		</div>
	);
};

export default CalcButton;

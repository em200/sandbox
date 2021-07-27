import React from 'react';

const Container = (props) => {
	const color = props.background || '';
	return (
		<div className="container" style={{ background: color }}>
			{props.children}
		</div>
	);
};

export default Container;

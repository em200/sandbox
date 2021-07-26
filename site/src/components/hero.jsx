import React from 'react';
import Container from './container';

const Hero = ({ title }) => {
	return (
		<div style={{ background: '#e15989', color: 'white', textAlign: 'center' }}>
			<Container>{title}</Container>
		</div>
	);
};

export default Hero;

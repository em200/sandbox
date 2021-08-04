import React from 'react';
import Hero from '../components/hero';
import Container from '../components/container';
// import Calculator from './calculator';
import '../css/calculator.css';

const Calc = () => {
	return (
		<div>
			<Hero title="Calculator" />
			<Container>{/* <Calculator /> */}</Container>
		</div>
	);
};

export default Calc;

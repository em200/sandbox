import React, { useState, useRef } from 'react';
import Chevron from '../components/chevron';

import '../css/accordion.css';

function Accordion(props) {
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('0px');
	const [setRotate, setRotateState] = useState('accordion__icon');

	const content = useRef(null);

	function toggleAccordion() {
		setActiveState(setActive === '' ? 'active' : '');
		setHeightState(
			setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
		);
		setRotateState(
			setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
		);
	}

	return (
		<div>
			<div className={` nav ${setActive}`} onClick={toggleAccordion}>
				<Chevron className={`${setRotate}`} width={10} fill={'#777'} />
			</div>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="accordion__content"
			>
				<div className="accordion__text">content</div>
			</div>
		</div>
	);
}

export default Accordion;

import React from 'react';
import Hero from '../components/hero';
import Container from '../components/container';

const About = () => {
	const title = 'About';
	const description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
	const ctaHref = '#link';
	const cta = 'Click Here';
	const backgroundImage = 'https://picsum.photos/id/1050/1500/300';
	return (
		<div>
			<Hero
				backgroundImage={backgroundImage}
				title={title}
				description={description}
				ctaHref={ctaHref}
				cta={cta}
			/>
			<Container>
				<div id="link">content</div>
			</Container>
		</div>
	);
};

export default About;

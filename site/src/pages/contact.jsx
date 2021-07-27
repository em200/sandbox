import React from 'react';
import Hero from '../components/hero';
import Form from '../components/form';
import Container from '../components/container';
import TextImage from '../components/text-image.jsx';

const Contact = () => {
	const title = 'Contact';
	const description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
	const ctaHref = '#link';
	const cta = 'Get in contact now';
	const backgroundImage = 'https://picsum.photos/id/1050/1500/300';

	const paragraph1 =
		'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
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
				<TextImage
					layout="imageText"
					paragraph={paragraph1}
					image="https://picsum.photos/200"
				/>

				<TextImage
					layout="textImage"
					paragraph={paragraph1}
					image="https://picsum.photos/200"
				/>
			</Container>

			<Container background="#f9f9f9">
				<div id="link">
					<h2>Get in contact now</h2>
					<Form />
				</div>
			</Container>
		</div>
	);
};

export default Contact;

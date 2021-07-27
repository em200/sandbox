import React from 'react';

const TextImage = ({ paragraph, image, layout, alt, width, height }) => {
	return (
		// @TODO: make mobile classes, pass down alt text, width, heights
		<div style={{ display: 'flex', marginBottom: '2em' }}>
			{layout === 'textImage' ? (
				<>
					<div>
						<p>{paragraph}</p>
					</div>
					<div style={{ marginLeft: '2em' }}>
						<img src={image} alt="" />
					</div>
				</>
			) : (
				// else put image on left side
				<>
					<div style={{ marginRight: '2em' }}>
						<img src={image} alt="" />
					</div>
					<div>
						<p>{paragraph}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default TextImage;

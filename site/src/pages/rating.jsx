import React from 'react';
import Hero from '../components/hero';
import Container from '../components/container';
import Star from '../components/star';

const RatingIcon = (props) => {
	const {
		index,
		rating,
		hoverRating,
		onMouseEnter,
		onMouseLeave,
		onSaveRating,
	} = props;

	const fill = React.useMemo(() => {
		if (hoverRating >= index) {
			return 'yellow';
		} else if (!hoverRating && rating >= index) {
			return 'yellow';
		}
		return 'none';
	}, [rating, hoverRating, index]);

	return (
		<div
			style={{ cursor: 'pointer' }}
			onMouseEnter={() => onMouseEnter(index)}
			onMouseLeave={() => onMouseLeave()}
			onClick={() => onSaveRating(index)}
		>
			<Star fill={fill} />
		</div>
	);
};

const Rating = () => {
	const [rating, setRating] = React.useState(0);
	const [hoverRating, setHoverRating] = React.useState(0);
	const onMouseEnter = (index) => {
		setHoverRating(index);
	};

	const onMouseLeave = () => {
		setHoverRating(0);
	};

	const onSaveRating = (index) => {
		setRating(index);
	};

	const rates = [
		'No rating yet',
		'Poor',
		'Fair',
		'Good',
		'Very good',
		'Excellent',
	];

	return (
		<div>
			<Hero title="Rate It" />
			<Container>
				<div style={{ textAlign: 'center' }}>
					<p>{rates[rating]}</p>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						{[1, 2, 3, 4, 5].map((index) => {
							return (
								<RatingIcon
									index={index}
									rating={rating}
									hoverRating={hoverRating}
									onMouseEnter={onMouseEnter}
									onMouseLeave={onMouseLeave}
									onSaveRating={onSaveRating}
								/>
							);
						})}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Rating;

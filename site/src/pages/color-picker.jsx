import React, { Component } from 'react';
import Hero from '../components/hero';
import Container from '../components/container';

class ColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = { color: 'black' };
	}

	render() {
		const title = 'Click to change the color of hero';
		const description =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

		const colors = [
			{
				color: 'yellow',
			},
			{
				color: 'blue',
			},
			{
				color: 'red',
			},
			{
				color: 'pink',
			},
			{
				color: 'gray',
			},
			{
				color: 'green',
			},
			{
				color: 'purple',
			},
		];

		return (
			<div>
				<Hero
					backgroundColor={this.state.color}
					title={title}
					description={description}
				/>
				<Container>
					<div id="link">
						<h2>Select a hero color</h2>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								flexWrap: 'wrap',
							}}
						>
							{colors.map((color) => {
								return (
									<button
										style={{ width: '100px' }}
										onClick={() => this.setState({ color: color.color })}
									>
										{color.color}
									</button>
								);
							})}
						</div>
					</div>
				</Container>
			</div>
		);
	}
}

export default ColorPicker;

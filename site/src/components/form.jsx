import React, { Component } from 'react';
import '../css/form.css';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { button: 'Submit', value: '' };
		this.onChange = this.onChange.bind(this);
	}

	handleEntailmentRequest(e) {
		e.preventDefault();
		this.setState(function () {
			return {
				button: 'Thank you for your info',
			};
		});
		console.log('form was submitted');
	}

	onChange(e) {
		this.setState({ value: e.target.value });
	}

	render() {
		return (
			<form>
				<label htmlFor="name">Name</label>
				{/* @TODO: Validate email is put in */}
				<input
					type="text"
					value={this.state.value}
					id="name"
					name="name"
					placeholder="Enter your name"
					onChange={this.onChange}
				/>
				{/* @TODO: enabled if valid email only */}
				<button
					disabled={!this.state.value}
					onClick={this.handleEntailmentRequest.bind(this)}
				>
					{this.state.button}
				</button>
			</form>
		);
	}
}

export default Form;

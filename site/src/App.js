import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Weather from './pages/weather';
import ColorPicker from './pages/color-picker';
import Contact from './pages/contact';
import './App.css';
import moment from 'moment';

export default function App() {
	return (
		<Router>
			<div>
				<nav className="navbar">
					<div>
						<Link to="/">
							<img
								style={{ marginRight: '2em', borderRadius: '100px' }}
								src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg"
								width="50"
								height="50"
								alt="logo"
							/>
						</Link>
					</div>
					<div className="navbar-button">
						<Link to="/">
							<div className="navbar-tab">Home</div>
						</Link>
					</div>
					<div className="navbar-button">
						<Link to="/about">
							<div className="navbar-tab">About</div>
						</Link>
					</div>

					<div className="navbar-button">
						<Link to="/contact">
							<div className="navbar-tab">Contact</div>
						</Link>
					</div>
					<div className="navbar-button">
						<Link to="/color-picker">
							<div className="navbar-tab">Color Picker</div>
						</Link>
					</div>
					<div className="navbar-button">
						<Link to="/weather">
							<div className="navbar-tab">Weather</div>
						</Link>
					</div>
				</nav>
				<div style={{ minHeight: '30vh' }}>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/color-picker">
							<ColorPicker />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/weather">
							<Weather />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
			<footer
				style={{
					fontSize: '0.8em',
					textAlign: 'center',
					padding: '2em',
					background: 'black',
					color: 'white',
				}}
			>
				&copy; Copyright {moment().format('YYYY')}
			</footer>
		</Router>
	);
}

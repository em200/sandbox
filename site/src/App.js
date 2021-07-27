import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
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
						<Link to="/">Home</Link>
					</div>
					<div className="navbar-button">
						<Link to="/about">About</Link>
					</div>

					<div className="navbar-button">
						<Link to="/contact">Contact</Link>
					</div>
				</nav>
				<div style={{ minHeight: '30vh' }}>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
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

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Two from './pages/two';
import Three from './pages/three';
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
						<Link to="/two">2</Link>
					</div>

					<div className="navbar-button">
						<Link to="/three">3</Link>
					</div>
				</nav>
				<div style={{ background: '#f9f9f9', minHeight: '30vh' }}>
					<Switch>
						<Route path="/two">
							<Two />
						</Route>
						<Route path="/three">
							<Three />
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

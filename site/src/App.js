import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Two from './pages/two';
import Three from './pages/three';

export default function App() {
	return (
		<Router>
			<div>
				<nav style={{ background: 'gray', padding: '2em' }}>
					<img src="https://picsum.photos/50" alt="" />
					<Link to="/">Home</Link>

					<Link to="/two">2</Link>

					<Link to="/three">3</Link>
				</nav>
				<div style={{ background: '#f9f9f9', minHeight: '30vh' }}>
					<div style={{ padding: '2em' }}>
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
			</div>
			<footer style={{ padding: '2em', background: 'black', color: 'white' }}>
				footer
			</footer>
		</Router>
	);
}

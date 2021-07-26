import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">1</Link>
						</li>
						<li>
							<Link to="/two">2</Link>
						</li>
						<li>
							<Link to="/three">3</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/two">
						<Two />
					</Route>
					<Route path="/three">
						<Three />
					</Route>
					<Route path="/">
						<One />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function One() {
	return <div>1</div>;
}

function Two() {
	return <div>2</div>;
}

function Three() {
	return <div>3</div>;
}

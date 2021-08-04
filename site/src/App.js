import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import moment from 'moment';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ColorPicker from './pages/color-picker';
import Weather from './pages/weather';
import Calc from './pages/calculator';
import Rating from './pages/rating';

import Chevron from './components/chevron';

import './App.css';

function Logo({ width, height }) {
	return (
		<Link to="/">
			<img
				style={{
					borderRadius: '100px',
				}}
				src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg"
				width={width}
				height={height}
				alt="logo"
			/>
		</Link>
	);
}
function DesktopNav({ tabs }) {
	return (
		<div className="nav-desktop">
			<Logo width="50" height="50" />
			<div className="navbar-tabs">
				<Tabs tabs={tabs} />
			</div>
		</div>
	);
}
function MobileNav({ tabs }) {
	const [setActive, setActiveState] = useState('');
	const [setHeight, setHeightState] = useState('0px');
	const [setRotate, setRotateState] = useState('navbar-icon');

	const content = useRef(null);

	function toggle() {
		setActiveState(setActive === '' ? 'active' : '');
		setHeightState(
			setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
		);
		setRotateState(setActive === 'active' ? 'navbar-icon' : 'navbar-icon rotate');
	}
	return (
		<div className="nav-mobile">
			<div
				style={{ width: '100%', display: 'flex', color: 'white' }}
				className={setActive}
			>
				<div style={{ flex: '1', cursor: 'pointer' }} onClick={toggle}>
					<Chevron className={setRotate} width={10} fill={'#777'} />
				</div>
				<div style={{ flex: '1', textAlign: 'center' }}>
					<Logo width="25" height="25" />
				</div>
				<div style={{ flex: '1' }} />
			</div>
			<div
				ref={content}
				style={{ maxHeight: `${setHeight}` }}
				className="navbar-content"
			>
				<div onClick={toggle}>
					<Tabs tabs={tabs} />
				</div>
			</div>
		</div>
	);
}
function Tabs({ tabs }) {
	return (
		<>
			{tabs.map((tab) => (
				<div className="navbar-button" key={tab.url}>
					<Link to={tab.url}>
						<div className="navbar-tab">{tab.label}</div>
					</Link>
				</div>
			))}
		</>
	);
}

export default function App() {
	const tabs = [
		{
			url: '/',
			label: 'Home',
		},
		{
			url: '/about',
			label: 'About',
		},
		{
			url: '/contact',
			label: 'Contact',
		},
		{
			url: '/color-picker',
			label: 'Color Picker',
		},
		{
			url: '/weather',
			label: 'Weather',
		},
		{
			url: '/calculator',
			label: 'Calculator',
		},
		{
			url: '/rate-it',
			label: 'Rating',
		},
	];

	return (
		<Router>
			<nav className="navbar">
				<MobileNav tabs={tabs} />
				<DesktopNav tabs={tabs} />
			</nav>
			<div style={{ minHeight: 'calc(100vh - 150px)' }}>
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
					<Route path="/calculator">
						<Calc />
					</Route>
					<Route path="/rate-it">
						<Rating />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
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

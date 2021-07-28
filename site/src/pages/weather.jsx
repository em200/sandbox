import React, { useState } from 'react';
import '../css/weather.css';

const api = {
	// key: '7d4ef5d23648c7c62acd3ccfa1a0a30b',
	key: 'ae153e9619cd396cdda5840c30999bf3',
	base: 'https://api.openweathermap.org/data/2.5/',
};

function Weather() {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	const search = (evt) => {
		if (evt.key === 'Enter') {
			fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
					setQuery('');
					console.log(result);
				});
		}
	};
	const dateBuilder = (d) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		let days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${month} ${date}, ${year}`;
	};

	return (
		<>
			<div
				className={
					typeof weather.main != 'undefined'
						? `app ${weather.weather[0].main.toString().toLowerCase()}`
						: 'app'
				}
			>
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="Enter a city to see the weather .."
						onChange={(e) => setQuery(e.target.value)}
						value={query}
						onKeyPress={search}
					/>
				</div>
				{typeof weather.main != 'undefined' ? (
					<>
						<div className="location-box">
							<div className="location">
								{weather.name}, {weather.sys.country}
							</div>
							<div className="date">{dateBuilder(new Date())}</div>
						</div>
						<div className="weather-box">
							<div className="temp">
								<div>{Math.round(weather.main.temp)}&#176; F</div>
								<div
									style={{
										textShadow: 'none',
										fontSize: '16px',
										fontWeight: '500',
										marginTop: '15px',
									}}
								>
									Feels like {Math.round(weather.main.feels_like)}&#176; F
								</div>
							</div>

							<div className="weather">{weather.weather[0].description}</div>
						</div>
					</>
				) : (
					''
				)}
			</div>
		</>
	);
}

export default Weather;

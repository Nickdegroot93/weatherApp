import { WEATHER_API } from './config';

export const state = {
	weatherReport: {},
	errorMessage: '',
};

export const getWeatherData = async function (city) {
	try {
		// Loading weather report
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API}`
		);
		const data = await response.json();
		// Store report in state
		state.errorMessage = data.message
			? data.message.charAt(0).toUpperCase() + data.message.slice(1)
			: '';
		state.weatherReport = {
			city: data.name,
			country: data.sys.country,
			celcius: Math.round(data.main.temp - 273.15),
			description:
				data.weather[0].description.charAt(0).toUpperCase() +
				data.weather[0].description.slice(1),
			feelslike: Math.round(data.main.feels_like - 273.15),
			humidity: data.main.humidity,
			wind: data.wind.speed,
		};
	} catch (err) {
		throw err;
	}
};

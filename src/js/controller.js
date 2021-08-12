import * as model from './model.js';
import searchView from './views/searchView.js';
import WeatherView from './Views/WeatherView.js';

const controlWeatherReport = async function () {
	try {
		// 1) Get location from input
		const query = searchView.getQuery();
		// 2) Fetch weather data from city
		await model.getWeatherData(query);
		// 3) Render weather report
		WeatherView.render(model.state.weatherReport);
	} catch (err) {
		WeatherView.renderError(model.state.errorMessage);
	}
};

const init = function () {
	searchView.addHandlerSearch(controlWeatherReport);
};

init();

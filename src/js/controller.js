import * as model from './model.js';
import searchView from './views/searchView.js';
import View from './views/View.js';
import WeatherView from './Views/WeatherView.js';

const controlWeatherReport = async function () {
	try {
		// 1) Get city from input
		const query = searchView.getQuery();
		// 2) Load spinner
		// 3) Fetch weather data from city
		await model.getWeatherData(query);
		// 4) Render weather report
		WeatherView.render(model.state.weatherReport);
	} catch (err) {
		WeatherView.renderError();
	}
};

window.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		controlWeatherReport();
	}
});

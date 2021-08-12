import View from './View';

class WeatherReport extends View {
	_parentElement = document.querySelector('.report');
	_errorMessage = 'Location not found, please try again.';

	_generateMarkup() {
		if (!this._data.city) return 'City not found, please try again.';
		return `
        <div class="report-city">${this._data.city}, ${this._data.country}</div>
				<div class="report-info">
					<div class="report-degrees">${this._data.celcius}°c</div>
					<div class="report-details">
						<span class="report-detail report-description"
							>${this._data.description}</span
						>
						<span class="report-detail report-feelslike">Feels like ${this._data.feelslike}°c</span>
						<span class="report-detail report-humidity">Humidity: ${this._data.humidity}</span>
						<span class="report-detail report-wind">Wind: ${this._data.wind}</span>
					</div>
				</div>
        
        `;
	}
}

export default new WeatherReport();

// city: data.name,
// 			country: data.sys.country,
// 			celcius: Math.round(data.main.temp - 273.15),
// 			description: data.weather[0].description,
// 			feelslike: Math.round(data.main.feels_like - 273.15),
// 			humidity: data.main.humidity,
// 			wind: data.wind.speed,

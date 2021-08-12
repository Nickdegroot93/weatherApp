(() => {
	'use strict';
	const t = { weatherReport: {}, errorMessage: '' },
		e = new (class extends class {
			_data;
			render(t) {
				this._data = t;
				const e = this._generateMarkup();
				this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
			}
			_clear() {
				this._parentElement.innerHTML = '';
			}
			renderError(t) {
				const e = `\n          <div class="error">\n          <svg class="error-logo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\n              <p>Something went wrong, please try again. <br> Error: ${t}</p>\n            </div>`;
				this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
			}
		} {
			_parentEl = document.querySelector('.search__box');
			_searchBtn = document.querySelector('.search__btn');
			getQuery() {
				const t = this._parentEl.querySelector('.search__field').value;
				return this._clearInput(), t;
			}
			_clearInput() {
				this._parentEl.querySelector('.search__field').value = '';
			}
			addHandlerSearch(t) {
				this._searchBtn.addEventListener('click', t),
					window.addEventListener('keypress', function (e) {
						'Enter' === e.key && t();
					});
			}
		})(),
		r = new (class extends class {
			_data;
			render(t) {
				this._data = t;
				const e = this._generateMarkup();
				this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
			}
			_clear() {
				this._parentElement.innerHTML = '';
			}
			renderError(t) {
				const e = `\n          <div class="error">\n          <svg class="error-logo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>\n              <p>Something went wrong, please try again. <br> Error: ${t}</p>\n            </div>`;
				this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
			}
		} {
			_parentElement = document.querySelector('.report');
			_errorMessage = 'Location not found, please try again.';
			_generateMarkup() {
				return this._data.city
					? `\n        <div class="report-city">${this._data.city}, ${this._data.country}</div>\n\t\t\t\t<div class="report-info">\n\t\t\t\t\t<div class="report-degrees">${this._data.celcius}°c</div>\n\t\t\t\t\t<div class="report-details">\n\t\t\t\t\t\t<span class="report-detail report-description"\n\t\t\t\t\t\t\t>${this._data.description}</span\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<span class="report-detail report-feelslike">Feels like ${this._data.feelslike}°c</span>\n\t\t\t\t\t\t<span class="report-detail report-humidity">Humidity: ${this._data.humidity}</span>\n\t\t\t\t\t\t<span class="report-detail report-wind">Wind: ${this._data.wind}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        \n        `
					: 'City not found, please try again.';
			}
		})();
	e.addHandlerSearch(async function () {
		try {
			const n = e.getQuery();
			await (async function (e) {
				try {
					const r = await fetch(
							`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=47497200807f665b1c4348dd72d4d8cf`
						),
						n = await r.json();
					(t.errorMessage = n.message
						? n.message.charAt(0).toUpperCase() + n.message.slice(1)
						: ''),
						(t.weatherReport = {
							city: n.name,
							country: n.sys.country,
							celcius: Math.round(n.main.temp - 273.15),
							description:
								n.weather[0].description.charAt(0).toUpperCase() +
								n.weather[0].description.slice(1),
							feelslike: Math.round(n.main.feels_like - 273.15),
							humidity: n.main.humidity,
							wind: n.wind.speed,
						});
				} catch (t) {
					throw t;
				}
			})(n),
				r.render(t.weatherReport);
		} catch (e) {
			r.renderError(t.errorMessage);
		}
	});
})();

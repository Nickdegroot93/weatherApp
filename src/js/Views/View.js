export default class View {
	_data;

	render(data) {
		this._data = data;
		const markup = this._generateMarkup();
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	renderError(message) {
		const markup = `
          <div class="error">
          <svg class="error-logo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p>Something went wrong, please try again. <br> Error: ${message}</p>
            </div>`;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}

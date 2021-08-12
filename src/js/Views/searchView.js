import View from './View';

class SearchView extends View {
	_parentEl = document.querySelector('.search__box');
	_searchBtn = document.querySelector('.search__btn');

	getQuery() {
		const query = this._parentEl.querySelector('.search__field').value;
		this._clearInput();
		return query;
	}

	_clearInput() {
		this._parentEl.querySelector('.search__field').value = '';
	}

	addHandlerSearch(handler) {
		this._searchBtn.addEventListener('click', handler);
		window.addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				handler();
			}
		});
	}
}

export default new SearchView();

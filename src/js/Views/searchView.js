import View from './View';

class SearchView extends View {
	_parentEl = document.querySelector('.search__box');

	getQuery() {
		const query = this._parentEl.querySelector('.search__field').value;
		this._clearInput();
		return query;
	}

	_clearInput() {
		this._parentEl.querySelector('.search__field').value = '';
	}
}

export default new SearchView();

const Page = require('./page.base');
const defaultUrl = require('../data/applicationUrl');
const SearchComponent = require('./components/housing.search.component');
const SortComponent = require('./components/housing.sorting.component');

module.exports = class HousingPage extends Page {

    get searchComponent() { return new SearchComponent('.querybox') };
    get sortComponent() { return new SortComponent('.search-legend') };

    open() {
        super.open(`${defaultUrl}/search/hhh`);
    }

    searchFor(searchText) {
        this.searchComponent.searchFor(searchText);
    }

    getAvailableSortingOptions() {
        return this.sortComponent.sortingOptionsArray();
    }

};
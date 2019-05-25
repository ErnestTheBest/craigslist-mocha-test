const Page = require('./page.base');
const defaultUrl = require('../data/applicationUrl');
const SearchComponent = require('./components/housing.search.component');
const SortComponent = require('./components/housing.sorting.component');
const EntriesComponent = require('./components/housing.entries.component');

module.exports = class HousingPage extends Page {

    get searchComponent() {
        return new SearchComponent('.querybox')
    };

    get sortComponent() {
        return new SortComponent('.search-legend')
    };

    get entriesComponent() {
        return new EntriesComponent('.content')
    };

    open() {
        super.open(`${defaultUrl}/search/hhh`);
    }

    searchFor(searchText) {
        this.searchComponent.searchFor(searchText);
    }

    sortAscending() {
        this.sortComponent.sortEntriesAscending();
    }

    sortDescending() {
        this.sortComponent.sortEntriesDescending();
    }

    getAvailableSortingOptions() {
        return this.sortComponent.availableSortingOptionsArray();
    }

    getMainEntries() {
        return this.entriesComponent.entriesList();
    }

    assertHousingEntriesSortedAscending() {
        const entryList = this.getMainEntries();
        let previousValue;
        let isFine;
        for (const entry of entryList) {
            const currentPrice = entry.entryPrice;
            if (!previousValue) {
                previousValue = currentPrice;
                continue;
            }
            if (currentPrice >= previousValue) {
                previousValue = currentPrice;
                isFine = true;
            } else {
                isFine = false;
                break;
            }
        }

        return isFine;
    }

    assertHousingEntriesSortedDescending() {
        const entryList = this.getMainEntries();
        let previousValue;
        let isFine;
        for (const entry of entryList) {
            const currentPrice = entry.entryPrice;
            if (!previousValue) {
                previousValue = currentPrice;
                continue;
            }
            if (currentPrice <= previousValue) {
                previousValue = currentPrice;
                isFine = true;
            } else {
                isFine = false;
                break;
            }
        }

        return isFine;
    }

};
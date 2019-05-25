const sortValues = require('../../data/housingSortingOptions');

module.exports = class HousingSortComponent {
    constructor(parentElement) {
        this.parentElement = $(parentElement);
    }

    get sortDropDown() { return this.parentElement.$('.search-sort') };
    get sortingOptions() { return this.sortDropDown.$$('.dropdown-item') };

    sortEntriesAscending() {
        this.sortDropDown.click();
        this.sortDropDown.$(`[data-selection="${sortValues.priceAscending}"`).click();
    }

    sortEntriesDescending() {
        this.sortDropDown.click();
        this.sortDropDown.$(`[data-selection="${sortValues.priceDescending}"`).click();
    }

    availableSortingOptionsArray() {
        const elementsArray = this.sortingOptions;
        let arr = [];
        for (const el of elementsArray) {
            arr.push(el.$('a').getAttribute('data-selection'));
        }
        return arr;
    }
};
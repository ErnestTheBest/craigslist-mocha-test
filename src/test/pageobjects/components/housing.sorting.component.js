module.exports = class HousingSortComponent {
    constructor(parentElement) {
        this.parentElement = $(parentElement);
    }

    get sortDropDown() { return this.parentElement.$('.search-sort') };
    get sortingOptions() { return this.sortDropDown.$$('.dropdown-item') };

    sortingOptionsArray() {
        const elementsArray = this.sortingOptions;
        let arr = [];
        for (const el of elementsArray) {
            arr.push(el.$('a').getAttribute('data-selection'));
        }
        return arr;
    }
};
const HousingPage = require('../pageobjects/housing.page');
const housingPage = new HousingPage();
const assert = require('assert');
const sortValues = require('../data/housingSortingOptions');

describe('Craigslist housing page.', () => {

    housingPage.open();

    it('Sorting should have correct sorting options before search is used.', () => {

        const sortingOptions = housingPage.getAvailableSortingOptions();
        assert(sortingOptions.includes(sortValues.priceAscending), `Sorting options do not contain : ${sortingOptions.priceAscending}`);
        assert(sortingOptions.includes(sortValues.priceDescending), `Sorting options do not contain : ${sortingOptions.priceDescending}`);
        assert(sortingOptions.includes(sortValues.newest), `Sorting options do not contain : ${sortingOptions.newest}`);
        assert(sortingOptions.length === 3, 'Sorting contains some extra values');

    });
});
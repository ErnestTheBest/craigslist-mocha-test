const HousingPage = require('../pageobjects/housing.page');
const housingPage = new HousingPage();
const assert = require('assert');
const sortValues = require('../data/housingSortingOptions');

describe('Craigslist housing page.', () => {

    housingPage.open();

    it('Sorting should have correct sorting options after search is used.', () => {

        housingPage.searchFor('a');

        const sortingOptions = housingPage.getAvailableSortingOptions();
        assert(sortingOptions.includes(sortValues.priceAscending), `Sorting options do not contain : ${sortingOptions.priceAscending}`);
        assert(sortingOptions.includes(sortValues.priceDescending), `Sorting options do not contain : ${sortingOptions.priceDescending}`);
        assert(sortingOptions.includes(sortValues.newest), `Sorting options do not contain : ${sortingOptions.newest}`);
        assert(sortingOptions.includes(sortValues.relevant), `Sorting options do not contain : ${sortingOptions.relevant}`);
        assert(sortingOptions.includes(sortValues.upcoming), `Sorting options do not contain : ${sortingOptions.upcoming}`);
        assert(sortingOptions.length === 5, 'Sorting contains some extra values');

    });
});
const HousingPage = require('../pageobjects/housing.page');
const housingPage = new HousingPage();
const assert = require('assert');
const sortValues = require('../data/housingSortingOptions');

describe('Craigslist housing page.', () => {

    beforeEach(() => {
        housingPage.open();
    });

    it('It should be possible to sort items price ascending.', () => {
        housingPage.sortAscending();
        assert(housingPage.assertHousingEntriesSortedAscending(), 'Housing page items are not sorted ascending');
    });

    it('It should be possible to sort items price descending.', () => {
        housingPage.sortDescending();
        assert(housingPage.assertHousingEntriesSortedDescending(), 'Housing page items are not sorted descending');
    });

    it('It should be possible to sort items price descending after sorting price ascending.', () => {
        housingPage.sortAscending();
        assert(housingPage.assertHousingEntriesSortedAscending(), 'Housing page items are not sorted ascending');

        housingPage.sortDescending();
        assert(housingPage.assertHousingEntriesSortedDescending(), 'Housing page items are not sorted descending');
    });

});
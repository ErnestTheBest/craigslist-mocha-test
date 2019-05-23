const MainPage = require('../pageobjects/main.page');
const mainPage = new MainPage();
const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        // browser.url('https://webdriver.io');
        // const title = browser.getTitle();
        // assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');

        mainPage.open();
        mainPage.switchToEnglish();
        const housingPage = mainPage.openHousingPage();

        housingPage.refresh();
        /*

        housingPage.open();
        housingPage.selectSortCriteria('priceasc');
            const searchForm = this.searchForm;
            searchForm.sortCriteria.open();
            searchForm.sortCriteria.getItemFromTheListByCriteria('{PRICEASC}').click()


         */
    });
});
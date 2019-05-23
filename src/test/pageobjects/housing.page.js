const Page = require('./page.base');
const defaultUrl = require('../data/applicationUrl');

module.exports = class HousingPage extends Page {



    open() {
        super.open(`${defaultUrl}d/housing/search`);
    }

}
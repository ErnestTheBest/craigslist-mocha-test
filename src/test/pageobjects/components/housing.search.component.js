module.exports = class HousingSearchComponent {
    constructor(parentElement) {
        this.parentElement = $(parentElement);
    }

    get searchInput() { return this.parentElement.$('#query') };
    get submitButton() { return this.parentElement.$('.searchbtn') };

    searchFor(searchText) {
        this.searchInput.setValue(searchText);
        this.submitButton.click();
    }
};
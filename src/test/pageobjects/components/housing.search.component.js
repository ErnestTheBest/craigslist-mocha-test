module.exports = class HousingSearchComponent {
    get searchInput() { return this.parentElement.$('#query') };
    get submitButton() { return this.parentElement.$('.searchbtn') };

    constructor(parentElement) {
        this.parentElement = $(parentElement);
    }

    searchFor(searchText) {
        this.searchInput.setValue(searchText);
        this.submitButton.click();
    }
};
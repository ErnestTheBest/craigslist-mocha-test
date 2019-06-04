module.exports = class HousingSearchComponent {
  constructor (parentElement) {
    this.parentElement = $(parentElement)
  }

  get _searchInput () { return this.parentElement.$('#query') };

  get _submitButton () { return this.parentElement.$('.searchbtn') };

  searchFor (searchText) {
    this._searchInput.setValue(searchText)
    this._submitButton.click()
  }
}

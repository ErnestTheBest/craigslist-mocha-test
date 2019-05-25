const sortValues = require('../../data/housingSortingOptions')

module.exports = class HousingSortComponent {
  constructor (parentElement) {
    this.parentElement = $(parentElement)
  }

  get _sortDropDown () { return this.parentElement.$('.search-sort') };

  get _sortingOptions () { return this._sortDropDown.$$('.dropdown-item') };

  sortEntriesAscending () {
    this._sortDropDown.click()
    this._sortDropDown.$(`[data-selection="${sortValues.priceAscending}"`).click()
  }

  sortEntriesDescending () {
    this._sortDropDown.click()
    this._sortDropDown.$(`[data-selection="${sortValues.priceDescending}"`).click()
  }

  availableSortingOptionsArray () {
    return this._sortingOptions.map(el => {
      return el.$('a').getAttribute('data-selection')
    })
  }
}

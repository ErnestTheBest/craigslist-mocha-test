const sortValues = require('../../data/housingSortingOptions')

module.exports = class HousingSortComponent {
  constructor (parentElement) {
    this.parentElement = $(parentElement)
  }

  get _sortDropDown () { return this.parentElement.$('.search-sort') };

  get _sortingOptions () { return this._sortDropDown.$$('.dropdown-item') };

  sortEntriesAscending () {
    this._sortEntries(sortValues.priceAscending)
  }

  sortEntriesDescending () {
    this._sortEntries(sortValues.priceDescending)
  }

  availableSortingOptionsArray () {
    return this._sortingOptions.map(el => {
      return el.$('a').getAttribute('data-selection')
    })
  }

  _sortEntries (by) {
    this._sortDropDown.click()
    this._sortDropDown.$(`[data-selection="${by}"`).click()
  }
}
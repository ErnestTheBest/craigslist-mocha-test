const Page = require('./page.base')
const defaultUrl = require('../data/applicationUrl')
const SearchComponent = require('./components/housing.search.component')
const SortComponent = require('./components/housing.sorting.component')
const EntriesComponent = require('./components/housing.entries.component')

module.exports = class HousingPage extends Page {
  get _searchComponent () {
    return new SearchComponent('.querybox')
  };

  get _sortComponent () {
    return new SortComponent('.search-legend')
  };

  get _entriesComponent () {
    return new EntriesComponent('.content')
  };

  open () {
    super.open(`${defaultUrl}/search/hhh`)
  }

  searchFor (searchText) {
    this._searchComponent.searchFor(searchText)
  }

  sortAscending () {
    this._sortComponent.sortEntriesAscending()
  }

  sortDescending () {
    this._sortComponent.sortEntriesDescending()
  }

  getAvailableSortingOptions () {
    return this._sortComponent.availableSortingOptionsArray()
  }

  getMainEntries () {
    return this._entriesComponent.entriesList()
  }

  assertHousingEntriesSortedAscending () {
    const entryList = this.getMainEntries()
    let previousValue
    let isFine
    for (const entry of entryList) {
      const currentPrice = entry.entryPrice
      if (!previousValue) {
        previousValue = currentPrice
        continue
      }
      if (currentPrice >= previousValue) {
        previousValue = currentPrice
        isFine = true
      } else {
        isFine = false
        break
      }
    }

    return isFine
  }

  assertHousingEntriesSortedDescending () {
    const entryList = this.getMainEntries()
    let previousValue
    let isFine
    for (const entry of entryList) {
      const currentPrice = entry.entryPrice
      if (!previousValue) {
        previousValue = currentPrice
        continue
      }
      if (currentPrice <= previousValue) {
        previousValue = currentPrice
        isFine = true
      } else {
        isFine = false
        break
      }
    }

    return isFine
  }
}

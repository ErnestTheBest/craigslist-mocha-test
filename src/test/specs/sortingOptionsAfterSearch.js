const assert = require('assert')
const HousingPage = require('../page-objects/housingPage')
const sortValues = require('../data/housingSortingOptions')
const housingPage = new HousingPage()

describe('Craigslist housing page.', () => {
  before(() => {
    housingPage.open()
  })

  it('Sorting should have correct sorting options after search is used.', () => {
    housingPage.searchFor('a')

    const sortingOptions = housingPage.getAvailableSortingOptions()
    assert(sortingOptions.includes(sortValues.priceAscending), `Sorting options do not contain : ${sortValues.priceAscending}`)
    assert(sortingOptions.includes(sortValues.priceDescending), `Sorting options do not contain : ${sortValues.priceDescending}`)
    assert(sortingOptions.includes(sortValues.newest), `Sorting options do not contain : ${sortValues.newest}`)
    assert(sortingOptions.includes(sortValues.relevant), `Sorting options do not contain : ${sortValues.relevant}`)
    assert(sortingOptions.includes(sortValues.upcoming), `Sorting options do not contain : ${sortValues.upcoming}`)
    assert(sortingOptions.length === 5, 'Sorting contains some extra values')
  })
})

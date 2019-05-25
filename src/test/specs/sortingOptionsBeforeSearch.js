const assert = require('assert')
const HousingPage = require('../pageobjects/housing.page')
const sortValues = require('../data/housingSortingOptions')
const housingPage = new HousingPage()

describe('Craigslist housing page.', () => {
  before(() => {
    housingPage.open()
  })

  it('Sorting should have correct sorting options before search is used.', () => {
    const sortingOptions = housingPage.getAvailableSortingOptions()
    assert(sortingOptions.includes(sortValues.priceAscending), `Sorting options do not contain : ${sortValues.priceAscending}`)
    assert(sortingOptions.includes(sortValues.priceDescending), `Sorting options do not contain : ${sortValues.priceDescending}`)
    assert(sortingOptions.includes(sortValues.newest), `Sorting options do not contain : ${sortValues.newest}`)
    assert(sortingOptions.length === 3, 'Sorting contains some extra values')
  })
})

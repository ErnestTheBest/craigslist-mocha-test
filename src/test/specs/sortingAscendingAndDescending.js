const assert = require('assert')
const HousingPage = require('../page-objects/housingPage')
const housingPage = new HousingPage()

describe('Craigslist housing page.', () => {
  beforeEach(() => {
    housingPage.open()
  })

  it('It should be possible to sort items price ascending.', () => {
    housingPage.sortAscending()
    assert.ok(housingPage.assertHousingEntriesSortedAscending(), 'Housing page items are not sorted ascending')
  })

  it('It should be possible to sort items price descending.', () => {
    housingPage.sortDescending()
    assert.ok(housingPage.assertHousingEntriesSortedDescending(), 'Housing page items are not sorted descending')
  })

  it('It should be possible to sort items price descending after sorting price ascending.', () => {
    housingPage.sortAscending()
    assert.ok(housingPage.assertHousingEntriesSortedAscending(), 'Housing page items are not sorted ascending')

    housingPage.sortDescending()
    assert.ok(housingPage.assertHousingEntriesSortedDescending(), 'Housing page items are not sorted descending')
  })
})

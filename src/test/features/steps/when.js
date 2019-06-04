const HousingPage = require('../../support/page-objects/housingPage')
const housingPage = new HousingPage()

const { When } = require('cucumber')

When(
  /^I search for "([^"]*)" on housing page$/,
  searchText => {
    housingPage.searchFor(searchText)
  }
)

When(
  /^I sort items (ascending|descending)$/,
  sorting => {
    if (sorting === 'ascending' ) {
      housingPage.sortAscending()
    } else {
      housingPage.sortDescending()
    }
  }
)
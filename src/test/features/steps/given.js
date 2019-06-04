const HousingPage = require('../../support/page-objects/housingPage')
const housingPage = new HousingPage()

const { Given } = require('cucumber')

Given(
  /^I open housing page$/,
  () => {
    housingPage.open()
  }
)

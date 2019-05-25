const Page = require('./page.base')
const HousingPage = require('./housing.page')
const defaultUrl = require('../data/applicationUrl')

module.exports = class MainPage extends Page {
  get housingPageLink () { return $('#hhh') }

  get englishLanguageSwitch () { return $('#langlinks>a') }

  open () {
    super.open(defaultUrl)
  }

  openHousingPage () {
    this.housingPageLink.click()
    return new HousingPage()
  }

  switchToEnglish () {
    if (this.englishLanguageSwitch.isExisting()) {
      this.englishLanguageSwitch.click()
    }
    browser.waitUntil(() => {
      return !this.englishLanguageSwitch.isExisting()
    }, 5000, 'Language was not switched to english on main page', 300)
  }
}

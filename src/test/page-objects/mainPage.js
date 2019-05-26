const Page = require('./pageBase')
const HousingPage = require('./housingPage')
const defaultUrl = require('../data/applicationUrl')

module.exports = class MainPage extends Page {
  get _housingPageLink () { return $('#hhh') }

  get _englishLanguageSwitch () { return $('#langlinks>a') }

  open () {
    super.open(defaultUrl)
  }

  openHousingPage () {
    this._housingPageLink.click()
    return new HousingPage()
  }

  switchToEnglish () {
    if (this._englishLanguageSwitch.isExisting()) {
      this._englishLanguageSwitch.click()
    }
    browser.waitUntil(() => {
      return !this._englishLanguageSwitch.isExisting()
    }, 5000, 'Language was not switched to english on main page', 300)
  }
}

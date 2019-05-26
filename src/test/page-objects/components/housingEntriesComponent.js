const ListEntry = require('./housingListEntryComponent')

module.exports = class HousingEntriesComponent {
  constructor (parentElement) {
    this.parentElement = $(parentElement)
  }

  get _entriesElements () {
    return this.parentElement.$$('//*[contains(concat(" ",normalize-space(@class)," ")," rows ")]//h4/preceding-sibling::li')
  }

  entriesList () {
    return this._entriesElements.map(entryElements => {
      return new ListEntry(entryElements)
    })
  }
}

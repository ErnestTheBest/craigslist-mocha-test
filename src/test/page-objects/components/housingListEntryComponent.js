module.exports = class ListEntry {
  constructor (entryElement) {
    this.entryText = entryElement.$('.result-row .result-title.hdrlnk').getText()
    // I left . in numbers just in case there are some 123,456.78 numbers
    this.entryPrice = parseFloat(entryElement.$('.result-row .result-meta .result-price')
      .getText().replace(/[^0-9.]+/, ''))
  }
}
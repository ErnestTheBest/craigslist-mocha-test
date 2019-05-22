export default class Page {
    constructor() {
        this.title = 'This is page base'
    }

    open(url) {
        browser.url(url);
    }
}
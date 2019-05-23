module.exports = class Page {
    open(url) {
        browser.url(url);
    }

    refresh() {
        browser.refresh();
    }
};

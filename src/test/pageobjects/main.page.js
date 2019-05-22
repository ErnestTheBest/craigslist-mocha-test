import Page from 'page.base'
import defaultUrl from "../data/applicationUrl";

export class MainPage extends Page {
    get language() { return $('#chlang'); }
    get housingPageLink() { return $('#hhh'); }
    get englishLanguage() { return $('#langlinks a'); }

    open() {
        super.open(defaultUrl);
    }

    switchToEnglish() {
        if (this.englishLanguage.isExisting()) {
            this.englishLanguage.click();
        }
    }
}

export default new MainPage();
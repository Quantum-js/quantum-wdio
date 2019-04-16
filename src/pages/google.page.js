import Page from './Page'

class GooglePage extends Page {

    constructor() {

        super('google');
        this.siteHostPrefix = "http://google.com"
    };

    search(text) {
        $(this.loc.searchTextBox).clearElement()
        browser.setValueImmediate(this.loc.searchTextBox, text)
        $(this.loc.searchBtn).click()

    }
    searchResult(result) {
        // $('//div[@class=\"srg\"]//a').isVisible()
        // browser.waitForVisible('//div[@class=\"srg1\"]//a', 5000)

        assert.equal($(`*=${result}`).isVisible(),true, `Search result ${result} not visible`)
    }
}
module.exports= GooglePage

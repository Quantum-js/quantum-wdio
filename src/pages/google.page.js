import BasePage from './base.page'
import _ from 'lodash'

class GooglePage extends BasePage {

    constructor() {

        super();
        this.siteHostPrefix = "http://google.com"
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0]
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors)
    };

    search(text) {
        $(this.loc.searchTextBox).clearElement()
        browser.setValueImmediate(this.loc.searchTextBox, text)
        $(this.loc.searchBtn).click()

    }
    searchResult(result) {
        browser.waitForText('dddd', 200, true)
        // $('//div[@class=\"srg\"]//a').isVisible()
        browser.waitForVisible('//div[@class=\"srg1\"]//a', 5000)

        // assert.equal($(`*=${result}).isVisible(),true, `Search result ${result} not visible`)
    }
}
module.exports= GooglePage

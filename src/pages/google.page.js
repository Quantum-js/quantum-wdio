import BasePage from './base.page'
import _ from 'lodash'

class GooglePage extends BasePage {

    constructor() {

        super();
        this.siteHostPrefix = "http://google.com"
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0]
        console.log("pageName:"+ this.pageName);
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors)
    };

    search(text) {
        $(this.loc.searchTextBox).clearElement()
        browser.setValueImmediate(this.loc.searchTextBox, text)
        $(this.loc.searchBtn).click()

    }
    searchResult(result) {
        assert.equal($(`*=${result}`).isVisible(),true, `Search result ${result} not visible`)
    }
}
module.exports= GooglePage

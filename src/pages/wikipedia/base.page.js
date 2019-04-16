import Page from '../page'

class BasePage extends Page {

    constructor(pageName) {

        super(pageName)
        this.siteHostPrefix = "http://wikipedia.com"
        this.loadCheck = 'body'

    }
}
module.exports= BasePage

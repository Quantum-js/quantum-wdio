import Page from './Page'
import _ from 'lodash'

class BasePage extends Page {

    constructor() {
        super();
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0]
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors)
    }
}
module.exports= BasePage

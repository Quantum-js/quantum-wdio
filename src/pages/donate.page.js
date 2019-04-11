import BasePage from './base.page'
import _ from 'lodash'

class DonatePage extends BasePage {

    constructor() {
        super()
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0]
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors)
    }

    selectAmountAndPayment() {
        $(this.loc.justOnceButton).click()
        $(this.loc.fivedButton).click()
        $(this.loc.payButton).click()
    }

    fillDonateForm() {
       $(this.loc.nameField).setValueImmdate('Eyal')
        $(this.loc.lastNameField).click()
        $(this.loc.lastNameField).setValueImmdate('Yovel')
    }

}
module.exports= DonatePage

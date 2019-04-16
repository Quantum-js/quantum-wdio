import BasePage from './base.page'

class DonatePage extends BasePage {

    constructor() {
        super('wikipedia/donate')
    }

    selectAmountAndPayment() {
        $(this.loc.justOnceButton).click()
        $(this.loc.fivedButton).click()
        $(this.loc.payButton).click()
    }

    fillDonateForm() {
       browser.setValueImmediate(this.loc.nameField, 'Eyal')
        $(this.loc.lastNameField).click()
        browser.setValueImmediate(this.loc.lastNameField, 'Yovel')
    }

}
module.exports= DonatePage

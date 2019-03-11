import DonatePage from'../pages/donate.page.js'
import pageObjectMap from '../support/pageObjectMap.js'

module.exports = function() {
    'use strict'

    let currentPage = new pageObjectMap['DonatePage']

    this.Then(/^I select the amount and the payment method on donate page$/, function () {
        console.log(typeof(currentPage))
        return currentPage.selectAmountAndPayment()
    })

    this.Then(/^I fill the form details on donate page$/, function () {
        return currentPage.fillDonateForm()
    })
}

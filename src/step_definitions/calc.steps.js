import pageObjectMap from '../support/pageObjectMap.js'

module.exports = function() {
    'use strict'

    let currentPage = new pageObjectMap['CalcPage'];

    this.When(/^I add "(\d+)" to "(\d+)"$/, function (num1, num2) {
        browser.context('NATIVE_APP')

        return currentPage.add(num1,num2)
    })

    this.Then(/^the result should be "(\d+)"$/, function (result) {
        return currentPage.verifyResult(result)
    })
}

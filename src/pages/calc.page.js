import Page from './Page'
import _ from 'lodash'

class CalcPage extends Page {

    constructor() {
        super()
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0]
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors)
    }

    add(num1,num2){
        $(this.loc.btn_clear).waitForVisible(20000)
        // clear
        $(this.loc.btn_clear).click()
        // add
        $(this.loc['btn_' + num1]).click()
        $(this.loc.btn_add).click()
        $(this.loc['btn_' + num2]).click()
        $(this.loc.btn_equal).click()
    }

    verifyResult(expectedResult){
        let actualResult = browser.getElementText(this.loc.txtResult)
        expect(actualResult).to.include(expectedResult)
        console.log('Actual Result is: ' + actualResult)
    }
}

module.exports= CalcPage

import Page from './Page'

class CalcPage extends Page {

    constructor() {

        super('calc')
    }

    add(num1,num2){

        $(this.loc.btn_clear).waitForVisible(20000)
        // clear
        $(this.loc.btn_clear).click()
        // add
        console.log('btn_' + num1, this.loc['btn_' + num1])
        $(this.loc['btn_' + num1]).click()
        $(this.loc.btn_add).click()
        $(this.loc['btn_' + num2]).click()
        $(this.loc.btn_equal).click()
    }

    verifyResult(expectedResult){
        let actualResult = browser.getText(this.loc.txtResult)
        expect(actualResult).to.include(expectedResult)
        console.log('Actual Result is: ' + actualResult)
    }
}

module.exports= CalcPage

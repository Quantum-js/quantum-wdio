const BasePage = require('./base.page.js')
const _ = require('lodash')

class HomePage extends BasePage {

    constructor() {
        super()
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0]
        console.log("pageName:"+ this.pageName)
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors)
    }

    submit () {
        $(this.loc .searchwikiButton).click()
     }

    search (text) {
        $(this.loc.searchwikiField).clearElement()
        $(this.loc.searchwikiField).setValue(text)
        this.submit()
    }

    test () {
        return "this.loc" + this.loc.loadCheck
    }

    selectLanguage(language) {
        if(language === 'English') {
            $(this.loc.enLink).click()
        } else if(language === 'Espanol') {
            $(this.loc.esLink).click()
        }
    }

    selectDonateWikiLink() {
        $(this.loc.donateLink).click()
    }

    selectDiscussionLink() {
        $(this.loc.discussionLink).waitForExist(10000)
        $(this.loc.discussionLink).click()
    }

    selectPortadaLink() {
        $(this.loc.portadaLink).waitForExist(10000)
        $(this.loc.portadaLink).click()
    }
};

module.exports= HomePage

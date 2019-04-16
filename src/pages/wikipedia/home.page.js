import BasePage from './base.page'

class HomePage extends BasePage {

    constructor() {
        super('wikipedia/home')
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

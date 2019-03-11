import fs from'fs'
import _ from 'lodash'
import path from'path'

class Page {
    constructor() {
        this.loc = {}

        this.repoLocationKey = browser.desiredCapabilities.repoLocationKey.toLowerCase() || browser.desiredCapabilities.platformName.toLowerCase();
        console.log(`repoLocationKey ${this.repoLocationKey}`)
        this.baseLocatorsPath = '../pageLocators'
        // default url
        this.url = '/'
        this.siteHostPrefix = "http://wikipedia.com"
        this.loadCheck = 'body'
    }

    open (path) {
        browser.url(path)
    }


    // load page
    getPage() {
        let that = this
        // Note: We're calling browser.driver.get() initially so as to access the desktop storage more quickly.
        // We use browser.driver.get() instead of browser.get() so that Protractor doesn't go looking for an Angular page.
        // We then do a browser.get() to get to the actual URL being tested after setting the required NAB Survey
        // sessionStorage/localStorage parameters via pageUtils.disableNABSurveyPopup().
        //browser.debug()
        browser.url(that.siteHostPrefix + that.url)
    }

    // default element to check page is loaded


    waitForLoaded() {
        console.log('waitForLoaded')
        //return $(this.loc.loadCheck).waitForExisting(5000);
        //return browser.waitForExist(   this.loc.loadCheck, 5000    )
        return true
    }


    locators(pageName) {

        var commonLocFile = path.join(__dirname, this.baseLocatorsPath+'/common/'+pageName+'.page.loc.js')
        var platformLocFile =  path.join(__dirname, this.baseLocatorsPath+'/'+this.repoLocationKey+'/'+pageName+'.page.loc.js')
        var commonLoc, platformLoc

        if (fs.existsSync(commonLocFile)) {
            commonLoc = require(commonLocFile)
        }
        if (fs.existsSync(platformLocFile)) {
            platformLoc = require(platformLocFile)
        }
        if (_.isUndefined(platformLoc)) {
            if (_.isUndefined(commonLoc)) {
                // throw new Error("Locator file for " + pageName + " is undefined!");
                return {selectors: {}}

            }
            return  commonLoc
        }
        else {
            if (_.isUndefined(commonLoc)) {
                return platformLoc
            }

            var mergeLoc = _.merge(commonLoc, platformLoc)
            return mergeLoc
        }
    }
}
module.exports = Page

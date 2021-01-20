import fs from'fs'
import _ from 'lodash'
import path from'path'

class Page {

    constructor(pageName) {

        this.pageName = pageName || this.getPageName()
        this.siteHostPrefix = ''
        this.repoLocationKey = browser.desiredCapabilities.repoLocationKey.toLowerCase() || browser.desiredCapabilities.platformName.toLowerCase()
        this.baseLocatorsPath = '../pageLocators'
        this.loc = _.merge(this.loc, this.locators(this.getPageName()).selectors)
        // default url
        this.url = '/'
    }

    open (path) {
        browser.url(path)
    }


    // load page
    getPage() {
        let that = this
        browser.url(this.siteHostPrefix)
        // console.log('waitForLoaded')
        //browser.isExisting(this.loc.loadCheck)
        browser.waitForExist(this.loc.loadCheck,5000)
        // return true
    }


    waitForLoaded() {
        browser.waitForExist(this.loc.loadCheck,5000)
    }

    locators(pageName) {

        const commonLocFile = path.join(__dirname, this.baseLocatorsPath+'/common/'+pageName+'.page.loc.js')
        const platformLocFile =  path.join(__dirname, this.baseLocatorsPath+'/'+this.repoLocationKey+'/'+pageName+'.page.loc.js')
        let commonLoc, platformLoc

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

            const mergeLoc = _.merge(commonLoc, platformLoc)
            return mergeLoc
        }
    }

    getPageName () {

        let name =  this.pageName || __filename.split(__dirname+"/").pop().split('\.')[0]
        console.log('name ' + name)
        return name

    }
}
module.exports = Page

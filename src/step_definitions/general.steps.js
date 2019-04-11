import _ from 'lodash'
import pageObjectMap from '../support/pageObjectMap.js'

module.exports = function() {
    'use strict'

    this.Given('the {string} is at the {string} of google', function (user, pageName) {
        return browser.url('http://www.google.com')
    })

    this.Given('.*\(covered by .*\)', function () {
    })

    this.Given(/^I (?:am on|go to) the "([^"]*)" page$/, function (pageName) {
        if (!_.isUndefined(pageObjectMap[pageName])) {
            this.currentPage = new pageObjectMap[pageName]
        }

        var that = this;
        that.currentPage.getPage();
        // that.currentPage.waitForLoaded()

    })

    this.Given(/^I (?:have|change to|resize to|rotate to) a (\d+)x(\d+) screen size$/, function (width, height) {
        return browser.setViewPortSize({
            width: parseInt(width, 10),
            height: parseInt(height, 10)
        })
    })

    this.When('I (?:navigate|click) (?:backwards|back) in my browser', function () {
        return browser.back()
    })


    this.When(/^I type "([^"]*)" in(?:to)? the "([^"]*)" field$/, function (text, fieldName) {

        let field
        //TODO: Write logic to create string to var names to replace cukefarm logic


        return browser.setValueImmediate(fieldName, text)

        // field = this.transform.stringToVariableName(fieldName + 'Field');

        // var that = this;
        // return that.pageUtils.waitForClickable(that.currentPage[field])
        //     .then(function () {
        //         return that.currentPage[field].clear();
        //     })
        //     .then(function() {
        //         return that.currentPage[field].sendKeys(text);
        //     });


        //this.currentPage[field].clear();
        //return this.currentPage[field].sendKeys(text);
    });

    this.When(/^I click the "([^"]*)"(?: )?(link|button|drop down list|tab|field|element|)$/, function (elementName, elementType) {
        //
        // var elementType = this.transform.elementTypeToVariableName(elementType);
        // var el = this.transform.stringToVariableName(elementName + elementType);
        // var that = this;
        //
        // that.pageUtils.scrollToElement(this.currentPage[el]);
        // return that.pageUtils.clickElement(this.currentPage[el]);

        //this.pageUtils.waitForClickable(this.currentPage[el]);
        //this.pageUtils.waitForVisible(this.currentPage[el]);

        //return this.currentPage[el].click();
        // browser.pause(2000);
        // browser.setTimeout({ 'implicit': 10000 });
        return browser.click(elementName)
    })

    this.When('I refresh the page', function () {
        return browser.refresh()
    })

    this.When('I select "([^"]*)" in the "([^"]*)" drop down list', function (optionText, list) {

        // var el = this.transform.stringToVariableName(list + 'Select');
        // var that = this;
        // return that.pageUtils.waitForClickable(this.currentPage[el]).then(function() {
        //     return that.currentPage[el].element(protractor.By.cssContainingText('option', optionText)).click();
        // });

    })
    this.Given(/^I start application by name "([^"]*)"$/, function (appName) {
        return browser.execute("mobile:application:open", {'name': appName})
    })
    this.Given(/^I start application by id "([^"]*)"$/, function (appID) {
        return browser.execute("mobile:application:open", {'identifier': appID})
    })
    this.Then('the title should equal "([^"]*)"', function (text) {
        // return this.expect(browser.getTitle()).to.eventually.equal(text);
    })
    this.Then('the "([^"]*)" (should|should not) be active', function (tabName, expectation) {
        // this.tabName = this.transform.stringToVariableName(tabName);
        // this.expectation = this.transform.shouldToBoolean(expectation);
        //
        // var that = this;
        // return that.pageUtils.waitForVisible(that.currentPage[that.tabName]).then(function() {
        //     return that.expect(that.elementHelper.hasClass(that.currentPage[that.tabName], 'active')).to.eventually.equal(that.expectation);
        // })

    })
    this.Then('the "([^"]*)" (should|should not) be present', function (el, expectation) {
        // this.el = this.transform.stringToVariableName(el);
        // this.expectation = this.transform.shouldToBoolean(expectation);
        // if (this.expectation) {
        //     this.pageUtils.waitForVisible(this.currentPage[this.el]);
        // } else {
        //     this.pageUtils.waitForNotVisible(this.currentPage[this.el]);
        // }
        //
        // return this.expect(this.currentPage[this.el].isPresent()).to.eventually.equal(this.expectation);
    })
    this.Then(/^I (?:should be on|reach|am taken to) the "([^"]*)" page$/, function (pageName) {
        if (!_.isUndefined(pageObjectMap[pageName])) {
            this.currentPage = new pageObjectMap[pageName]
        }

        return this.currentPage.waitForLoaded()
    })


    this.Then('(?:the )?"([^"]*)" should (?:have|contain) the text "([^"]*)"', function (el, text) {
        // var elText;
        //
        // var elem = this.transform.stringToVariableName(el);
        // var that = this;
        // return that.pageUtils.waitForVisible(that.currentPage[elem]).then(function() {
        //     that.el = that.currentPage[elem];
        //     elText = that.el.getTagName().then((function (_this) {
        //         return function (tagName) {
        //             var isInput;
        //             isInput = tagName === "input";
        //             if (isInput) {
        //                 return _this.el.getAttribute('value');
        //             } else {
        //                 return _this.el.getText();
        //             }
        //         };
        //     })(that));
        //     return that.expect(elText).to.eventually.contain(text);
        // });

    })

    this.Then('"([^"]*)" should appear in the "([^"]*)" drop down list', function (option, list) {
        // var optionsText;
        // this.list = this.currentPage[this.transform.stringToVariableName(list + 'Select')];
        // optionsText = this.list.all(By.tagName('option')).map(function (element, index) {
        //     return element.getText();
        // });
        // return this.expect(optionsText).to.eventually.contain(option);
    })

    this.Then('the "([^"]*)" (should|should not) be displayed', function (el, shouldBeDisplayed) {
        // var isDisplayed;
        // this.shouldBeDisplayed = this.transform.shouldToBoolean(shouldBeDisplayed);
        // this.el = this.transform.stringToVariableName(el);
        // return isDisplayed = this.currentPage[this.el].isDisplayed().then((function (_this) {
        //     return function (isDisplayed) {
        //         return _this.expect(isDisplayed).to.equal(_this.shouldBeDisplayed);
        //     };
        // })(this), (function (_this) {
        //     return function (err) {
        //         if (err.name === 'NoSuchElementError') {
        //             return _this.expect(false).to.equal(_this.shouldBeDisplayed);
        //         }
        //         throw err;
        //     };
        // })(this));
    })

    this.Then('(?:the )?"([^"]*)" should (?:have|contain) the placeholder text "([^"]*)"', function (el, text) {
        // this.el = this.currentPage[this.transform.stringToVariableName(el)];
        // return this.expect(this.el.getAttribute('placeholder')).to.eventually.contain(text);
    })

    this.Then('the "([^"]*)"(?: )?(button|field|drop down list|) (should|should not) be enabled', function (el, elType, expectation) {
        // var elementType;
        // elementType = this.transform.elementTypeToVariableName(elType);
        // this.el = this.transform.stringToVariableName(el + elementType);
        // this.expectation = this.transform.shouldToBoolean(expectation);
        // return this.expect(this.currentPage[this.el].isEnabled()).to.eventually.equal(this.expectation);
    })

    this.Then('"([^"]*)" should be (?:selected|displayed) in the "([^"]*)" drop down list', function (optionText, list) {
        // var option;
        // this.list = this.currentPage[this.transform.stringToVariableName(list + 'Select')];
        // option = this.list.element(By.cssContainingText('option', optionText));
        // return this.expect(option.isSelected()).to.eventually.be["true"];
    })

    this.Then('the "([^"]*)"(?: )?(checkbox|) (should|should not) be checked', function (el, elType, expectation) {
        // var elementType;
        // elementType = this.transform.elementTypeToVariableName(elType);
        // this.el = this.transform.stringToVariableName(el + elementType);
        // this.expectation = this.transform.shouldToBoolean(expectation);
        // return this.expect(this.currentPage[this.el].isSelected()).to.eventually.equal(this.expectation);
    })

    this.When(/^I wait for (\d+) seconds(?:.*)$/, function (seconds) {
        //TODO - Lloyds issue work
        // browser.pause(3000);
        // browser.url('http://www.google.com');
        // browser.click('//input[@type=\'search\']');
        // browser.setValue( '//input[@type=\'search\']', 'Hello');
        // browser.element('fail').click();
        // browser.element('pass').click();
        // browser.element('skip').click();
        return browser.pause(seconds * 1000);

    })
}

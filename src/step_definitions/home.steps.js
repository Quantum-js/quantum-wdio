const HomePage = require('../pages/home.page.js');

const _ = require('lodash');
const pageObjectMap = require('../support/pageObjectMap.js');

module.exports = function() {
    'use strict';

    let currentPage = new pageObjectMap['HomePage'];

    this.Then(/^I search for "([^"]*)" value$/, function (text) {
        return currentPage.search(text);
    });

    this.Then(/^I select "([^"]*)" language on home page$/, function (language) {
        return currentPage.selectLanguage(language);
    });


    this.Then(/^I select donate to wikipedia link on home page$/, function () {
        return currentPage.selectDonateWikiLink();
    });

    this.Then(/^I select discussion link on home page$/, function () {
        return currentPage.selectDiscussionLink();
    });

    this.Then(/^I select portada link on home page$/, function () {
        return currentPage.selectPortadaLink();
    });

}

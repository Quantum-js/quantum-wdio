const pageObjectMap = require('../support/pageObjectMap.js');

module.exports = function() {
    'use strict';

    let currentPage = new pageObjectMap['GooglePage'];

    this.When(/^I search for "([^"]*)"$/, function (text) {
        return currentPage.search(text);
    });

    this.Then(/^It should have "([^"]*)" in search results$/, function (result) {
        return currentPage.searchResult(result);
    });
};

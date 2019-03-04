const Page = require('./Page.js');
const _ = require('lodash');

class BasePage extends Page {

    constructor() {
        super();
        this.pageName = __filename.split(__dirname+"/").pop().split('\.')[0];
        console.log("pageName:"+ this.pageName);
        this.loc = _.merge(this.loc, this.locators(this.pageName).selectors);
    }

};

module.exports= BasePage;

let file, files, extraFiles, extraFilesPattern, globule, i, len, page, path;

globule = require('globule');
path = require('path');

files = globule.find('**/pages/**/*.page.js');

console.log('found ' + files.length + ' common page objects..');

if (process.env.TEST_ASSET_PATH) {
    extraFilesPattern = process.env.TEST_ASSET_PATH + '/**/*.page.js';
    console.log('searching for extra page objects using ' + extraFilesPattern);
    extraFiles = globule.find(extraFilesPattern);
    if (extraFiles.length > 0) {
        console.log('found ' + extraFiles.length + ' extra page objects');
        files = files.concat(extraFiles);
    }
}

let pageObjectTimingLabel = "page object load duration";
console.time(pageObjectTimingLabel);
for (i = 0; i < files.length; i++) {
    page = require(path.resolve(files[i]));
    // commenting this out to reduce noise in job outout - uncomment locally for debug if required
     console.log('adding page [' + page.name + ']');
    module.exports[page.name] = page;
}


console.timeEnd(pageObjectTimingLabel);
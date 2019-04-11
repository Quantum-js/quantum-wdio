const chai=require('chai');

global.expect=chai.expect;
global.assert=chai.assert;
global.should=chai.should();


// The Perfecto Continuous Quality Lab you work with
global.CQL_NAME='ps'
const host=CQL_NAME+'.perfectomobile.com'

global.projectName="WDIO_TESTS_SERVICE";

const tagsFile = process.env.CUCUMBER_TAGS_FILE || 'google.tags.json'
const tags = process.env.CUCUMBER_TAGS_LIST
const tagsConf = tags || require (`../test-config/tags/${tagsFile}`)
let caps=require(`../test-config/devices/${process.env.E2E_DEVICE}`);

const specPath='./src/features/**/*.feature';

global.STEP_TIMEOUT=900000;
global.IMPLICIT_TIMEOUT=5000;
global.WAITFOR_TIMEOUT=10000;

exports.config={

    services:['perfecto'],
    user:process.env.PERFECTO_USER,
    securityToken:process.env.PERFECTO_TOKEN,
    host:host,
    path:'/nexperience/perfectomobile/wd/hub',
    port:80,
    specs: specPath,
    exclude:[],
    sync: true,
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'verbose',
    //
    maxInstances:4,
    framework:'cucumber',
    reporters:['cucumber'],
    reporterOptions:{
        junit:{
            outputDir:'./reports'
        }
    },

    cucumberOpts:{
        require:[
            './src/step_definitions'
        ],
        ignoreUndefinedDefinitions:true,
        timeout:STEP_TIMEOUT,
        tags:tagsConf

    },
    perfectoOpts:{
        executionTags:['WDIO','Cucumber','HS2','test'],
        customFields:{
            testIndex:1,
            test:true
        },
        fastWeb:false,

    },
    capabilities:caps
}

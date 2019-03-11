const chai=require('chai');

global.expect=chai.expect;
global.assert=chai.assert;
global.should=chai.should();

const tagsConf=require('../test-config/tags/google.tags.json')

//ThePerfectoContinuousQualityLabyouworkwith
global.CQL_NAME='ps'
const host=CQL_NAME+'.perfectomobile.com'

global.STEP_TIMEOUT=900000;
global.IMPLICIT_TIMEOUT=5000;
global.WAITFOR_TIMEOUT=10000;

global.projectName="WDIO_TESTS_SERVICE";

let caps=require(`../test-config/devices/${process.env.E2E_DEVICE}`);

const specPath='./src/features/**/*.feature';

exports.config={

    services:['perfecto'],
    user:process.env.PERFECTO_USER,
    securityToken:process.env.PERFECTO_TOKEN,
    host:host,
    path:'/nexperience/perfectomobile/wd/hub',
    port:80,
    specs: specPath,
    exclude:[],
    maxInstances:4,
    framework:'cucumber',
    reporters:['cucumber','junit'],
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

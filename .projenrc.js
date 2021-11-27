const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.132.0',
  defaultReleaseBranch: 'main',
  name: 'test-awscdk-app',

});
project.synth();
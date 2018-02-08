var path = require('path');

var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
  config.set({
    basePath: path.join(__dirname, '..'),
    colors: true,
    singleRun: true,

    browsers: ['Chrome'],

    frameworks: ['mocha'],

    files: [
      'spec/globals.js',
      { pattern: 'spec/**/*Spec.js', watched: false }
    ],

    logLevel: config.LOG_INFO,

    port: 9876,

    preprocessors: {
      'spec/globals.js': ['webpack'],
      'spec/*Spec.js': ['webpack'],
      'spec/**/*Spec.js': ['webpack']
    },

    reporters: ['progress'],

    webpackServer: {
      noInfo: true
    },

    webpack: webpackConfig
  });
};

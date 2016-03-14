module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/**/*.js',
      'app/js/app.js',
      'app/js/controllers.js',
      'test/unit/controllersSpec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
    'app/tests/*.js': [ 'browserify' ]
    },

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

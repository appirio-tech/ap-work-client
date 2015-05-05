(function () {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.layout',
    'app.getting-started',
    'app.login',
    'app.submit-work',
    'app.create-account',
    'app.view-work',
    'app.timeline',
    'app.demo',
    'newrelic'
  ]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(false);
  }]);

})();

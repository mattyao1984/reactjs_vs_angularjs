'use strict';

/**
 * @ngdoc overview
 * @name reactangularJsApp
 * @description
 * # reactangularJsApp
 *
 * Main module of the application.
 */
angular
  .module('reactangularJsApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

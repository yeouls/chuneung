'use strict';

/**
 * @ngdoc overview
 * @name chuneungApp
 * @description
 * # chuneungApp
 *
 * Main module of the application.
 */
angular
  .module('chuneungApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/left', {
        templateUrl: 'views/left-sidebar.html',
        controller: 'AboutCtrl'
      })
      .when('/right', {
        templateUrl: 'views/right-sidebar.html',
        controller: 'AboutCtrl'
      })
      .when('/no_side', {
        templateUrl: 'views/no-sidebar.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/* global app:true */
'use strict';

var app = angular
  .module('ppmProjectApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/projects.html',
        controller: 'projectsCtrl'
      })
      .when('/create', {
        templateUrl: 'views/projectForm.html',
        controller: 'projectFormCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('FIREBASE_URL', 'https://shining-fire-3410.firebaseio.com/');

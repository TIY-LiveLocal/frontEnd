var mainApp = angular.module('mainApp', ['ngRoute']);
  mainApp.config(function($routeProvider){
    $routeProvider
    .when('/places', {
      templateUrl: '../../profile.html'
    })
    .otherwise({
      redirectTo: '/places'
    });
  });

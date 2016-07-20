
var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl: 'views/login.html'
  })
  .when('/dashboard',{
    templateUrl: 'views/dashboard.html',
    controller: 'testController'
  })
  .when('/places', {
    templateUrl: '../../profile.html'
  })
  .when('/business_edit', {
    templateUrl: 'views/bus_edit_profile.html'
  })
  .otherwise({
    redirectTo: 'login'
  });
});

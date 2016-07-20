
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
  .when('/business_questionnaire',{
    templateUrl: 'views/business_questionnaire.html',
    controller: 'bqController'
  })
  // Why isn't http://localhost:3000/?#/consumer_questionnaire showing up?
  .when('/consumer_questionnaire',{
    templateUrl: 'views/consumer_questionnaire.html',
    controller: 'cqController'
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


var app = angular.module("app", ['ngRoute', "firebase" , "uiGmapgoogle-maps"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl: 'views/login.html',
    controller: 'loginController'
  })
  .when('/signup',{
    templateUrl: 'views/signup.html',
    controller: 'signupController'
  })
  .when('/dashboard',{
    templateUrl: 'views/dashboard.html',
    controller: 'dashboardCtrl'
  })
  .when('/matches',{
    templateUrl: 'views/matches.html',
    controller: 'matchesCtrl'
  })
  .when('/business_questionnaire',{
    templateUrl: 'views/business_questionnaire.html',
    controller: 'bqController'
  })
  .when('/consumer_questionnaire',{
    templateUrl: 'views/consumer_questionnaire.html',
    controller: 'cqController'
  })
  .when('/business', {
    templateUrl: 'views/profile.html'
  })

  .when('/business_edit', {
    templateUrl: 'views/bus_edit_profile.html'
  })
  .when('/factory',{
    templateUrl: 'views/yelp.html',
    controller: 'yelpCtrl'
  })
  .when('/business_search', {
    templateUrl: 'views/biz_search.html',
    controller: 'bizSearchController'
  })
  .otherwise({
    redirectTo: 'login'
  });
});

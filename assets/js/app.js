
var app = angular.module("app", ['ngRoute', "firebase"]);

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
    controller: 'testController'
  })
  .when('/business_questionnaire',{
    templateUrl: 'views/business_questionnaire.html',
    controller: 'bqController'
  })
  .when('/consumer_questionnaire',{
    templateUrl: 'views/consumer_questionnaire.html',
    controller: 'cqController'
  })
  .when('/places', {

    templateUrl: 'views/profile.html'
  })

  .when('/business_edit', {
    templateUrl: 'views/bus_edit_profile.html'
  })

  .when('/business_search', {
    templateUrl: 'views/biz_search.html'
  })
  .otherwise({
    redirectTo: 'login'
  });
});


var app = angular.module("app", ['ngRoute', "firebase" , "uiGmapgoogle-maps"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/login',{
    templateUrl: 'views/login.html',
    controller: 'loginController'
  })
  .when('/home',{
    templateUrl: 'views/home.html',
    controller: 'loginController'
  })
  .when('/signup',{
    templateUrl: 'views/signup.html',
    controller: 'signupController'
  })
  .when('/discover',{
    templateUrl: 'views/dashboard.html',
    controller: 'dashboardCtrl'
  })
  .when('/you',{
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
    templateUrl: 'views/profile.html',
    controller: 'qCtrl'
  })

  .when('/business_edit', {
    templateUrl: 'views/bus_edit_profileNEW.html'
  })

  .when('/factory',{
    templateUrl: 'views/yelp.html',
    controller: 'yelpCtrl'
  })
  .when('/search', {
    templateUrl: 'views/biz_search.html',
    controller: 'bizSearchCtrl'
  })
  .when('/survey_results', {
    templateUrl: 'views/survey_results.html',
    controller: 'surveyResultsController'
  })
  .otherwise({
    redirectTo: 'home'
  });
});

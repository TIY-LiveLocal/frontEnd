var app = angular.module("app", ['ngRoute', "firebase" , "uiGmapgoogle-maps"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl: 'assets/views/home.html',
  })
  .when('/login',{
    templateUrl: 'assets/views/login.html',
    controller: 'loginController'
  })
  .when('/signup',{
    templateUrl: 'assets/views/signup.html',
    controller: 'signupController'
  })
  .when('/discover',{
    templateUrl: 'assets/views/dashboard.html',
    controller: 'dashboardCtrl'
  })
  .when('/you',{
    templateUrl: 'assets/views/matches.html',
    controller: 'matchesCtrl'
  })
  .when('/survey',{
    templateUrl: 'assets/views/survey.html',
    controller: 'cqController'
  })
  .when('/business', {
    templateUrl: 'assets/views/profile.html'
  })
  .when('/edit', {
    templateUrl: 'assets/views/edit.html'
  })
  .when('/search', {
    templateUrl: 'assets/views/biz_search.html',
    controller: 'bizSearchCtrl'
  })
  .otherwise({
    redirectTo: 'home'
  });
});

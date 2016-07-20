
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
  .when('/places', {
    templateUrl: '../../profile.html'
  })
  .otherwise({
    redirectTo: 'login'
  });
});

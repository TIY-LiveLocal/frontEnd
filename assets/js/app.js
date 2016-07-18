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
  .otherwise({
    redirectTo: 'login'
  });
});

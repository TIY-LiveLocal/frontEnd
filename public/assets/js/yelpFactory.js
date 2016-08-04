app.factory('yelpFactory', ['$http',function($http){

  var token = localStorage.getItem('authorization');

  $http({
    method:'GET',
    url:'url',
    headers:{'token':token}
  });
}]);

app.factory('dbFactory', ['$http', function($http){

  var yelpUrl = 'https://livelocalrails.herokuapp.com/businesses';
  var dbFactory = {};
  var token = localStorage.getItem('token');

  dbFactory.callOne = function(){
    return $http({
        method: 'GET',
        url: yelpUrl,
        headers: {'Authorization':token}
        // params: {'page':3}
    });
  };
  return dbFactory;
}]);

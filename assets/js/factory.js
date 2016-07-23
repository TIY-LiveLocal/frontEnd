app.factory('dbFactory', ['$http', function($http){

  var yelpUrl = 'https://livelocalrails.herokuapp.com/businesses';
  var dbFactory = {};
  var token = localStorage.getItem('token');


  dbFactory.getYelp = function(){
    return $http({
        method: 'GET',
        url: yelpUrl,
        headers: {'Authorization':token}

    });
  };

  console.log(dbFactory);
  return dbFactory;

}]);

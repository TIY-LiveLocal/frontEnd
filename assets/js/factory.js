app.factory('yelpFactory', ['$http', function($http){

  var yelpUrl = 'https://livelocalrails.herokuapp.com/businesses';
  var yelpFactory = {};
  var token = localStorage.getItem('token');


  yelpFactory.getYelp = function(){
    return $http({
        method: 'GET',
        url: 'https://livelocalrails.herokuapp.com/businesses',
        headers: {'Authorization':token}

    });
  };

  console.log(yelpFactory); //returns the function
  return yelpFactory;

}]);

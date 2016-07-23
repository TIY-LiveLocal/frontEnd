app.controller('dashboardCtrl', ['$scope','dbFactory', function($scope, dbFactory){

  getYelp();

  function getYelp(){
    dbFactory.getYelp()
      .then(function(response){
        console.log(response);
        $scope.businesses = response.data;
        $scope.username = response.config.headers.Authorization;
      });
  }

}]);

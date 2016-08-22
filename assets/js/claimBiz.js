app.controller('claimThisBiz', ['$http', '$scope', function($http, $scope){

var token = localStorage.getItem('token');


  $scope.claimIt = function(){
    $http({
      method: 'POST',
      url:
      headers:{'Authorization': token}

    })
  }

}])

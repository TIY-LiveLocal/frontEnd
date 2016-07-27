
app.controller('bizSearchController', ['$scope','$http', function($scope, $http){

  $scope.searchToClaim = function(){

    searchToClaimData = {
      term: $scope.term,
      location: $scope.location
    };

    console.log(searchToClaimData);

    $http({
      method: 'GET',
      url: 'https://6b6decab.ngrok.io/find_business',
      // https://livelocalrails.herokuapp.com/find_business
      params: searchToClaimData,
      headers: {'Authorization':'blah'}


      }).then(function successCallback(response){
        console.log(response);
      }, function errorCallback (response){

      });

  // below closes searchButtonClicked function
  };
  //  below closes controller line 1
}]);

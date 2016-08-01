app.controller('yelpCtrl',['$scope','yelpFactory', function($scope, yelpFactory){

function(cats){

  yelpFactory.getInformation();
  .then(function(promise){
    $scope.results = promise.data;
    console.log(promise);
  });
}

  console.log(yelpFactory);

}]);

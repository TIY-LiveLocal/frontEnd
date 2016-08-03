app.controller('cqController', ['$http', '$scope','$location',
 function($http, $scope,$location) {

//nav bar toggle
  $scope.dropDown = false;

  $scope.hiring = false;
  $scope.glutFree = false;
  $scope.musicians = false;
  $scope.lgbt = false;
  $scope.livWage = false;
  $scope.localFood = false;
  $scope.minorityOwned = false;
  $scope.petFriend = false;
  $scope.artsCrafts = false;
  $scope.charNonprof = false;
  $scope.sustain = false;
  $scope.veganPeta = false;
  $scope.claimBusiness = false;

$scope.clicked = function(){

  console.log($scope.claimBusiness);

  data = {
    hiring : $scope.hiring,
    glutFree : $scope.glutFree,
    musicians : $scope.musicians,
    lgbt : $scope.lgbt,
    livWage : $scope.livWage,
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    petFriend : $scope.petFriend,
    artsCrafts : $scope.artsCrafts,
    charNonprof : $scope.charNonprof,
    sustain : $scope.sustain,
    veganPeta : $scope.veganPeta
  };

  console.log(data);

  var token = localStorage.getItem('token');

  $http({
    method: 'POST',
    url: "https://livelocalrails.herokuapp.com/surveys",
    // url: "https://57e91829.ngrok.io/surveys",
    data:data,
    headers:{'Authorization': token}
  }).then(function success(response){
    console.log(response);
    $location.path('/you');
  }, function error(response){
    console.log(response);
  });

};


}]);

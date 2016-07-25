app.controller('cqController', ['$http', '$scope', function($http, $scope) {
  $scope.hiring = false;
  $scope.glutFree = false;
  $scope.musicians = false;
  $scope.lgbt = false;
  $scope.livWage = false;
  $scope.localFood = false;
  $scope.minorityOwned = false;
  $scope.petFriend = false;
  $scope.artCrafts = false;
  $scope.charNonprof = false;
  $scope.sustain = false;
  $scope.veganPeta = false;

$scope.clicked1 = function(){
  data = {
    hiring : $scope.hiring,
    envResp : $scope.envResp,
    glutFree : $scope.glutFree,
    musicians : $scope.musicians,
    lgbt : $scope.lgbt,
    livWage : $scope.livWage,
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    petFriend : $scope.petFriend,
    artCrafts : $scope.artCrafts,
    charNonprof : $scope.charNonprof,
    veganPeta : $scope.veganPeta,
  };
  console.log(data);


  $http({
    method: 'POST',
    url: "https://livelocalrails.herokuapp.com/businesses",
    data:data,
  }).then(function success(response){
    console.log(response);
  });
};
}]);

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

// possible solution below doesn't seem to work http://stackoverflow.com/questions/33660712/angularjs-post-fails-response-for-preflight-has-invalid-http-status-code-404
  // app.config(function ($httpProvider) {
  //   $httpProvider.defaults.headers.common = {};
  //   $httpProvider.defaults.headers.post = {};
  //   $httpProvider.defaults.headers.put = {};
  //   $httpProvider.defaults.headers.patch = {};
  // });

  $http({
    method: 'POST',
    url: "https://livelocalrails.herokuapp.com/businesses",
    data:data,
  }).then(function success(response){
    console.log(response);
  });
};
}]);

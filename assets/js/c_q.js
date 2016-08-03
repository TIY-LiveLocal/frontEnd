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
    data:data,
    headers:{'Authorization': token}
  }).then(function success(response){
    console.log(response);
    $location.path('/you');
  }, function error(response){
    console.log(response);
  });

};

  $scope.check_hiring = false;
  $scope.checkedHiring = function(){
    $scope.check_hiring = !$scope.check_hiring;
  };
  $scope.check_glutFree = false;
  $scope.checkedGlutFree = function(){
    $scope.check_glutFree = !$scope.check_glutFree;
  };
  $scope.check_musicians = false;
  $scope.checkedMusic = function(){
    $scope.check_musicians = !$scope.check_musicians;
  };
  $scope.check_lgbt = false;
  $scope.checkedLgbt = function(){
    $scope.check_lgbt = !$scope.check_lgbt;
  };
  $scope.check_localFood = false;
  $scope.checkedFood = function(){
    $scope.check_localFood = !$scope.check_localFood;
  };
  $scope.check_minorityOwned = false;
  $scope.checkedMinOwned = function(){
    $scope.check_minorityOwned = !$scope.check_minorityOwned;
  };
  $scope.check_livWage = false;
  $scope.checkedWage = function(){
    $scope.check_livWage = !$scope.check_livWage;
  };
  $scope.check_petFriend = false;
  $scope.checkedPets = function(){
    $scope.check_petFriend = !$scope.check_petFriend;
  };
  $scope.check_artsCrafts = false;
  $scope.checkedArtsCrafts = function(){
    $scope.check_artsCrafts = !$scope.check_artsCrafts;
  };
  $scope.check_charNonProf = false;
  $scope.checkedNonProf = function(){
    $scope.check_charNonProf = !$scope.check_charNonProf;
  };
  $scope.check_sustain = false;
  $scope.checkedSustain = function(){
    $scope.check_sustain = !$scope.check_sustain;
  };
  $scope.check_veganPeta = false;
  $scope.checkedVeganPeta = function(){
    $scope.check_veganPeta = !$scope.check_veganPeta;
  };


}]);

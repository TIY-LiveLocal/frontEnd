app.controller('bqController', ['$http','$scope', function($http, $scope) {

  //nav bar toggle
    $scope.dropDown = false;

$scope.clicked =  function(){

  stringData= {
    name : $scope.name,
    address : $scope.address,
    city : $scope.city,
    zipcode : $scope.zipcode,
    phone : $scope.phone,
    website_url : $scope.website_url,
    image_url : $scope.image_url,
    biz_descrip : $scope.biz_descrip,
    hiring : $scope.hiring,
    glutFree : $scope.glutFree,
    musicians : $scope.musicians,
    lgbt : $scope.lgbt,
    livWage : $scope.livWage,
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    petFriend : $scope.petFriend,
    artCrafts : $scope.artCrafts,
    charNonprof : $scope.charNonprof,
    sustain : $scope.sustain,
    veganPeta : $scope.veganPeta
  };

  console.log(stringData);
// ..................
var token = localStorage.getItem('token');

$http({
  method:'POST',
  url:"https://62d39126.ngrok.io/surveys/business",
  data: stringData,
  headers: {'Authorization':token}
}).then(function successCallback(response){
    // $location.path('/dashboard');
  console.log(response);
}, function errorCallback (response){

});

console.log(token);
// returns a promise

};
}]);

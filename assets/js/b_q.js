app.controller('bqController', ['$http', '$scope', function($http, $scope) {

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

$scope.clicked =  function(){


  stringData= {
    name : $scope.name,
    address : $scope.address,
    city : $scope.city,
    zipcode : $scope.zipcode,
    phone : $scope.phone,
    website_url : $scope.website_url,
    image_url : $scope.image_url,
    biz_descrip : $scope.biz_descrip
  };

    checkboxData={
    hiring : $scope.hiring,
    glutFree : $scope.glutFree,
    musicians : $scope.musicians,
    lgbt : $scope.lgbt,
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    livWage : $scope.livWage,
    petFriend : $scope.petFriend,
    artsCrafts : $scope.artsCrafts,
    charNonprof : $scope.charNonprof,
    sustain : $scope.sustain,
    veganPeta : $scope.veganPeta
  };
  // var both = {stringData,checkboxData};
  console.log(checkboxData);
// ..................
var token = localStorage.getItem('Authorization');

$http({
  method:'POST',
  url:"https://livelocalrails.herokuapp.com/surveys",
  // https://2b242aff.ngrok.io/surveys
  data:checkboxData,
  headers: {'Authorization':token}
}).then(function successCallback(response){
  console.log(response);
}, function errorCallback (response){

});

console.log(token);
// returns a promise

};
}]);

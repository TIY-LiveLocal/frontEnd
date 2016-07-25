app.controller('bqController', ['$http', '$scope', function($http, $scope) {

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

$scope.clicked =  function(){
  data= {
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
    localFood : $scope.localFood,
    minorityOwned : $scope.minorityOwned,
    livWage : $scope.livWage,
    petFriend : $scope.petFriend,
    artCrafts : $scope.artCrafts,
    charNonprof : $scope.charNonprof,
    sustain : $scope.sustain,
    veganPeta : $scope.veganPeta

  };
  console.log(data);
  // console.log($scope.clicked.hiring);

// possible solution below doesn't seem to work http://stackoverflow.com/questions/33660712/angularjs-post-fails-response-for-preflight-has-invalid-http-status-code-404
  // app.config(function ($httpProvider) {
  //   $httpProvider.defaults.headers.common = {};
  //   $httpProvider.defaults.headers.post = {};
  //   $httpProvider.defaults.headers.put = {};
  //   $httpProvider.defaults.headers.patch = {};
  // });

//   $http({
//     method: 'POST',
//     url: "https://livelocalrails.herokuapp.com/businesses",
//     data:data,
//   }).then(function success(response){
//     console.log(response);
//   });
};
}]);

// $http({
//     method: 'GET',
//     url: 'https://livelocalrails.herokuapp.com/businesses.json'
// }).success(function call(userList) {
//
//     $scope.businesses = userList;
//
//     console.log(userList);
//
// });

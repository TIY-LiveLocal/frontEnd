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
    biz_descrip : $scope.biz_descrip
  };

  console.log(stringData);
// ..................
// var token = localStorage.getItem('Authorization');

$http({
  method:'POST',
  url:"https://livelocalrails.herokuapp.com/surveys",
  data: stringData,
  headers: {'Authorization':'blah'}
}).then(function successCallback(response){
    $location.path('/dashboard');
  console.log(response);
}, function errorCallback (response){

});

console.log(token);
// returns a promise

};
}]);

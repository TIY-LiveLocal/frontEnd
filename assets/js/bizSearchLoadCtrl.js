console.log('businesses will load upon search');

app.controller('bizSearchLoadCtrl', ['$http', '$scope', function($http, $scope){

$scope.load = function(){
  data = [
    loadName = $scope.name,
    loadCity = $scope.location.city,
    loadState = $scope.location.state_code,
    loadPhone = $scope.display_phone,
    loadRating = $scope.rating,
  ]

  $http({
    method: 'POST',
    url: 'https://e74a3659.ngrok.io/find_business',
    data: data,
    headers: {'Authorization': 'token'}
  }).then(function success (response){
  console.log(response);
}, function errorCallback (response){
  alert('Something went wrong');
})
  };
  }
])

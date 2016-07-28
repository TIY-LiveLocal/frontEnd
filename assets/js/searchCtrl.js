
console.log('businesses will load upon search');

app.controller('searchCtrl', ['$http', '$scope', function($http, $scope){

$scope.searchThing = function(){
  thingData = {
    thingName : $("#searchNearMe").val()
  }

  console.log('user clicked search for local');


  $http({
    method: 'POST',
    url: 'https://e74a3659.ngrok.io/find_business',
    data: thingData,
    headers: {'Authorization': 'token'}
  }).then(function success (response){
  console.log(response);
}, function errorCallback (response){
  alert('Something went wrong');
})
  };
  }
])

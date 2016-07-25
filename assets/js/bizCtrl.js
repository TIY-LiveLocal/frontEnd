app.controller('bizController', ['$http', '$scope', function($http, $scope) {

  var token = localStorage.getItem('Authorization');
  console.log(token);

  // $scope.bizProfile = function pullData(){


  $http({
      method: 'GET',
      url: 'https://livelocalrails.herokuapp.com/find.json',
      data: {location:27701},
      headers: {'Authorization': 'asdf'}

  }).success(function call(data) {
      $scope.businesses = data;


      console.log(data);

  });

}]);

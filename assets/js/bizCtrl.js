app.controller('bizController', ['$http', '$scope', function($http, $scope) {

  var token = localStorage.getItem('Authorization');
  console.log(token);

  $http({
      method: 'GET',
      url: 'https://livelocalrails.herokuapp.com/find.json',
      data: {zip_code:27701},
      headers: {'Authorization': 'asdf'}

  }).success(function call(data) {
      $scope.businesses = data;

      console.log(data);

  });

}]);

app.controller('testController', ['$http', '$scope', function($http, $scope) {

  var token = localStorage.getItem('token');
  console.log(token);

    $http({
        method: 'GET',
        url: 'https://livelocalrails.herokuapp.com/businesses',
        headers: {'Authorization':token}

    }).success(function call(userList) {
        $scope.businesses = userList;

        console.log(userList);
    });

}]);

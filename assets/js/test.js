app.controller('testController', ['$http', '$scope', function($http, $scope) {

  var token = localStorage.getItem('token');
  console.log(token);

    $http({
        method: 'GET',
        url: 'https://livelocalrails.herokuapp.com/businesses',
        headers: {'Authorization':token}

    }).then(function call(userList) {
        $scope.businesses = userList.data;
        $scope.username = userList.config.headers.Authorization;

        console.log(userList);
    });

}]);

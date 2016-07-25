app.controller('bizProfController', ['$http', '$scope', function($http, $scope) {


    $http({
        method: 'GET',
        url: 'https://livelocalrails.herokuapp.com/businesses.json'
      }).success(function call(userList) {

          $scope.businesses = userList;

          console.log(userList);

        });

    }]);

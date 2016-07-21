app.controller('bizController', ['$http', '$scope', function($http, $scope) {


    $http({
        method: 'GET',
        url: 'https://livelocalrails.herokuapp.com/find.json',
        data: {location:27701},
        headers:{'Authorization': 'asdf'}
      }).success(function call(userList) {

          // $scope.businesses = userList;

          console.log(userList);

        });

    }]);

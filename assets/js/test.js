app.controller('testController', ['$http', '$scope', function($http, $scope) {

  var token = localStorage.getItem('token');
  console.log(token);

    $http({
        method: 'GET',
        // url: 'https://681ca077.ngrok.io/businesses/1.json'
        url: 'https://livelocalrails.herokuapp.com/businesses.json',
        headers: {'Authorization':'asdf'}

    }).success(function call(userList) {
        $scope.businesses = userList.businesses;

        console.log(userList);

    });

}]);

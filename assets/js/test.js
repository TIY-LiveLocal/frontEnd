app.controller('testController', ['$http', '$scope', function($http, $scope) {


    $http({
        method: 'GET',
        // url: 'https://681ca077.ngrok.io/businesses/1.json'
        url: 'https://livelocalrails.herokuapp.com/businesses.json'
    }).success(function call(userList) {

        $scope.businesses = userList;

        console.log(userList);

    });

}]);

app.controller('loginController', ['$http', '$scope', '$location', function($http, $scope, $location) {

    //capture user login input
    $scope.login = function() {
        data = {
            username: $scope.username,
            password: $scope.password,
        };

        $http({
            method: 'POST',
            url: "https://livelocalrails.herokuapp.com/sign_in",
            data: data,
            headers: {
                'Authorization': 'firebaseToken'
            }
        }).then(function success(response) {
            localStorage.setItem('token', response.data.token); //SET LOCALSTORAGE TOKEN TO RETURNED DATA
            $scope.firstname = localStorage.setItem('firstname', response.data.first_name);
            $scope.user_zipcode = localStorage.setItem('user_zipcode', response.data.zip_code);
            $location.path('/you'); //if call is successful, send user to dashboard page
        }, function errorCallback(response) {
            $scope.errorMsg = 'Invalid username or password.';
        });
    };
}]);

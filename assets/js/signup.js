app.controller('signupController', ['$http', '$scope','$location', function($http, $scope, $location) {

  $scope.getStarted = function(){
    data = {
      first_name : $scope.first_name,
      last_name : $scope.last_name,
      username : $scope.username,
      email : $scope.email,
      password : $scope.password,
      confirm_password : $scope.confirm_password,
      zip_code : $scope.zip_code
    };
    console.log(data);

  $http({
    method: 'POST',
    url: "https://9ac18a38.ngrok.io/sign_up",
    data: data
    }).then(function success(response){
      localStorage.setItem('token',response.data.token);
      $location.path('/login');

    console.log(response);
  }, function errorCallback(error){
    alert(error.data.message);
    console.log(error);
  });

};

}]);





// "https://livelocalrails.herokuapp.com/find?zipcode=" + ZIPCODE VARIABLE + "&name=" + BIZ NAME VARIABLE;
